import dotenv from 'dotenv'
import express from 'express';
import router from "../routes/router.index";
import cors from 'cors'
import bodyParser = require('body-parser');
import { MongoConnect } from '../db/mongoConection'
import { Log4js } from './../utils/log4js.util';

dotenv.config();
//const mongo = new MongoConnect();
const log4js = new Log4js();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
//mongo.startMongo();
log4js.config();

export default app;
