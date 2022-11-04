/*
1) Crie o projeto seguindo as boas práticas
2) Configure o Banco de dados da aplicação no MySQL Workbench
3) Faça o CRUD completo do recurso Produto (6 métodos)
4) Faça o CRUD completo do recurso Categoria (6 métodos)
5) Crie o Relacionamento do tipo One to Many entre as Classes Categoria e Produto
6) Siga todas as boas práticas estudadas nas primeiras sessões (Service, Controller e
Entity e Module).
7) Teste toda a API utilizando o Insomnia
8) Crie um repositório remoto no seu Github
9) Envie o projeto para o repositório*/

/*create database db_generation_game_online;
	use db_generation_game_online;
create table tb_classes(
	Id bigint(10) auto_increment,
    Tipo varchar(65) not null,
	Classe varchar(100) not null,
    primary key (id)
);
create table tb_personagens(
	Id bigint(10) auto_increment,
    Nome varchar(65) not null,
	Ataque decimal(10,0) not null,
    Defesa decimal(10,0) not null,
    Arma varchar(65) not null,
    id_classes bigint,
    primary key (id),
    foreign key(id_classes) references tb_classes(id)
    );
    
insert into tb_classes (Tipo, classe) values 
	("Agua", "Rodent"), 
	("Voa", "Bug"), 
	("Electrico", "Fighter"), 
    ("Fogo", "Fighter"),
    ("Veloz", "Bug"),
    ("Roedor", "Rodent"),
    ("Rock", "Rock"),
    ("Ghost",  "Psychic");
   
    
insert into tb_personagens(Nome, Ataque, Defesa, Arma, id_classes) values 
   ("Totodile", 7000, 4000, "Tooth", 1),
   ("Butterfly", 8000, 5000, "Wind", 2),
   ("Pikachu", 0, 9000, "Hand", 3),
   ("Charmander", 7000, 9000, "Hand", 4),
   ("Pidgeotto", 1000, 4000, "Wind", 5),
   ("Ratata", 3000, 4000, "Tooth", 6),
   ("Geodude ", 6000, 5000, "Hand", 7),
   ("Gengar", 3000, 4000, "Mind", 8);
  */
   
-- select * from tb_personagens;
-- select * from tb_personagens where ataque > 2000;
-- select * from tb_personagens where Defesa > 1000 and Defesa <2000;
-- select * from tb_personagens where Nome like "%C%";

/* select tb_personagens.Nome, tb_personagens.Arma, tb_personagens.Ataque, tb_personagens.Defesa,tb_classes.classe, tb_classes.tipo from tb_personagens
	inner join tb_classes on tb_classes.id = tb_personagens.id_classes;
*/    
/*
select tb_personagens.Nome, tb_personagens.Arma, tb_classes.Tipo from tb_personagens
	inner join tb_classes on tb_classes.id = tb_personagens.id_classes; */