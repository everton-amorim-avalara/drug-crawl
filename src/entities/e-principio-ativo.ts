import { Entity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class PrincipioAtivo {

    @PrimaryColumn()
    id : number

    @Column()
    descricao : string

}