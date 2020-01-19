package com.geng.service;


import com.geng.dao.FavDao;
import com.geng.dao.impl.FavDaoImpl;
import com.geng.model.Fav;

import java.util.ArrayList;

public class FavService {
    private FavDao dao;
    private static FavService instance;

    private FavService() {
        dao = FavDaoImpl.getInstance();
    }

    public static final FavService getInstance() {
        if (instance == null) {
            try {
                instance = new FavService();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return instance;
    }

    public ArrayList<Fav> getFavList(int userID) {
        return dao.getFavList(userID);
    }

    /**
     * 获取用户收藏数
     *
     * @param userID
     * @return
     */
    int getFavCount(int userID) {
        return dao.getFavCount(userID);
    }

    /**
     * 添加用户收藏
     *
     * @param url
     * @param userID
     * @return
     */
    public boolean addFavURL(String url, String title, int userID) {
        return dao.addFavURL(url, title, userID);
    }


    /**
     * 取消用户收藏
     *
     * @param url
     * @param userID
     * @return
     */
    boolean cancelFavURL(String url, int userID) {
        return dao.cancelFavURL(url, userID);
    }
}
