"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm = require("typeorm");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let conn = yield Orm.createConnection({
            type: "mysql",
            host: process.env.DB_HOST || 'localhost',
            port: Number(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'drug-crawl',
            entities: [
                __dirname + '/../entities/e-*.js'
            ],
            autoSchemaSync: true
        });
        exports.connection = conn;
    });
}
exports.init = init;
//# sourceMappingURL=database.js.map