import connection from '../../db/mysqlConnection';
import { Category } from '../categorias/categorias.interface';

export class categoryService {

    static async getCategoryById(idAdress: string): Promise<Category | undefined> {
        return new Promise<Category>((resolve, reject) => {
            const query = `SELECT * FROM categorias WHERE idCategoria = ?`;
            connection.query(query, [idAdress], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getCategories(): Promise<Category | undefined> {
        return new Promise<Category>((resolve, reject) => {
            const query = `SELECT * FROM categorias`;
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