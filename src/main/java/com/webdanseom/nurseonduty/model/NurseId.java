package com.webdanseom.nurseonduty.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class NurseId {

    @EqualsAndHashCode.Include
    @Id
    private String nurseSeq;

    @EqualsAndHashCode.Include
    @Id
    private NurseGroup groupSeq;

}
