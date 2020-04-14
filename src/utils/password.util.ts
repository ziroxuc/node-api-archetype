
import bcrypt from 'bcryptjs'

const generarPrimeraPassword = (rut: string) => {

    // Se dejan los primeros 4 numeros del rut
    let rutS = rut.replace(".","");
    let rutSubs = rutS.substr(0,4);
    const salt = bcrypt.genSaltSync(10);
    const nuevaPass = bcrypt.hashSync(rutSubs, salt);
    return nuevaPass;
}
export default generarPrimeraPassword;