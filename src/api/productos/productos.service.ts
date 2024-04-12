import connection from '../../db/mysqlConnection';
import { Product } from '../productos/productos.interface';

export class ProductsService {

    static async getProductById(idProduct: string): Promise<Product | undefined> {
        return new Promise<Product>((resolve, reject) => {
            const query = `SELECT * FROM productos WHERE id_producto = ?`;
            connection.query(query, [idProduct], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getProducts(): Promise<Product | undefined> {
        return new Promise<Product>((resolve, reject) => {
            const query = `SELECT * FROM productos`;
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