package com.geng.api;

import com.geng.service.UserService;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CheckUsernameServlet", urlPatterns = {"/check_username", "/check_username.do"})
public class CheckUsernameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        String userName = request.getParameter("username");
        boolean status = UserService.getInstance().checkUser(userName);
        response.getWriter().print(JSONObject.fromObject(new Status(status ? 1 : 0, null, status ? "用户名已经存在了!" : "可以使用该用户名!")));
    }
}
