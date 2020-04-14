import mongoose from 'mongoose'

export class MongoConnect {

    public async startMongo() {

        const port: any = process.env.PORT_DB;
        const db: any = process.env.BD;
        const uri: any = process.env.MONGO_URI;
        const user: any = process.env.MONGO_USERNAME;
        const pass: any = process.env.MONGO_PASSWORD;

        mongoose.connect(`mongodb://${uri}:${port}`, {
            user: user,
            pass: pass,
            dbName: db,
            useNewUrlParser: true
        }).then(() => {
            console.log("Base de datos conectada en: " + db + " uri: " + uri + " port: "+port);
        }).catch((err) => {
            console.log("ERROR al conectar a la base de datos ", err);
        });

    }
}

