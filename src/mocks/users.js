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

  /**
   * @description: 用户登录
   */
  "post|/api/userInfo/login": (req) => {
    const userInfo = JSON.parse(req.body);
    if (!userInfo.email || !userInfo.pass) {
      return {
        code: 500,
        message: "账号和密码都为必填项",
        data: userInfo,
      };
    } else if (
      !emailReg.test(userInfo.email) &&
      !phoneReg.test(userInfo.email)
    ) {
      return {
        code: 500,
        message: "账号格式不正确",
        data: userInfo,
      };
    } else if (!passwordReg.test(userInfo.pass)) {
      return {
        code: 500,
        message: "密码格式不正确",
        data: userInfo,
      };
    } else if (
      !userList.some(
        (item) => item.email === userInfo.email || item.tel === userInfo.email
      )
    ) {
      return {
        code: 500,
        message: "账号不存在",
        data: userInfo,
      };
    }

    const loginUserInfo = userList.filter(
      (item) =>
        (item.email === userInfo.email || item.tel === userInfo.email) &&
        item.pass === userInfo.pass
    )[0];

    if (loginUserInfo) {
      return {
        code: 200,
        message: "success",
        data: loginUserInfo,
      };
    } else {
      return {
        code: 500,
        message: "账号或密码错误",
        data: userInfo,
      };
    }
  },

  /**
   * @description: 根据用户登录账号获取用户信息
   */
  "post|/api/userInfo/getUserInfo": (req) => {
    const userInfo = JSON.parse(req.body);

    const loginUserInfo = userList.filter(
      (item) => item.email === userInfo.account || item.tel === userInfo.account
    )[0];

    if (loginUserInfo) {
      return {
        code: 200,
        message: "success",
        data: loginUserInfo,
      };
    } else {
      return {
        code: 500,
        message: "账号或密码错误",
        data: userInfo,
      };
    }
  },
};
