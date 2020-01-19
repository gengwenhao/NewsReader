package com.geng.api;

import com.geng.model.User;

import java.util.ArrayList;

public class Status {
    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    private int status;
    private User user;
    private String result;

    public Status(int status, User user, String result) {
        this.status = status;
        this.user = user;
        this.result = result;
    }

    public Status(int status, User user) {
        this.status = status;
        this.user = user;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
