import { passwordReg, phoneReg, emailReg, userList } from "../utils/constants";

export default {
  /**
   * @description: 获取用户信息
   */
  "get|/api/userInfo/getUsers": () => {
    return {
      code: 200,
      message: "success",
      data: userList,
    };
  },

  /**
   * @description: 用户注册
   */
  "post|/api/userInfo/register": (req) => {
    const userInfo = JSON.parse(req.body);
    if (!userInfo.name || !userInfo.email || !userInfo.tel) {
      return {
        code: 500,
        message: "姓名、邮箱、电话和密码都为必填项",
        data: userInfo,
      };
    } else if (!emailReg.test(userInfo.email)) {
      return {
        code: 500,
        message: "邮箱格式不正确",
        data: userInfo,
      };
    } else if (!phoneReg.test(userInfo.tel)) {
      return {
        code: 500,
        message: "电话格式不正确",
        data: userInfo,
      };
    } else if (!passwordReg.test(userInfo.pass)) {
      return {
        code: 500,
        message: "密码格式不正确",
        data: userInfo,
      };
    }

    userList.push(userInfo);

    return {
      code: 200,
      message: "success",
      data: userInfo,
    };
  },
};
