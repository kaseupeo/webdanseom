package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Work;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WorkRepository extends CrudRepository<Work, Long> {
    List<Work> findByNurseGroupSeq(int nurseGroupSeq);
    List<Work> findByNurseNurseSeq(int nurseSeq);
}
