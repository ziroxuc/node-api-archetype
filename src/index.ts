import app from "./server/server"

const puerto: any = process.env.ENV_PORT
app.listen(puerto);

console.log("Server on en puerto "+puerto);

