import { Sequelize } from "sequelize"

export default new Sequelize({
  dialect: "sqlite",
  storage: "./storage/database.sqlite"
});