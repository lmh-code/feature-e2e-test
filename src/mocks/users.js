import { userList } from "../utils/constants";

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

  "post|/api/userInfo/register": (req) => {
    const userInfo = JSON.parse(req.body);
    return {
      code: 200,
      message: "success",
      data: userInfo,
    };
  },
};
