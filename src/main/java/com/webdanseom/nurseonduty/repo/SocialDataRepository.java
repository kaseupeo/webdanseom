package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.SocialData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SocialDataRepository extends CrudRepository<SocialData,Long> {
    SocialData findByIdAndType(String username, String type);
}