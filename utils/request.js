"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TENCENT_MAP_GET = exports.UPLOAD = exports.POST = exports.GET = void 0;
var url_1 = require("../config/url");
var enums_1 = require("../config/enums");
/**
 * 导出 get 请求
 */
var GET = function (_url, _data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url_1.REQUEST_URL + _url,
            data: __assign(__assign({}, _data), { wxAppId: enums_1.BaseEnum.APP_ID }),
            header: {
                'content-type': 'application/json',
            },
            method: 'GET',
            success: function (_a) {
                var statusCode = _a.statusCode, data = _a.data;
                var reponseData = data;
                if (statusCode == 200 && reponseData.code == 0) {
                    resolve(reponseData);
                }
                else {
                    wx.showToast({
                        title: reponseData.msg || '数据请求失败',
                        icon: 'error',
                    });
                    reject(reponseData);
                }
            },
        });
    });
};
exports.GET = GET;
/**
 * 导出 post 请求
 */
var POST = function (_url, _data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url_1.REQUEST_URL + _url,
            data: __assign(__assign({}, _data), { wxAppId: enums_1.BaseEnum.APP_ID }),
            header: {
                'content-type': 'application/json',
            },
            method: 'POST',
            success: function (_a) {
                var statusCode = _a.statusCode, data = _a.data;
                var reponseData = data;
                if (statusCode == 200 && reponseData.code == 0) {
                    resolve(reponseData);
                }
                else {
                    wx.showToast({
                        title: reponseData.msg || '数据请求失败',
                        icon: 'error',
                    });
                    reject(reponseData);
                }
            },
        });
    });
};
exports.POST = POST;
/**
 * 导出文件上传请求
 */
var UPLOAD = function (ops) {
    return new Promise(function (resolve, reject) {
        wx.uploadFile({
            url: url_1.REQUEST_URL + ops.url,
            filePath: ops.filesPath,
            name: 'file',
            formData: __assign(__assign({}, ops.data), { wxAppId: enums_1.BaseEnum.APP_ID }),
            success: function (_a) {
                var statusCode = _a.statusCode, data = _a.data;
                var reponseData = data;
                if (statusCode == 200) {
                    resolve(reponseData);
                }
            },
            fail: function (err) {
                reject(err);
            },
        });
    });
};
exports.UPLOAD = UPLOAD;
/**
 * 导出腾讯地图 get 请求
 */
var TENCENT_MAP_GET = function (_url, _data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url_1.TENCENT_MAP_URL + _url,
            data: __assign(__assign({}, _data), { wxAppId: enums_1.BaseEnum.APP_ID }),
            header: {
                'content-type': 'application/json',
            },
            method: 'GET',
            success: function (_a) {
                var statusCode = _a.statusCode, data = _a.data;
                var reponseData = data;
                if (statusCode == 200) {
                    resolve(reponseData);
                }
                else {
                    wx.showToast({
                        title: reponseData.msg || '数据请求失败',
                        icon: 'error',
                    });
                    reject(reponseData);
                }
            },
        });
    });
};
exports.TENCENT_MAP_GET = TENCENT_MAP_GET;
