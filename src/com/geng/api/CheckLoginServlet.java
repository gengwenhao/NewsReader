package com.geng.api;

import com.geng.model.User;
import com.geng.utils.LoginUtils;
import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CheckLoginServlet", urlPatterns = {"/check_login", "/check_login.do"})
public class CheckLoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        User loginUser = LoginUtils.checkLogin(request);

        JSONArray ja = new JSONArray();
        if (null == loginUser) {
            ja.add(new Status(-1, loginUser, "未登录!"));
        } else {
            ja.add(new Status(1, loginUser, loginUser.getUsername() + "已经登录!"));
        }
        response.getWriter().print(JSONArray.fromObject(ja));
    }
}
