import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@Controller('/produto')
export class ProdutoController {
    ProdutoService: any;
    constructor(private readonly produtoService: ProdutoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.ProdutoService.findAll();
    }
  


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.ProdutoService.findById(id)
    }

    @Get('/plataforma/:plataforma')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('plataforma') plataforma: string): Promise<Produto[]> {
        return this.ProdutoService.findByDescricao(plataforma)
    } 

    @Get('/empresa/:emprsa')
    @HttpCode(HttpStatus.OK)
    findByEmpresa(@Param('empresa')empresa:string): Promise<Produto[]>{
        return this.ProdutoService.findByMarca(empresa)
    }    
    

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.create(produto)
    }



    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.update(produto)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.ProdutoService.delete(id)
    }



}