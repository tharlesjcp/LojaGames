import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 10, nullable:false})
    plataforma: string 

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    empresa: string 

    @OneToMany(() => Categoria, (Categoria) => Categoria.id)
    categoria: Categoria[]
}