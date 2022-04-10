package com.webdanseom.nurseonduty.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {
    @GetMapping("home")
    public List<String> getHome(){
        return Arrays.asList("스프링 리액트 연동 테스트", "test");
    }
}