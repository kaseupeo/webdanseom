package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Work;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface WorkRepository extends CrudRepository<Work, Long> {

    @Query(value = "SELECT * FROM work where work.nurse_group = :nurseGroupSeq AND YEAR(work.date) = YEAR(:date) AND MONTH(work.date) = MONTH(:date)", nativeQuery = true)
    List<Work> findGroupWork(@Param("nurseGroupSeq") int nurseGroupSeq,
                             @Param("date") Date date);
    List<Work> findByNurseNurseSeq(int nurseSeq);
    Work findByDateAndNurseNurseSeqAndNurseGroupSeq(Date date, int nurseSeq, int nurseGroupSeq);
}
