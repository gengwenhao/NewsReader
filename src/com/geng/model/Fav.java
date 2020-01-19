package com.geng.model;

public class Fav {
    public Fav(String url, String title) {
        this.url = url;
        this.title = title;
    }

    public Fav(int id, String url, String title) {
        this.id = id;
        this.url = url;
        this.title = title;
    }

    public Fav(int id, int userID, String url, String title) {
        this.id = id;
        this.userID = userID;
        this.url = url;
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    private int id;
    private int userID;
    private String url;
    private String title;
}
