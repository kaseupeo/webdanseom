package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Nurse;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface NurseRepository extends CrudRepository<Nurse, Long> {
    List<Nurse> findByNurseGroupSeq(int nurseGroupSeq);
    Nurse findByNurseSeq(int nurseSeq);
    Nurse findByName(String name);
    Nurse findByNameAndNurseGroupSeq(String name, int nurseGroupSeq);
}
