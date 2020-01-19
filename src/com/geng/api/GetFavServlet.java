package com.geng.api;

import com.geng.model.Fav;
import com.geng.model.User;
import com.geng.service.FavService;
import com.geng.utils.LoginUtils;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "GetFavServlet", urlPatterns = {"/get_fav", "/get_fav.do"})
public class GetFavServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");

        User findUser = LoginUtils.checkLogin(request);
        // 如果登录了
        if (null != findUser) {
            ArrayList<Fav> lst = FavService.getInstance().getFavList(findUser.getId());
            JSONArray ja = new JSONArray();
            for (Fav item : lst) {
                ja.add(item);
            }
            response.getWriter().print(JSONArray.fromObject(ja));
        } else {
            response.getWriter().print(JSONArray.fromObject(null));
        }
    }
}
