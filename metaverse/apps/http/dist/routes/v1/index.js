"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get("/signup", (req, res) => {
    res.json({
        message: "Signup"
    });
});
exports.router.get("/signin", (req, res) => {
    res.json({
        message: "Signin"
    });
});
