import { Sequelize } from 'sequelize';

const db = new Sequelize('db_penggajian3', 'root', 'KovarthananMuRugan1!', {
    host: "127.0.0.1",
    dialect: "mysql"
});

export default db;