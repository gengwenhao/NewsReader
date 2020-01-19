package com.geng.dao.impl;

import com.geng.dao.FavDao;
import com.geng.db.C3P0Connection;
import com.geng.model.Fav;
import com.geng.utils.DBUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class FavDaoImpl implements FavDao {
    private Connection conn;

    private FavDaoImpl() {
        conn = C3P0Connection.getInstance().getConnection();
    }

    private static FavDao instance;

    public static final FavDao getInstance() {
        if (instance == null) {
            try {
                instance = new FavDaoImpl();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return instance;
    }


    @Override
    public int getFavCount(int userID) {
        return 0;
    }

    @Override
    public ArrayList<Fav> getFavList(int userID) {
        ArrayList<Fav> lst = new ArrayList<Fav>();
        String sql = "select * from user_fav where user_id=?;";
        PreparedStatement ps = null;

        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, userID);
            ResultSet rs = ps.executeQuery();
            // bean导入
            while (rs.next()) {
                Fav favItem = new Fav(
                        rs.getInt("id"),
                        rs.getInt("user_id"),
                        rs.getString("url"),
                        rs.getString("title"));
                lst.add(favItem);
            }
            DBUtils.Close(ps, rs);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return lst;
    }

    @Override
    public boolean addFavURL(String url, String title, int userID) {
        String sql = "insert into user_fav(title, url, user_id) values(?, ?, ?);";
        PreparedStatement ps = null;
        int ret = 0;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, url);
            ps.setString(2, title);
            ps.setInt(3, userID);
            ret = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ret == 1;
    }

    @Override
    public boolean cancelFavURL(String url, int userID) {
        return false;
    }
}
