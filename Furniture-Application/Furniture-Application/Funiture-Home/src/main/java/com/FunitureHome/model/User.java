package com.FunitureHome.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.awt.*;

@Entity
public class User {
    @Id
    @GeneratedValue
    private int UserId;
    private String userName;
    private String userEmail;
    private String userPassWord;
    private Image userImage;

    public User() {
    }

    public User(int userId, String userName, String userEmail, String userPassWord,) {
        UserId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassWord = userPassWord;
    }

    public int getUserId() {
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassWord() {
        return userPassWord;
    }

    public void setUserPassWord(String userPassWord) {
        this.userPassWord = userPassWord;
    }

    @Override
    public String toString() {
        return "User{" +
                "UserId=" + UserId +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassWord='" + userPassWord + '\'' +
                '}';
    }
}
