"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPlate = exports.saveUserProfile = exports.getUserProfile = exports.getPhone = exports.getOpenId = void 0;
var request_1 = require("../utils/request");
/**
 * 获取 open id
 */
var getOpenId = function (_code) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, request_1.GET)('/costomer/getOpenId', { code: _code })];
            case 1:
                _a = _b.sent(), code = _a.code, data = _a.data;
                if (code == 0) {
                    return [2 /*return*/, data];
                }
                return [2 /*return*/, ''];
        }
    });
}); };
exports.getOpenId = getOpenId;
/**
 * 获取手机号
 */
var getPhone = function (_code, _openId) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, request_1.GET)('/costomer/getPhone', {
                    code: _code,
                    openId: _openId,
                })];
            case 1:
                _a = _b.sent(), code = _a.code, data = _a.data;
                if (code == 0) {
                    return [2 /*return*/, data];
                }
                return [2 /*return*/, ''];
        }
    });
}); };
exports.getPhone = getPhone;
/**
 * 获取用户信息
 */
var getUserProfile = function (_id) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, request_1.GET)('/costomer/getUserInfo', {
                    id: _id,
                })];
            case 1:
                _a = _b.sent(), code = _a.code, data = _a.data;
                if (code == 0) {
                    return [2 /*return*/, data];
                }
                return [2 /*return*/, {}];
        }
    });
}); };
exports.getUserProfile = getUserProfile;
/**
 * 保存用户信息
 */
var saveUserProfile = function (_data) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, request_1.POST)('/costomer/saveUserInfo', _data)];
            case 1:
                _a = _b.sent(), code = _a.code, data = _a.data;
                if (code == 0) {
                    return [2 /*return*/, data];
                }
                return [2 /*return*/, ''];
        }
    });
}); };
exports.saveUserProfile = saveUserProfile;
/**
 * 获取用户车牌号
 */
var getUserPlate = function (_id) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, request_1.GET)('/car/getList', {
                    id: _id,
                })];
            case 1:
                _a = _b.sent(), code = _a.code, data = _a.data;
                if (code == 0) {
                    return [2 /*return*/, data];
                }
                return [2 /*return*/, {}];
        }
    });
}); };
exports.getUserPlate = getUserPlate;
