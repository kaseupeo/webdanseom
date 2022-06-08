package com.webdanseom.nurseonduty.repo;
/**
 * 파일명: WorkRepository.java
 * 설명:
 * 작성일자:2022.06.05
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
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
    @Query(value = "SELECT * FROM work where work.nurse = :nurseSeq AND YEAR(work.date) = YEAR(:date) AND MONTH(work.date) = MONTH(:date)", nativeQuery = true)
    List<Work> findByNurseWork(@Param("nurseSeq") int nurseSeq,
                               @Param("date") Date date);
    Work findByDateAndNurseNurseSeqAndNurseGroupSeq(Date date, int nurseSeq, int nurseGroupSeq);
    List<Work> findByNurseGroupSeq(int nurseGroupSeq);
}
