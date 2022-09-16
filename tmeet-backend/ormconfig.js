const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
  "type": "mysql",
  "host": "database-1.cpg5mo6ln1l6.ap-northeast-1.rds.amazonaws.com",
  "port": 3306,
  "username": "admin",
  "password": "20220916",
  "database": "Tmeet",
  "synchronize": true,
  "logging": true,
  "entities": [
    "src/entity/**/*.ts"
  ],
  "migrations": [
    "src/migration/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  namingStrategy: new SnakeNamingStrategy()
}