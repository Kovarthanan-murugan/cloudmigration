import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/Database.js';

import SequelizeStore from 'connect-session-sequelize';
import FileUpload from 'express-fileupload';

import UserRoute from './routes/UserRoute.js';
import AuthRoute from './routes/AuthRoute.js';

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

//  (async() => {
//     await db.sync();
// })(); 

dotenv.config();

// Middleware
app.use(session({
    // secret: process.env.SESS_SECRET,
    secret: "kova",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors ({
    credentials: true,
    origin: 'https://main.d27qzwgw4v8vhm.amplifyapp.com/'
}));


app.use(express.json());

app.use(FileUpload());
app.use(express.static("public"));

app.use(UserRoute);
app.use(AuthRoute);

// store.sync();

app.listen(5000, () => {
    console.log('Server up and running...');
});