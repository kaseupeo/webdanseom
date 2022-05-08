package com.webdanseom.nurseonduty.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.ManyToOne;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class NurseId {

    @EqualsAndHashCode.Include
    @Id
    private int nurseSeq;

    @EqualsAndHashCode.Include
    @Id
    @ManyToOne
    private NurseGroup groupSeq;

}
