package com.geng.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.geng.model.User;
import com.geng.service.UserService;
import net.sf.json.JSONObject;

import java.io.IOException;

public class LoginUtils {

    /**
     * 登录
     *
     * @param request
     */
    public static User login(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // 解析json数据
        String jsonString = JSONUtils.getInstance().getJSONString(request, response);
        User user = (User) JSONObject.toBean(JSONObject.fromObject(jsonString), User.class);

        // 查找数据库
        User findUser = UserService.getInstance().login(user.getUsername(), user.getPassword());

        // 处理查找结果
        if (null != findUser) {
            // 写入session
            HttpSession session = request.getSession();
            session.setAttribute("user", findUser);
            return findUser;
        }

        return null;
    }

    /**
     * 注销登录
     *
     * @param request
     */
    public static void logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.removeAttribute("user");
    }

    /**
     * 检查登录
     *
     * @param request
     * @return
     */
    public static User checkLogin(HttpServletRequest request) {
        HttpSession session = request.getSession();
        return (User) session.getAttribute("user");
    }

}
