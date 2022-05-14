package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.NurseGroup;
import org.springframework.data.repository.CrudRepository;

public interface NurseGroupRepository extends CrudRepository<NurseGroup, Long> {
    NurseGroup findByName(String groupName);
    NurseGroup findByInvitelink(String inviteLink);
}
