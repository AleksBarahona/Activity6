import connection from '../../db/mysqlConnection';
import { Gender } from '../generos/generos.interface';

export class GenderService {

    static async getGenderById(idGender: string): Promise<Gender | undefined> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `SELECT * FROM generos WHERE id_genero = ?`;
            connection.query(query, [idGender], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getGenders(): Promise<Gender | undefined> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `SELECT * FROM generos`;
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