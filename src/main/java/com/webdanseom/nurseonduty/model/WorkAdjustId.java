package com.webdanseom.nurseonduty.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.io.Serializable;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class WorkAdjustId implements Serializable {
    @EqualsAndHashCode.Include
    @Id
    private int workAdjustSeq;

    @EqualsAndHashCode.Include
    @Id
    private NurseGroup groupSeq;
}
