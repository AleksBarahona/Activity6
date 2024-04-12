import connection from '../../db/mysqlConnection';
import { ProductSessions } from '../sesiones_productos/sesiones_productos.interface';

export class ProductSessionsService {

    static async getProductSessionById(fk_sesion: string): Promise<ProductSessions | undefined> {
        return new Promise<ProductSessions>((resolve, reject) => {
            const query = `SELECT * FROM sesiones_productos WHERE fk_sesion = ?`;
            connection.query(query, [fk_sesion], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getProductSessions(): Promise<ProductSessions | undefined> {
        return new Promise<ProductSessions>((resolve, reject) => {
            const query = `SELECT * FROM sesiones_productos`;
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