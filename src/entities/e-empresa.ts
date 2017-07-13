import Orm = require('typeorm')

@Orm.Entity()
export class Empresa {

    @Orm.PrimaryColumn()
    cnpj: string

    @Orm.Column()
    razaoSocial: string

    @Orm.Column()
    numeroAutorizacao: string

}