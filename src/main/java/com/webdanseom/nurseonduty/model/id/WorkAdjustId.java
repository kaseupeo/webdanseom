package com.webdanseom.nurseonduty.model.id;
/**
 * 파일명: WorkAdjustId.java
 * 설명: 그룹seq와 복합키 연결을 위한 클래스
 * 작성일자:2022.05.09
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
public class WorkAdjustId implements Serializable {
    @EqualsAndHashCode.Include
    @Id
    private int workAdjustSeq;

    @EqualsAndHashCode.Include
    @Id
    @ManyToOne
    private NurseGroup nurseGroup;
}
