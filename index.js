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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wasteof3 = exports.Wasteof2Auth = exports.Wasteof2 = void 0;
var axios_1 = __importDefault(require("axios"));
var socket_io_client_1 = require("socket.io-client");
var Wasteof2 = /** @class */ (function () {
    function Wasteof2() {
    }
    Wasteof2.prototype.getTopUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/explore/users/top",
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getTopPosts = function (timeframe) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!['week', 'month', 'day', 'all'].includes(timeframe)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/explore/posts/trending?timeframe=".concat(timeframe),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/explore/posts/trending",
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getUsernameFromID = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/username-from-id/".concat(id),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.checkUsername = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/username-available?username=".concat(name),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getPost = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/posts/".concat(id),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getCommentsOnPost = function (id, page) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/posts/".concat(id, "/comments?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/posts/".concat(id, "/comments"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.searchUsers = function (query, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/search/users?q=".concat(encodeURIComponent(query), "&page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/search/users?q=".concat(encodeURIComponent(query)),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.searchPosts = function (query, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/search/posts?q=".concat(encodeURIComponent(query), "&page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/search/posts?q=".concat(encodeURIComponent(query)),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getRepliesToComment = function (id, page) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/comments/".concat(id, "/replies?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/comments/".concat(id, "/replies"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getWallComments = function (name, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/users/".concat(name, "/wall?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/".concat(name, "/wall"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.requestPasswordReset = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            data: {
                                username: username
                            },
                            url: "https://api.wasteof.money/settings/passsword-reset",
                            method: 'put'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getUser = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getFollowersOfUser = function (name, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name, "/followers?page=").concat(page),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getIfUserIsFollowingUser = function (user1, user2) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(user2, "/followers/").concat(user1),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getFollowingOfUser = function (name, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name, "/following?page=").concat(page),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getPicture = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name, "/picture"),
                            method: 'get',
                            responseType: 'blob'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        file = _a.sent();
                        return [2 /*return*/, file];
                }
            });
        });
    };
    Wasteof2.prototype.getBanner = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name, "/banner"),
                            method: 'get',
                            responseType: 'blob'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        file = _a.sent();
                        return [2 /*return*/, file];
                }
            });
        });
    };
    Wasteof2.prototype.getPostsOfUser = function (name, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/users/".concat(name, "/posts?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name, "/posts"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.getFeedOfUser = function (name, page) {
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://api.wasteof.money/users/".concat(name, "/following/posts?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users/".concat(name, "/following/posts"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2.prototype.join = function (name, password, captcha) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://api.wasteof.money/users",
                            method: 'post',
                            data: {
                                username: name,
                                password: password,
                                captcha: captcha
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    return Wasteof2;
}());
exports.Wasteof2 = Wasteof2;
var Wasteof2Auth = /** @class */ (function () {
    function Wasteof2Auth(username, password) {
        this.username = username;
        this.password = password;
        this.socketio = (0, socket_io_client_1.io)("https://api.wasteof.money", { auth: { token: this.token } });
    }
    Wasteof2Auth.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username, password, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.username;
                        password = this.password;
                        return [4 /*yield*/, (0, axios_1.default)({
                                data: {
                                    username: username,
                                    password: password
                                },
                                url: 'https://api.wasteof.money/session',
                                method: 'post'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        this.token = json.token;
                        this.socketio.emit('updateUser', this.token);
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.getSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/session",
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.deleteGithubAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/settings/auth/github",
                            method: 'delete'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.deleteGoogleAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/settings/auth/google",
                            method: 'delete'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.deletePasswordAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/settings/auth/password",
                            method: 'delete'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.toggleGithubAuth = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!['enable', 'disable'].includes(value)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                headers: {
                                    'Authorization': this.token
                                },
                                url: "https://api.wasteof.money/settings/auth/github/".concat(value),
                                method: 'post'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Wasteof2Auth.prototype.toggleGoogleAuth = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!['enable', 'disable'].includes(value)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                headers: {
                                    'Authorization': this.token
                                },
                                url: "https://api.wasteof.money/settings/auth/google/".concat(value),
                                method: 'post'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Wasteof2Auth.prototype.togglePasswordAuth = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!['enable', 'disable'].includes(value)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                headers: {
                                    'Authorization': this.token
                                },
                                url: "https://api.wasteof.money/settings/auth/password/".concat(value),
                                method: 'post'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Wasteof2Auth.prototype.hideRecoveryMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/settings/hide-recovery-message",
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.deleteRecoveryEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/settings/email",
                            method: 'delete'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.setRecoveryEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                email: email
                            },
                            url: "https://api.wasteof.money/settings/email",
                            method: 'put'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/settings",
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.post = function (content, repost) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                post: content,
                                repost: repost
                            },
                            url: 'https://api.wasteof.money/posts',
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.follow = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/users/".concat(name, "/followers"),
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.setBio = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                bio: content
                            },
                            url: "https://api.wasteof.money/users/".concat(this.username, "/bio"),
                            method: 'put'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.setName = function (newName) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                name: newName
                            },
                            url: "https://api.wasteof.money/users/".concat(this.username, "/name"),
                            method: 'put'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.getUnreadMessages = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/messages/unread?page=".concat(page),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.getReadMessages = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/messages/read?page=".concat(page),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.markAsRead = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                messages: messages
                            },
                            url: "https://api.wasteof.money/messages/mark/read",
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.markAsUnread = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                messages: messages
                            },
                            url: "https://api.wasteof.money/messages/mark/unread",
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.getMessagesCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/messages/count",
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.listen = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var socket;
            var _this = this;
            return __generator(this, function (_a) {
                socket = this.socketio;
                socket.on("message", function (data) {
                    callback({
                        type: 'chat message',
                        data: data
                    });
                });
                socket.on("connect", function () {
                    socket.emit("updateUser", _this.token);
                    callback({
                        type: 'connected',
                        data: true
                    });
                });
                socket.on("updateMessageCount", function (count) {
                    callback({
                        type: 'updateMessageCount',
                        data: count
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Wasteof2Auth.prototype.chatMessage = function (content) {
        (0, socket_io_client_1.io)("https://api.wasteof.money", { auth: { token: this.token } }).emit("message", content);
        //somehow this.socketio doesn't work even though it's exactly the same
    };
    Wasteof2Auth.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var socket, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socket = this.socketio;
                        socket.emit("updateUser", this.token);
                        socket.emit("logout");
                        socket.emit("updateUser", null);
                        return [4 /*yield*/, (0, axios_1.default)({
                                headers: {
                                    'Authorization': this.token
                                },
                                url: 'https://api.wasteof.money/session',
                                method: 'delete'
                            })];
                    case 1:
                        response = _a.sent();
                        this.token = null;
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.postWallComment = function (user, content, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/users/".concat(user, "/wall"),
                            method: 'post',
                            data: {
                                content: content,
                                parent: parent
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.postComment = function (postid, content, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/posts/".concat(postid, "/comments"),
                            method: 'post',
                            data: {
                                content: content,
                                parent: parent
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.editPost = function (id, content) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                post: content
                            },
                            url: "https://api.wasteof.money/posts/".concat(id),
                            method: 'put'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.deletePost = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/posts/".concat(id),
                            method: 'delete'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.deleteComment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/comments/".concat(id),
                            method: 'delete'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.pinPost = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/posts/".concat(id, "/pin"),
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.unpinPost = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/posts/".concat(id, "/unpin"),
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.reportPost = function (id, reason) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            data: {
                                type: "none",
                                reason: reason
                            },
                            url: "https://api.wasteof.money/posts/".concat(id, "/report"),
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof2Auth.prototype.toggleLove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            headers: {
                                'Authorization': this.token
                            },
                            url: "https://api.wasteof.money/posts/".concat(id, "/love"),
                            method: 'post'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    return Wasteof2Auth;
}());
exports.Wasteof2Auth = Wasteof2Auth;
var Wasteof3 = /** @class */ (function () {
    function Wasteof3() {
    }
    Wasteof3.prototype.getUser = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/users/".concat(name, "/__data.json"),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getUserCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/users/",
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getPost = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/posts/".concat(id, "/__data.json"),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getReposts = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/posts/".concat(id, "/reposts/__data.json"),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getSinglePostComment = function (postid, commentid) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/posts/".concat(postid, "/comments/").concat(commentid, "__data.json"),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getPostComments = function (postid, page) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://beta.wasteof.money/posts/".concat(postid, "/comments?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/posts/".concat(postid, "/comments"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getSingleWallComment = function (username, commentid) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/users/".concat(username, "/wall/").concat(commentid, "/__data.json"),
                            method: 'get'
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getWallComments = function (username, page) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof page == 'number')) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://beta.wasteof.money/users/".concat(username, "/wall/__data.json?page=").concat(page),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/users/".concat(username, "/wall/__data.json"),
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    Wasteof3.prototype.getTrending = function (timeframe) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!['day', 'week', 'month', 'year', 'all'].includes(timeframe)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, axios_1.default)({
                                url: "https://beta.wasteof.money/explore/__data.json?time=".concat(timeframe),
                                method: 'get'
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json];
                    case 3: return [4 /*yield*/, (0, axios_1.default)({
                            url: "https://beta.wasteof.money/explore/__data.json",
                            method: 'get'
                        })];
                    case 4:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 5:
                        json = _a.sent();
                        return [2 /*return*/, json];
                }
            });
        });
    };
    return Wasteof3;
}());
exports.Wasteof3 = Wasteof3;
