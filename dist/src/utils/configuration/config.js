"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const API_AUTH = process.env.API_AUTH;
exports.default = {
    PORT,
    NODE_ENV,
    API_AUTH,
};
//# sourceMappingURL=config.js.map