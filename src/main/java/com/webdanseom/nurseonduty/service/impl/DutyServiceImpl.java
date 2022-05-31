package com.webdanseom.nurseonduty.service.impl;

import com.webdanseom.nurseonduty.model.Duty;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.repo.DutyRepository;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.service.DutyService;
import com.webdanseom.nurseonduty.service.GroupService;
import javassist.NotFoundException;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

@Service
public class DutyServiceImpl implements DutyService {
    @Autowired
    private DutyRepository dutyRepository;

    @Autowired
    private NurseGroupRepository nurseGroupRepository;

    @Autowired
    private GroupService groupService;

    /**
     * 초기 듀티코드 생성
     * @param nurseGroup
     * @param index
     * @throws NotFoundException
     * */
    @Override
    public  void initializeDuty(NurseGroup nurseGroup, int index) throws NotFoundException {
        if(nurseGroup == null) throw new NotFoundException("initializeDuty(), 받은 초기 듀티코드가 없습니다.");
        List<Duty> dutyList = new ArrayList<Duty>();
        Duty duty = new Duty();
        String[] dutyCode = {"D","E","N", "/", "DE", "EN", "X", "H", "6", "8","9", "10","11", "1P", "2P", "M", "연", "반"
                , "교", "출", "훈","병", "분", "산", "청", "휴", "결", "파", "사", "G", "D단1", "D단2", "D단3", "D단4", "D단5"
                , "D단6", "E단1", "E단2", "E단3", "E단4", "E단5", "E단6"};
        String[] dutyName = {"데이", "이브닝", "나이트", "오프", "데이이브닝", "이브닝나이트", "없음", "Half", "6A", "8A"
                , "9A", "10A", "11A", "1P", "2P", "12MD", "연차", "반차", "교육", "츌장", "훈련", "병가", "분만", "산재", "청휴"
                , "휴직", "결근", "파견", "사직", "타부서지원", "D단축1시간", "D단축2시간", "D단축3시간", "D단축4시간","D단축5시간"
                , "D단축6시간", "E단축1시간", "E단축2시간", "E단축3시간", "E단축4시간", "E단축5시간", "E단축6시간"};
        Time[] startTime = {Time.valueOf("07:00:00"),Time.valueOf("15:00:00"), Time.valueOf("23:00:00")
                , null, Time.valueOf("07:00:00"), Time.valueOf("15:00:00"), null , Time.valueOf("07:00:00")
                , Time.valueOf("06:00:00"), Time.valueOf("08:00:00"), Time.valueOf("09:00:00"), Time.valueOf("10:00:00")
                , Time.valueOf("11:00:00"), Time.valueOf("13:00:00"), Time.valueOf("14:00:00"), Time.valueOf("12:00:00")
                , null, Time.valueOf("00:00:00"), Time.valueOf("09:00:00"), Time.valueOf("09:00:00"), Time.valueOf("00:00:00")
                , null, null, null, null, null, null, Time.valueOf("00:00:00"), null, Time.valueOf("00:00:00")
                , Time.valueOf("07:00:00"), Time.valueOf("07:00:00"), Time.valueOf("07:00:00"), Time.valueOf("07:00:00")
                , Time.valueOf("07:00:00"), Time.valueOf("07:00:00"), Time.valueOf("15:00:00"), Time.valueOf("15:00:00")
                , Time.valueOf("15:00:00"), Time.valueOf("15:00:00"), Time.valueOf("15:00:00"), Time.valueOf("15:00:00")};
        int[] workingHours = {8,8,8,0,16,16,0,4,8,8,8,8,8,8,8,8,0,4,8,8,0,0,0,0,0,0,0,0,0,8,1,2,3,4,5,6,1,2,3,4,5,6};
        String[] workType = {"Day", "Evening", "Night", "Off", "DayEvening", "EveningNight", "Off like", "Day like", "Day like"
                , "Day like", "Day like", "Day like", "Day like", "Evening Like", "Evening Like", "Mid", "Off like", "Day like"
                , "Day like", "Day like", "Day like", "Off like", "Off like", "Off like", "Off like", "Off like", "Off like"
                , "Day like", "Off like", "Day like", "Day like", "Day like", "Day like", "Day like", "Day like", "Day like"
                , "Evening Like", "Evening Like", "Evening Like", "Evening Like", "Evening Like", "Evening Like"};
        Boolean[] isUsable ={true, true, true, true, true, true, true, false, false, false, false, false, false, false
                , false, true, true, true, false, false, false, false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, false, false, false, false, false};

            duty.setDutyCode(dutyCode[index]);
            duty.setNurseGroup(nurseGroup);
            duty.setDutyCodeName(dutyName[index]);
            duty.setWorkingHours(workingHours[index]);
            duty.setWorkType(workType[index]);
            duty.setHexColor("#FFFFFF");
            duty.setStartTime(startTime[index]);
            duty.setIsUsable(isUsable[index]);
            duty.setCreator("시스템");
            addDuty(duty);
    }

    /**
     * 듀티 조회
     * @param dutySeq
     * @throws NotFoundException
     * */
    @Override
    public Duty findByDutySeq(int dutySeq) throws NotFoundException {
        Duty duty = dutyRepository.findByDutySeq(dutySeq);
        if(duty == null) throw new NotFoundException("듀티가 조회되지 않습니다.");
        return duty;
    }

    /**
     * 듀티 목록 조회
     * @param nurseGroupSeq
     * @throws NotFoundException
     * */
    @Override
    public List<Duty> selectDuty(int nurseGroupSeq) throws NotFoundException {
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(nurseGroupSeq);
        if(nurseGroup == null) throw new NotFoundException("듀티가 조회되지 않습니다.");
        List<Duty> duty = dutyRepository.findByNurseGroupSeq(nurseGroupSeq);
        return duty;
    }

    /**
     *듀티 추가
     * @param duty
     * @throws NotFoundException
     */
    @Override
    public void addDuty(Duty duty) throws NotFoundException{
        if(duty ==null) throw new NotFoundException("addDuty(), 추가할 듀티가 없습니다.");
        dutyRepository.save(duty);
    }

    /**
     *듀티수정
     * @param duty
     * @throws NotFoundException
     *  */
    @Override
    public void updateDuty(Duty duty) throws NotFoundException{
        if(duty == null) throw new NotFoundException("updateDuty(), 수정할 듀티가 없습니다.");
        dutyRepository.save(duty);
    }

    /**
     *듀티삭제
     * @param duty
     * @throws Exception
     */
    @Override
    public void deleteDuty(Duty duty) throws  Exception {
        if(duty == null) throw new NotFoundException("deleteDuty(), 삭제할 듀티가 없습니다. \n 삭제할 듀티를 선택해 주세요.");
        dutyRepository.delete(duty);
    }

    /**
     *초기화
     * @param duty
     * @throws Exception
     */
    @Override
    public void returnDuty(Duty duty) throws Exception {
        if(duty == null) throw new NotFoundException("returnDuty(), 초기화 실패.");
        deleteDuty(duty);
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(duty.getNurseGroup().getSeq());
        for(int i = 0; i < 42; i++)
            initializeDuty(nurseGroup, i);
    }
}
