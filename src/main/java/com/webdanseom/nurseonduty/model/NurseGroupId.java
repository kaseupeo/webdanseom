package com.webdanseom.nurseonduty.model;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.io.Serializable;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class NurseGroupId implements Serializable {

    @EqualsAndHashCode.Include
    @Id
    private String dutyCode;

    @EqualsAndHashCode.Include
    @Id
    private NurseGroup groupSeq;
}
