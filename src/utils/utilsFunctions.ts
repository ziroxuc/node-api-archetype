import jwt from 'jsonwebtoken';

export class UtilsFunctions {

    public compareArray(a: any, b: any) {
        if (a.inmobiliaria < b.inmobiliaria) {
            return -1;
        }
        if (a.inmobiliaria > b.inmobiliaria) {
            return 1;
        }
        return 0;
    }

    // Metodo para crear los filtros que se envian en el metodo obtener proyectos por id ejecutivo
    public obtenerFiltrosProyectos(proyectos: any[]) {

        let data: any[] = [];
        let sinRepetidos: any[] = proyectos.filter((valorActual, indiceActual, arreglo) => {
            //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
            return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo.inmobiliariaCod) === JSON.stringify(valorActual.inmobiliariaCod)) === indiceActual
        });

        sinRepetidos.forEach((element: any) => {
            let obj = { name: element.inmobiliaria, id: element.inmobiliariaCod };
            data.push(obj);
        });
        return data;
    }

    static rutSinPuntos(rut: string): string {
        let newRut: string = rut.replace(".", "");
        return newRut;
    }

    static rutSinPuntosNiGuion(rut: string): string {
        let newRut: string = rut.replace(".", "");
        if (newRut.indexOf('-') !== -1) {
            let rutFinal: string[] = newRut.split('-');
            newRut = rutFinal[0];
        }
        return newRut;
    }

    public static getIdEjecutivoFromToken(tokenR: string) {

        try {
            let tokenFinal: string = '';
            if (tokenR.indexOf('Bearer') !== -1) {
                let a = tokenR.split(' ');
                tokenFinal = a[1];
            } else {
                tokenFinal = tokenR;
            }
            const data: any = jwt.decode(tokenFinal);
            return data.Ejecutivo.rut;
        } catch (e) {
            return null;
        }
    }

    public static firstDate(date: string) {

        try {
            let date_parts: string[] = date.split('-');
            let fulldateStart: string = date_parts[0] + "-" + date_parts[1] + "-" +"01T00:00:00.000Z"

            //return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);
            return fulldateStart;
        } catch (e) {
            throw e;
        }
    }

    public static lastDate(date: string) {

        try {
            const fecha: Date = new Date(date)
            const fecha2: Date = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0, 0, 0, 0);
            const fecha3:string = fecha2.toISOString().toString();            
            let date_parts: string[] = fecha3.split('-');
            let lasDateparts: string[] = date_parts[2].split('T');
            let fulldateEnd: string = date_parts[0] + "-" + date_parts[1] + "-" + lasDateparts[0] +"T23:59:59.999Z"
            return fulldateEnd;
        } catch (e) {
            throw e;
        }
    }

    public static revertDates(date: string):number {

        try {
            const fecha0 = date.split(' ');
            const fecha = fecha0[0].split('-');
            const newDate = fecha[2] + "-" + fecha[1] + "-" + fecha[0];
            return new Date(newDate).getTime();
        } catch (e) {
            throw e;
        }
    }
}