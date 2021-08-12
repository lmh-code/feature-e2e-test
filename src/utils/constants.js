export const passwordReg =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()_+-=,.?]{8,20}$/;

export const phoneReg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;

export const emailReg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const userList = [
  {
    id: 1,
    name: "刘明豪",
    email: "liuminghao01@longfor.com",
    tel: "13126972690",
    pass: "admin11@Zz",
    sex: 1, // 1 男 2 女
    hobby: [1, 2], // 1 羽毛球 2 乒乓球 3 游泳 4 篮球 5 敲代码
    age: "28",
    job: "超酷的工作",
  },
  {
    id: 2,
    name: "小豪子",

    email: "xiaohaozi@longfor.com",
    tel: "13126972120",
    pass: "admin22@Zz",
    sex: 1, // 1 男 2 女
    hobby: [3], // 1 羽毛球 2 乒乓球 3 游泳 4 篮球 5 敲代码

    age: "23",
    job: "前端工程师",
  },
  {
    id: 3,
    name: "大豪哥",
    email: "dahaoge@longfor.com",
    tel: "15826972120",
    pass: "admin33@Zz",
    sex: 1, // 1 男 2 女
    hobby: [3, 5], // 1 羽毛球 2 乒乓球 3 游泳 4 篮球 5 敲代码
    age: "28",
    job: "后端工程师",
  },
  {
    id: 4,
    name: "www",
    email: "www@longfor.com",
    tel: "13526972120",
    pass: "admin44@Zz",
    sex: 2, // 1 男 2 女
    hobby: [1], // 1 羽毛球 2 乒乓球 3 游泳 4 篮球 5 敲代码
    age: "18",
    job: "产品",
  },
];
