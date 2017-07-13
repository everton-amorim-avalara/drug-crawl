import Orm = require('typeorm')

@Orm.Entity()
export class CategoriaProduto {

    @Orm.PrimaryColumn()
    codigo: string

    @Orm.Column()
    descricao? : string

}