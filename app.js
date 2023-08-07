"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./utils/user");
App({
    globalData: {},
    onLaunch: function () {
        (0, user_1.wxLogin)();
    },
});
