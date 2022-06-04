package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: AuthService.java
 * 설명: 회원이 이용할 수 있는 모든 서비스기능의 실제 구현 java 클레스
 *      회원가입(일반, 소셜), 로그인(일반,소셜), 이메일인증 , 이메일확인, 이메일인증번호 발송,인증번호확인, 비밀번호 변경
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자: 2022.05.12
 * 수정자:신동현
 */
import com.webdanseom.nurseonduty.config.UserRole;
import com.webdanseom.nurseonduty.model.*;
import com.webdanseom.nurseonduty.model.request.RequestSocialData;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import com.webdanseom.nurseonduty.repo.SocialDataRepository;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.EmailService;
import com.webdanseom.nurseonduty.service.RedisUtil;
import com.webdanseom.nurseonduty.service.SaltUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class AuthServiceImpl implements AuthService {
    //이메일서비스 인터페이스 호출
    @Autowired
    private EmailService emailService;

    @Autowired
    private SocialDataRepository socialDataRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private SaltUtil saltUtil;

    @Autowired
    private RedisUtil redisUtil;

    /**
     * 회원가입
     * @param member
     */
    @Override
    @Transactional
    public void signUpUser(Member member) {
        String password = member.getPassword();
        String salt = SaltUtil.genSalt();

        member.setSalt(new Salt(salt));
        member.setPassword(saltUtil.encodePassword(salt, password));
        memberRepository.save(member);
    }

    /**
     * 이메일 중복 검사
     * @param email
     * @throws Exception
     */
    @Override
    public void isDuplicateCheckEmail(String email) throws Exception {
        if (memberRepository.findByEmail(email) != null) throw new Exception("존재하는 이메일입니다.");
    }

    /**
     * 이메일 유효성 검사
     * @param email
     * @throws Exception
     */
    @Override
    public void isValidEmail(String email) throws Exception {
        Pattern pattern = Pattern.compile("^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$");
        Matcher matcher = pattern.matcher(email);
        if (!matcher.find()) throw new Exception("이메일 형식이 맞지 않습니다.");
    }

    /**
     * 비밀번호 유효성 검사
     * @param password
     * @throws Exception
     */
    @Override
    public void isValidPassword(String password) throws Exception {
        Pattern pattern = Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,}$");
        Matcher matcher = pattern.matcher(password);
        if (!matcher.find()) throw new Exception("비밀번호는 영문과 특수문자 숫자를 포함하며 8자 이상이어야 합니다.");
    }

    /**
     * 전화번호 유효성 검사
     * @param phoneNumber
     * @throws Exception
     */
    @Override
    public void isValidPhoneNumber(String phoneNumber) throws Exception {
        Pattern pattern = Pattern.compile("^\\d{11}$");
        Matcher matcher = pattern.matcher(phoneNumber);
        if (!matcher.find()) throw new Exception("전화번호 형식이 틀렸습니다.");
    }

    /**
     * 소셜 계정으로 회원가입
     * @param member
     */
    @Override
    @Transactional
    public void signUpSocialUser(RequestSocialData member) {
        Member newMember = new Member();
        newMember.setEmail(member.getEmail());
        newMember.setPassword("");
        newMember.setName(member.getName());
        newMember.setPhoneNumber(member.getPhoneNumber());
        newMember.setSocialData(new SocialData(member.getEmail(), member.getType()));
        memberRepository.save(newMember);
    }

    /**
     * 로그인
     * @param email
     * @param password
     * @return member
     * @throws Exception
     */
    @Override
    public Member loginUser(String email, String password) throws Exception {
        Member member = memberRepository.findByEmail(email);

        if (member==null) throw new Exception("조회되지 않습니다.");

        String salt = member.getSalt().getSalt();
        password = saltUtil.encodePassword(salt, password);

        if (!member.getPassword().equals(password)) throw new Exception("비밀번호가 틀립니다.");
        if (member.getSocialData() != null) throw new Exception("소셜 계정으로 로그인해주세요.");
        return member;
    }

    /**
     * 소셜 계정 로그인
     * @param id
     * @param type
     * @return
     * @throws NotFoundException
     */
    @Override
    public Member loginSocialUser(String id, String type) throws NotFoundException {
        SocialData socialData = socialDataRepository.findByIdAndType(id, type);
        if (socialData == null) throw new NotFoundException("회원이 조회되지 않습니다.");
        return socialData.getMember();
    }

    /**
     * 회원정보 조회
     * @param email
     * @return
     * @throws NotFoundException
     */
    @Override
    public Member findByEmail(String email) throws NotFoundException {
        Member member = memberRepository.findByEmail(email);
        if (member == null) throw new NotFoundException("회원이 조회되지 않습니다.");
        return member;
    }

    /**
     * 이메일 확인
     * @param key
     * @throws NotFoundException
     */
    @Override
    public void verifyEmail(String key) throws NotFoundException {
        String memberEmail = redisUtil.getData(key);
        Member member = memberRepository.findByEmail(memberEmail);
        if (member == null) throw new NotFoundException("회원이 조회되지않습니다.");
        modifyUserRole(member, UserRole.ROLE_USER);
        redisUtil.deleteData(key);
    }

    /**
     * 인증 메일 발송
     * @param member
     * @throws NotFoundException
     */
    @Override
    public void sendVerificationMail(Member member) throws NotFoundException {
        String VERIFICATION_LINK = "http://localhost:3000/app/";
        //링크 바꿔야됨
        if (member == null) throw new NotFoundException("멤버가 조회되지 않습니다.");
        UUID uuid = UUID.randomUUID();
        redisUtil.setDataExpire(uuid.toString(), member.getEmail(), 1800L);
        emailService.sendEmail(member.getEmail(), "[Nurse On Duty]회원가입 인증메일입니다.n", VERIFICATION_LINK+uuid.toString());
    }

    @Override
    public void modifyUserRole(Member member, UserRole userRole) {
        member.setRole(userRole);
        memberRepository.save(member);
    }

    @Override
    public boolean isPasswordUuidValidate(String key) {
        String memberEmail = redisUtil.getData(key);
        return !memberEmail.equals("");
    }

    /**
     * 비밀번호 변경
     * @param member
     * @param password
     * @throws NotFoundException
     */
    @Override
    public void changePassword(Member member, String password) throws NotFoundException {
        if (member == null) throw new NotFoundException("changePassword(), 회원이 조회되지 않습니다.");
        String salt = saltUtil.genSalt();
        member.setSalt(new Salt(salt));
        member.setPassword(saltUtil.encodePassword(salt, password));
        memberRepository.save(member);
    }

    /**
     * 비밀번호 찾기
     * @param member
     * @throws NotFoundException
     */
    @Override
    public void findPassword(Member member) throws NotFoundException {
        String CHANGE_PASSWORD_LINK = "http://localhost:8080/member/password/";
        if (member == null) throw new NotFoundException("회원이 조회되지 않습니다.");
        String key = REDIS_CHANGE_PASSWORD_PREFIX + UUID.randomUUID();
        redisUtil.setDataExpire(key, member.getEmail(), 1800L);
        emailService.sendEmail(member.getEmail(), "[Nurse On Duty] 사용자 비밀번호 안내 메일", CHANGE_PASSWORD_LINK + key);
    }

    /**
     * 회원정보 수정 
     * @param member
     * @param phoneNumber
     * @throws NotFoundException
     */
    @Override
    public void updateProfile(Member member, String name, String phoneNumber) throws NotFoundException {
        if (member == null) throw new NotFoundException("editProfile(), 회원이 조회되지 않습니다.");
        member.setName(name);
        member.setPhoneNumber(phoneNumber);
        memberRepository.save(member);
    }

    /**
     * 회원탈퇴
     * @param password
     * @throws NotFoundException
     */
    @Override
    public void withdrawal(Member member, String password) throws Exception {
        if (member == null) throw new NotFoundException("withdrawal(), 회원이 조회되지 않습니다.");
        String salt = member.getSalt().getSalt();
        password = saltUtil.encodePassword(salt, password);
        if (!member.getPassword().equals(password)) throw new Exception("비밀번호가 틀립니다.");
        memberRepository.delete(member);
    }
}
