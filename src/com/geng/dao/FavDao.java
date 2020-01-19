package com.geng.dao;

import com.geng.model.Fav;

import java.util.ArrayList;

public interface FavDao {

    /**
     * 获取用户收藏网页数
     *
     * @param userID
     * @return
     */
    int getFavCount(int userID);


    /**
     * 获取收藏列表
     *
     * @param userID
     * @return
     */
    ArrayList<Fav> getFavList(int userID);


    /**
     * 添加用户收藏
     *
     * @param url
     * @param userID
     * @return
     */
    boolean addFavURL(String url, String title, int userID);


    /**
     * 取消用户收藏
     *
     * @param url
     * @param userID
     * @return
     */
    boolean cancelFavURL(String url, int userID);
}
