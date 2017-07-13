import Orm = require('typeorm')
import { TipoProduto } from './e-tipo-produto'
import { CategoriaProduto } from './e-categoria-produto'
import { Empresa } from './e-empresa'
import { Processo } from './e-processo'

@Orm.Entity()
export class ListaProduto {

    @Orm.PrimaryColumn()
    codigo: number

    @Orm.Column()
    nome : string

    @Orm.Column()
    numeroRegistro : string

    @Orm.JoinColumn()
    @Orm.ManyToOne(type => TipoProduto, { cascadeInsert: true })
    tipo : TipoProduto

    @Orm.JoinColumn()
    @Orm.ManyToOne(type => CategoriaProduto, { cascadeInsert: true })
    categoria : CategoriaProduto

    @Orm.Column({ nullable : true })
    situacaoRotulo? : string

    @Orm.Column({ nullable : true })
    dataVencimento?: string

    @Orm.Column()
    mesAnoVencimento: string

    @Orm.Column()
    acancelar: boolean

    @Orm.JoinColumn()
    @Orm.ManyToOne(type => Empresa, { cascadeInsert: true })
    empresa : Empresa

    @Orm.JoinColumn()
    @Orm.ManyToOne(type => Processo, { cascadeInsert:true })
    processo: Processo

}

