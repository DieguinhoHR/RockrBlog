Rockr Blog

## Arquitetura
Optei por usar o conceito de monorepo, pois como projeto é pequeno, é muito mais 
fácil manter a api e frontend.

Sobre aplicação, na parte do backend optei pelo zend expressive, por ser uma aplicação bem pequena.
Na parte do client (frontend), optei por usar react, pois tenho mais familiridade com o mesmo.

Optei por usar o zenddb para realizar as persistência. Pensei no doctrine, mas o projeto é pequeno demais.

## Backend

Para rodar o projeto, basta rodar o seguinte comando abaixo do docker:

```
docker-compose up
```

Obs: o servidor vai rodar na porta 81, e mysql na 3307

## Frontend

Para rodar o client, basta rodar o seguinte comando abaixo:

```
npm start
```

## Banco de dados

O banco dados se encontra na pasta devops cujo nome é: dump