package com.webdanseom.nurseonduty.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.io.Serializable;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class WorkExtraId implements Serializable {
    @EqualsAndHashCode.Include
    @Id
    private int workExtraSeq;

    @EqualsAndHashCode.Include
    @Id
    private  NurseGroup groupSeq;
}