package com.geng.api;

import com.geng.service.UserService;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "RegisterServlet", urlPatterns = {"/register", "/register.do"})
public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        boolean status = UserService.getInstance().register(username, password);

        response.getWriter().print(JSONObject.fromObject(new Status(status ? 1 : 0, null, status ? "注册成功!" : "注册失败!")));
    }
}
