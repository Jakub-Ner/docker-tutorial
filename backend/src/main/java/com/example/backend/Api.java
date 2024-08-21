package com.example.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class Api {

    @GetMapping
    public HelloDto hello() {
        return new HelloDto("Hello World");
    }


    class HelloDto {
        public String data;

        public HelloDto(String data) {
            this.data = data;
        }
    }
}
