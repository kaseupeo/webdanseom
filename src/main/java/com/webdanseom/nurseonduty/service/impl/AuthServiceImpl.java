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
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
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

@Service
public class AuthServiceImpl implements AuthService {

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

    @Autowired
    private NurseGroupRepository nurseGroupRepository;

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
     * @return
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
    public void verifyhttp://localhost:8080/member/password/Email(String key) throws NotFoundException {
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
        String VERIFICATION_LINK = "http://localhost:8080/member/verify/";
        if (member == null) throw new NotFoundException("멤버가 조회되지 않습니다.");
        UUID uuid = UUID.randomUUID();
        redisUtil.setDataExpire(uuid.toString(), member.getEmail(), 1800L);
        emailService.sendEmail(member.getEmail(), "[Nurse On Duty]회원가입 인증메일입니다.", VERIFICATION_LINK+uuid.toString());
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
    public void editProfile(Member member, String phoneNumber) throws NotFoundException {
        if (member == null) throw new NotFoundException("editProfile(), 회원이 조회되지 않습니다.");
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

    /**
     * 그룹 생성, 가입, 초대
     * */
    //그룹 생성
    @Override
    @Transactional
    public void createGroup(NurseGroup nurseGroup, Member member) {
        UUID uuid = UUID.randomUUID();

        //그룹초기정보 insert
        nurseGroup.setHeadNurseNum(member.getMemberSeq());
        nurseGroup.setNumberOfDays(2);
        nurseGroup.setNumberOfEvenings(2);
        nurseGroup.setNumberOfNights(2);
        nurseGroup.setInviteLink(uuid.toString());

        //회원 간호사에 그룹번호 업데이트
        try {
            joinGroup(nurseGroup.getSeq(), nurseGroup.getInviteLink(), member);
        } catch (NotFoundException e) {
            throw new RuntimeException(e);
        }

        String CREATE_GROUP = "http://localhost:8080/member/createGroup/";

        redisUtil.setDataExpire(uuid.toString(), nurseGroup.getGroupName(), 1800L);
        emailService.sendEmail(member.getEmail(), "[Nurse On Duty] 새그룹을 생성하셨습니다.  그룹명: " + nurseGroup.getGroupName(), CREATE_GROUP + uuid.toString());

        nurseGroupRepository.save(nurseGroup);
    }

    //그룹 초대
    public String inviteGroup(int seq, String inviteLink) {
        UUID uuid = UUID.randomUUID();
        String INVITE_LINK = "http://localhost:8080/member/inviteGroup/" + inviteLink;

        return INVITE_LINK;
    }

    //그룹 가입
    @Override
    public void joinGroup(int seq, String inviteLink, Member member) throws NotFoundException {
        if (member == null) throw new NotFoundException("joinGroup(), 로그인을 먼저 하십시오.");
        if(nurseGroupRepository.findByInviteLink(inviteLink) == null) throw new NotFoundException("joinGroup(), 해당초대장는 만료되었거나 존재하지 않는 초대장입니다.");

        NurseGroup nurseGroup = new NurseGroup();
        nurseGroup.setSeq(seq);
        member.setGroupSeq(nurseGroup);

        memberRepository.save(member);
    }

}
