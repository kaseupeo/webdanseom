package com.webdanseom.nurseonduty.model.id;

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
