import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { ProdutoModule } from './produto/produtos.module';
import { Produto } from './produto/entities/produto.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'loja_game',
      entities: [Categoria, Produto],
      synchronize: true
    }),
      CategoriaModule,
      ProdutoModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }