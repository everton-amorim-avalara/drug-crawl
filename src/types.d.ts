import Entities = require('./entities')

declare global {

    interface ServiceResponse<T> {
        content : T
        first: boolean
        last: boolean
        totalElements: number
        totalPages: number
        number: number
        size: number        
    }

    interface ListaProduto {
        ordem : number
        produto : {
            codigo : number
            nome: string
            numeroRegistro: string
            tipo : {
                codigo: number
                descricao: string|null
            }
            categoria: {
                codigo: string
                descricao: string
            }
            situacaoRotulo: string|null
            dataVenciamento: string|null
            mesAnoVencimento: string
            acancelar: boolean
        }
    }

}
