package com.webdanseom.nurseonduty.repo;
/**
 * 파일명: PreceptorRepository.java
 * 설명:
 * 작성일자:2022.05.27
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Preceptor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PreceptorRepository extends CrudRepository<Preceptor, Long> {
    List<Preceptor> findByNurseGroupSeq(int nurseGroupSeq);
    Preceptor findByPreceptorSeq(int preceptorSeq);
}
