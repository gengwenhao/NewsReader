package com.geng.api;

import com.geng.model.User;
import com.geng.utils.LoginUtils;
import net.sf.json.JSONArray;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Login->index.jsp->init data
 */
@WebServlet(name = "LoginServlet", urlPatterns = {"/login", "/login.do"})
public class LoginServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        User loginUser = LoginUtils.login(request, response);
        if (null != loginUser) {
            JSONArray ja = new JSONArray();
            ja.add(new Status(1, loginUser, loginUser.getUsername() + "登录成功!"));
            response.getWriter().print(JSONArray.fromObject(ja));
        } else {
            JSONArray ja = new JSONArray();
            ja.add(new Status(-1, null, "登录失败"));
            response.getWriter().print(JSONArray.fromObject(ja));
        }
    }

}
