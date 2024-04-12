import connection from '../../db/mysqlConnection';
import { Session } from '../sesiones/sesiones.interface';

export class ProductSessionsService {

    static async getSessionById(idSesion: string): Promise<Session | undefined> {
        return new Promise<Session>((resolve, reject) => {
            const query = `SELECT * FROM sesiones WHERE id_sesion = ?`;
            connection.query(query, [idSesion], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getSessions(): Promise<Session | undefined> {
        return new Promise<Session>((resolve, reject) => {
            const query = `SELECT * FROM sesiones`;
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