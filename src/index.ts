// ---- module shim for custom paths

var Module = require('module');
var originalRequire = Module.prototype.require;

Module.prototype.require = function (this: any, ...args) {
    let path = args[0]
    if (path.startsWith('@root/') ) 
        path = __dirname + '/' + path.substr('@root/'.length)
    args[0] = path
    return originalRequire.apply(this, args);
};


// ---- end module shim

import request = require('request') 
import 'reflect-metadata'
import { promisify } from 'promisify'
import ono = require('ono')
import Database = require('./common/database')
import Entities = require('./entities')




async function run() {

    try {
        await Database.init()
        //await obterPrincipiosAtivos()
        await listaProdutos()
    } catch(err) {
        console.error(err)
    }

}

run()


async function listaProdutos() {

    //https://consultas.anvisa.gov.br/api/consulta/produtos/1?count=10&filter%5Bsubstancia%5D=18676&page=1

    let response = await requester<ServiceResponse<ListaProduto[]>>({
        service: '/consulta/produtos/1' ,
        json: true ,
        qs : {
            'count' : 10,
            'filter[substancia]' : 18676,
            'page' : 1
        } ,
        headers : {
            authorization : 'Guest'
        }
    })

    let repo = Database.connection.getRepository(Entities.ListaProduto)

    for (var x = 0; x < response.content.length; x++) {
        let produto = response.content[x].produto
        let toSave = new Entities.ListaProduto()
        Object.assign(toSave, produto)
        await repo.persist(toSave)
        console.log(produto.nome)
    }

}


async function obterPrincipiosAtivos() {
    let isLast = false
    let currentPage = 1

    while (!isLast) {
        let response = await requester<ServiceResponse<Entities.PrincipioAtivo[]>>({
            service: '/substancia',
            json: true,
            qs: {
                'count': 100,
                'filter[nome]': '%%%',
                page: currentPage
            }
        })
        for (var x = 0; x < response.content.length; x++) {
            let item = response.content[x]
            let toSave = new Entities.PrincipioAtivo()
            toSave.id = item.id
            toSave.descricao = item.descricao
            console.log(toSave.descricao)
            await Database.connection.entityManager.save(toSave)
        }
        currentPage++
        isLast = response.last
        console.log('fim principios ativos')
    }
}





function _requester<T = any>( params : request.CoreOptions ) {
    return promisify( request, params ).then( ([resp, body]) => {
        if ( String(resp.statusCode).charAt(0) !== '2' ) {
            throw ono({ body }, `Error status code (${resp.statusCode}`)
        }
        return body as T
    })
}

function requester<T>( params : request.CoreOptions & { service : string }  ) {
    if (params.service) (<any>params).url = 'https://consultas.anvisa.gov.br/api' + params.service
    return _requester<T>(params)
}
