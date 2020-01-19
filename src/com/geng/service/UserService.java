package com.geng.service;

import com.geng.dao.UserDao;
import com.geng.dao.impl.UserDaoImpl;
import com.geng.model.User;

public class UserService {
    private UserDao dao;
    private static UserService instance;

    private UserService() {
        dao = UserDaoImpl.getInstance();
    }

    public static final UserService getInstance() {
        if (instance == null) {
            try {
                instance = new UserService();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return instance;
    }

    /**
     * 注册用户
     *
     * @param username
     * @param password
     * @return
     */
    public boolean register(String username, String password) {
        return dao.register(username, password);
    }

    /**
     * 登录验证
     *
     * @param username
     * @param password
     * @return
     */
    public User login(String username, String password) {
        return dao.login(username, password);
    }


    /**
     * 检查用户名是否存在
     *
     * @param username
     * @return
     */
    public boolean checkUser(String username) {
        return dao.checkUser(username);
    }

}
