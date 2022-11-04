import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tb_loja" })
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(150)
    @Column({ length: 150, nullable: false })
    nome: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    genero: string


    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    plataforma: string


    @UpdateDateColumn()
    avalicao : string

    @ManyToOne(() => Produto, (produto) => produto.categoria, {
        onDelete: "CASCADE"
    })
    produto: Produto




}

function MaxLenght() {
    throw new Error("Function not implemented.");
}
