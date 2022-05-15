package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestJoinGroup.java
 * 설명: 해당 그룹의 링크 request
 * 작성일자:2022.05.12
 * 작성자:표영운
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestInvite {
    private int seq;
    private String inviteLink;
}
