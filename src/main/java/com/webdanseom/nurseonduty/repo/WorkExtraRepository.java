package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Work;
import com.webdanseom.nurseonduty.model.WorkExtra;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface WorkExtraRepository extends CrudRepository<WorkExtra, Long> {

    @Query(value = "SELECT * FROM work_extra where work_extra.nurse_group = :nurseGroupSeq AND YEAR(work_extra.date) = YEAR(:date) AND MONTH(work_extra.date) = MONTH(:date)", nativeQuery = true)
    List<WorkExtra> findGroupWorkExtra(@Param("nurseGroupSeq") int nurseGroupSeq,
                                       @Param("date") Date date);

    List<WorkExtra> findByNurseGroupSeq(int nurseGroupSeq);
    WorkExtra findByWorkExtraSeq(int workExtraSeq);

    WorkExtra findByDateAndNurseNurseSeqAndNurseGroupSeq(Date date, int nurse, int nurseGroupSeq);

}
