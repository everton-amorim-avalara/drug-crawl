import Orm = require('typeorm')

@Orm.Entity()
export class TipoProduto {

    @Orm.PrimaryColumn()
    codigo : number

    @Orm.Column()
    descricao? : string

}