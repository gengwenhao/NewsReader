package com.geng.api;

import com.geng.model.Fav;
import com.geng.model.User;
import com.geng.service.FavService;
import com.geng.utils.JSONUtils;
import com.geng.utils.LoginUtils;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "AddFavURLServlet", urlPatterns = {"/add_favurl", "/add_favurl.do"})
public class AddFavURLServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");

        String title = request.getParameter("title");
        String url = request.getParameter("url");
        User findUser = LoginUtils.checkLogin(request);
        findUser.setPassword("");
        // 如果登录了
        if (null != findUser) {
            boolean status = FavService.getInstance().addFavURL(title, url, findUser.getId());
            response.getWriter().print(JSONObject.fromObject(new Status(status ? 0 : -2, findUser, status ? "您刚刚收藏了:《" + title +"》": "添加失败")));
        } else {
            response.getWriter().print(JSONObject.fromObject(new Status(-1, null, "未登录")));
        }
    }
}
