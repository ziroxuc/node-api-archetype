import { Schema, model } from "mongoose";

export interface IExample {

    _id: string;
    nombre:string;
    edad:number;
}

const exampleSchema = new Schema({
    
    nombre: { type: String, required: [true, 'nombre es necesario'] },
    edad: { type: Number },
    fecha_creacion: { type: Date, default: () => Date.now() },
});

export const Example: any = model("Example", exampleSchema);





