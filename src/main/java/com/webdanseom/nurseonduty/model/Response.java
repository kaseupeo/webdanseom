package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Response.java
 * 설명: 오류메시지 처리
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class Response {
    //경고 넘버
    private String response;
    
    //경고 메시지
    private String message;
    
    //경고일
    private Object data;

    public Response(String response, String message, Object data) {
        this.response = response;
        this.message = message;
        this.data = data;
    }
}
