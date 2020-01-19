package com.geng.api;

import com.geng.utils.LoginUtils;
import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "LogoutServlet", urlPatterns = {"/logout", "/logout.do"})
public class LogoutServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        LoginUtils.logout(request);
        JSONArray ja = new JSONArray();
        ja.add(new Status(1, null, "注销成功"));
        response.getWriter().print(JSONArray.fromObject(ja));
    }
}
