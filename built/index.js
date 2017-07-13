"use strict";
// ---- module shim for custom paths
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var Module = require('module');
var originalRequire = Module.prototype.require;
Module.prototype.require = function (...args) {
    let path = args[0];
    if (path.startsWith('@root/'))
        path = __dirname + '/' + path.substr('@root/'.length);
    args[0] = path;
    return originalRequire.apply(this, args);
};
// ---- end module shim
const request = require("request");
require("reflect-metadata");
const promisify_1 = require("promisify");
const ono = require("ono");
const Database = require("./common/database");
const Entities = require("./entities");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Database.init();
            //await obterPrincipiosAtivos()
            yield listaProdutos();
        }
        catch (err) {
            console.error(err);
        }
    });
}
run();
function listaProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        //https://consultas.anvisa.gov.br/api/consulta/produtos/1?count=10&filter%5Bsubstancia%5D=18676&page=1
        let response = yield requester({
            service: '/consulta/produtos/1',
            json: true,
            qs: {
                'count': 10,
                'filter[substancia]': 18676,
                'page': 1
            },
            headers: {
                authorization: 'Guest'
            }
        });
        let repo = Database.connection.getRepository(Entities.ListaProduto);
        for (var x = 0; x < response.content.length; x++) {
            let produto = response.content[x].produto;
            let toSave = new Entities.ListaProduto();
            Object.assign(toSave, produto);
            yield repo.persist(toSave);
            console.log(produto.nome);
        }
    });
}
function obterPrincipiosAtivos() {
    return __awaiter(this, void 0, void 0, function* () {
        let isLast = false;
        let currentPage = 1;
        while (!isLast) {
            let response = yield requester({
                service: '/substancia',
                json: true,
                qs: {
                    'count': 100,
                    'filter[nome]': '%%%',
                    page: currentPage
                }
            });
            for (var x = 0; x < response.content.length; x++) {
                let item = response.content[x];
                let toSave = new Entities.PrincipioAtivo();
                toSave.id = item.id;
                toSave.descricao = item.descricao;
                console.log(toSave.descricao);
                yield Database.connection.entityManager.save(toSave);
            }
            currentPage++;
            isLast = response.last;
            console.log('fim principios ativos');
        }
    });
}
function _requester(params) {
    return promisify_1.promisify(request, params).then(([resp, body]) => {
        if (String(resp.statusCode).charAt(0) !== '2') {
            throw ono({ body }, `Error status code (${resp.statusCode}`);
        }
        return body;
    });
}
function requester(params) {
    if (params.service)
        params.url = 'https://consultas.anvisa.gov.br/api' + params.service;
    return _requester(params);
}
//# sourceMappingURL=index.js.map