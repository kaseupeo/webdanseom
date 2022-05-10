package com.webdanseom.nurseonduty.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.service.AuthService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest
public class MemberControllerUnitTest {
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private AuthService authService;
    
    @Test
    public void save_test() throws  Exception {
        //given

    }
}
