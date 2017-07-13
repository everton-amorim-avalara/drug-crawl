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
Object.defineProperty(exports, "__esModule", { value: true });
const Orm = require("typeorm");
let Empresa = class Empresa {
};
__decorate([
    Orm.PrimaryColumn(),
    __metadata("design:type", String)
], Empresa.prototype, "cnpj", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", String)
], Empresa.prototype, "razaoSocial", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", String)
], Empresa.prototype, "numeroAutorizacao", void 0);
Empresa = __decorate([
    Orm.Entity()
], Empresa);
exports.Empresa = Empresa;
//# sourceMappingURL=e-empresa.js.map