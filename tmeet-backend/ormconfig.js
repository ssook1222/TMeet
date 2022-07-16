const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
  "type": "mysql",
  "host": "tmeet-server.mariadb.database.azure.com",
  "port": 3306,
  "username": "tmeet_admin@tmeet-server",
  "password": "P@ssw0rd",
  "database": "tmeetdb",
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