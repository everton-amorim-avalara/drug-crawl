import Orm = require('typeorm')

@Orm.Entity()
export class Processo {

    @Orm.PrimaryColumn()
    numero: string

    @Orm.Column()
    situacao: number

}