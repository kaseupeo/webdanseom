package com.webdanseom.nurseonduty.model.response;
/**
 * 파일명: ResponsePreceptor.java
 * 설명: 프리셉터 response
 * 작성일자:2022.05.30
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResponsePreceptor {
    private int seq;
    private String chargeNurseName;
    private String newNurseName;

    public ResponsePreceptor(int seq, String chargeNurseName, String newNurseName) {
        this.seq = seq;
        this.chargeNurseName = chargeNurseName;
        this.newNurseName = newNurseName;
    }
}
