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
const e_tipo_produto_1 = require("./e-tipo-produto");
const e_categoria_produto_1 = require("./e-categoria-produto");
const e_empresa_1 = require("./e-empresa");
const e_processo_1 = require("./e-processo");
let ListaProduto = class ListaProduto {
};
__decorate([
    Orm.PrimaryColumn(),
    __metadata("design:type", Number)
], ListaProduto.prototype, "codigo", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", String)
], ListaProduto.prototype, "nome", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", String)
], ListaProduto.prototype, "numeroRegistro", void 0);
__decorate([
    Orm.JoinColumn(),
    Orm.ManyToOne(type => e_tipo_produto_1.TipoProduto, { cascadeInsert: true }),
    __metadata("design:type", e_tipo_produto_1.TipoProduto)
], ListaProduto.prototype, "tipo", void 0);
__decorate([
    Orm.JoinColumn(),
    Orm.ManyToOne(type => e_categoria_produto_1.CategoriaProduto, { cascadeInsert: true }),
    __metadata("design:type", e_categoria_produto_1.CategoriaProduto)
], ListaProduto.prototype, "categoria", void 0);
__decorate([
    Orm.Column({ nullable: true }),
    __metadata("design:type", String)
], ListaProduto.prototype, "situacaoRotulo", void 0);
__decorate([
    Orm.Column({ nullable: true }),
    __metadata("design:type", String)
], ListaProduto.prototype, "dataVencimento", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", String)
], ListaProduto.prototype, "mesAnoVencimento", void 0);
__decorate([
    Orm.Column(),
    __metadata("design:type", Boolean)
], ListaProduto.prototype, "acancelar", void 0);
__decorate([
    Orm.JoinColumn(),
    Orm.ManyToOne(type => e_empresa_1.Empresa, { cascadeInsert: true }),
    __metadata("design:type", e_empresa_1.Empresa)
], ListaProduto.prototype, "empresa", void 0);
__decorate([
    Orm.JoinColumn(),
    Orm.ManyToOne(type => e_processo_1.Processo, { cascadeInsert: true }),
    __metadata("design:type", e_processo_1.Processo)
], ListaProduto.prototype, "processo", void 0);
ListaProduto = __decorate([
    Orm.Entity()
], ListaProduto);
exports.ListaProduto = ListaProduto;
//# sourceMappingURL=e-lista-produto.js.map