"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, DB_HOST = _a.DB_HOST, DATABASE = _a.DATABASE, DATABASE_TEST = _a.DATABASE_TEST, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_TEST_DB = _a.DB_TEST_DB, ENV = _a.ENV;
var Client;
console.log(ENV);
if (ENV === 'test') {
    Client = new pg_1.Pool({
        host: DB_HOST,
        database: DATABASE_TEST,
        user: DB_USER,
        password: DB_PASSWORD,
    });
}
if (ENV === 'dev') {
    Client = new pg_1.Pool({
        host: DB_HOST,
        database: DB_TEST_DB,
        user: DB_USER,
        password: DB_PASSWORD,
    });
}
exports.default = Client;
//# sourceMappingURL=database.js.map