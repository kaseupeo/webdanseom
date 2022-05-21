package com.webdanseom.nurseonduty.model.response;
import com.webdanseom.nurseonduty.model.NurseGroup;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 파일명: ResponseSelectGroup.java
 * 설명: 그룹조회, 그룹가엽여부, 수간호사 여부 데이터 Response 값
 * 작성일자: 2022.05.21
 * 작성자: 표영운
 * 수정일자:
 * 수정자:
 */
@Getter
@Setter
@NoArgsConstructor
public class ResponseSelectGroup {
    NurseGroup nurseGroup;
    boolean isJoinGroup;
    boolean isHeadNurseCheck;

    public ResponseSelectGroup(NurseGroup nurseGroup, boolean isJoinGroup, boolean isHeadNurseCheck) {
        this.nurseGroup = nurseGroup;
        this.isJoinGroup = isJoinGroup;
        this.isHeadNurseCheck = isHeadNurseCheck;
    }
}
