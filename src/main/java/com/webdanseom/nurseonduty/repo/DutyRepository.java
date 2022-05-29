package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Duty;
import com.webdanseom.nurseonduty.model.NurseGroup;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DutyRepository extends CrudRepository<Duty, Long> {
    List<Duty> findByNurseGroupSeq(int nurseGroupSeq);

    Duty findByDutySeq(int dutySeq);

}
