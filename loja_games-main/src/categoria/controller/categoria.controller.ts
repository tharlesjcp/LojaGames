import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put,} from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { get } from "http";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";

@Controller('/categoria')
export class CategoriaController {
    constructor(private readonly CategoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.CategoriaService.findAll();
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.CategoriaService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('nome') nome: string): Promise<Categoria[]> {
        return this.CategoriaService.findByNome(nome)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria : Categoria): Promise<Categoria>{
        return this.CategoriaService.create(categoria)
    }



    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Categoria: Categoria): Promise<Categoria>{
        return this.CategoriaService.update(Categoria)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.CategoriaService.delete(id)
    }
}