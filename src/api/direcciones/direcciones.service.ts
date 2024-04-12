import connection from '../../db/mysqlConnection';
import { Adress } from '../direcciones/direcciones.interface';

export class GenderService {

    static async getGenderById(idAdress: string): Promise<Adress | undefined> {
        return new Promise<Adress>((resolve, reject) => {
            const query = `SELECT * FROM direcciones WHERE Id_direccion = ?`;
            connection.query(query, [idAdress], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getAdress(): Promise<Adress | undefined> {
        return new Promise<Adress>((resolve, reject) => {
            const query = `SELECT * FROM direcciones`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    };

} 