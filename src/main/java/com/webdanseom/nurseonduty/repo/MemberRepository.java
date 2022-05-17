package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Long> {
    Member findByEmail(String email);
    Member findByGroupSeq (int seq);
}
