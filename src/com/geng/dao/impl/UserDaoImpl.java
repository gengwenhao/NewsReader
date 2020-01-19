package com.geng.dao.impl;

import com.geng.dao.UserDao;
import com.geng.db.C3P0Connection;
import com.geng.model.User;
import com.geng.utils.DBUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements UserDao {
    private static UserDaoImpl ourInstance = new UserDaoImpl();

    public static UserDaoImpl getInstance() {
        return ourInstance;
    }

    @Override
    public boolean register(String username, String password) {
        Connection conn = C3P0Connection.getInstance().getConnection();
        String sql = "insert into user(username, password) values(?, ?);";
        PreparedStatement ps = null;
        int ret = 0;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, username);
            ps.setString(2, password);
            ret = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ret == 1;
    }

    @Override
    public User login(String username, String password) {
        Connection conn = C3P0Connection.getInstance().getConnection();
        User user = null;
        String sql = "select * from user where username=? and password=? ";
        PreparedStatement ps = null;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, username);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();
            // bean导入
            if (rs.next()) {
                user = new User(rs.getInt("id"), username, password);
            }
            DBUtils.Close(ps, rs);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return user;
    }

    @Override
    public boolean checkUser(String username) {
        Connection conn = C3P0Connection.getInstance().getConnection();
        String sql = "select username from user where username=?";
        PreparedStatement ps = null;
        boolean flag = false;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, username);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                flag = true;
            }
            DBUtils.Close(ps, rs);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return flag;
    }
}

