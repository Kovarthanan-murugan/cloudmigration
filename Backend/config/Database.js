import { Sequelize } from 'sequelize';

const db = new Sequelize('appdb', 'kova', 'kovarthanan1!', {
    host: "kovadb.c7jqkmhoxqyy.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
});


export default db;