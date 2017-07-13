"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Orm = require("typeorm");
let Foo = class Foo {
};
__decorate([
    Orm.PrimaryColumn(),
    __metadata("design:type", Number)
], Foo.prototype, "id", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", String)
], Foo.prototype, "name", void 0);
Foo = __decorate([
    Orm.Entity()
], Foo);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let connection = yield Orm.createConnection({
            type: "mysql",
            host: process.env.DB_HOST || 'localhost',
            port: Number(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'foodb',
            entities: [
                Foo
            ],
            autoSchemaSync: true
        });
        for (var x = 2; x < 4; x++) {
            let fool = new Foo();
            fool.id = 2;
            fool.name = 'fool';
            yield connection.entityManager.save(fool);
        }
        console.log('yes');
    });
}
run();
//# sourceMappingURL=foo.js.map