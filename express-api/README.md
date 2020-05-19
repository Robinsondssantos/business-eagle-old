# Centralizer API

## How to create the database
```
docker exec -it business-eagle bash
su - postgres
psql
CREATE DATABASE business_eagle;
\connect business_eagle

```

## How to create migrations, example
```
yarn sequelize migration:create --name=create-users
```

## How to apply db migrations, example
```
yarn sequelize db:migrate
```

## How to apply specifics db migrations, example
--to Migration name to run migrations until
--from Migration name to start migrations from (excluding)
```
yarn sequelize db:migrate --from will-not-be-included.js --to filename.js
```

## How to create seeds, example
```
yarn sequelize seed:generate --name demo-user
```

## How to apply seeds, example
```
yarn sequelize db:seed:all
```