package com.webdanseom.nurseonduty.model.id;
/**
 * 파일명: WorkId.java
 * 설명: 그룹seq와 복합키 연결을 위한 클래스
 * 작성일자:2022.05.08
 * 작성자:표영운
 * 수정일자:
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.NurseGroup;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class WorkId implements Serializable {
    @EqualsAndHashCode.Include
    @Id
    private int workSeq;

    @EqualsAndHashCode.Include
    @Id
    @ManyToOne
    private NurseGroup nurseGroup;
}
