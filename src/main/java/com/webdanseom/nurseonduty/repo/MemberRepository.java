package com.webdanseom.nurseonduty.repo;

import com.webdanseom.nurseonduty.model.Member;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MemberRepository extends CrudRepository<Member, Long> {
    Member findByEmail(String email);
    List<Member> findByGroupSeqSeq(int seq);
}
