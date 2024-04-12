import connection from '../../db/mysqlConnection';
import { Customer } from '../clientes/clientes.interface';

export class customerService {

    static async getCustomerById(idAdress: string): Promise<Customer | undefined> {
        return new Promise<Customer>((resolve, reject) => {
            const query = `SELECT * FROM clientes WHERE id_cliente = ?`;
            connection.query(query, [idAdress], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getCustomer(): Promise<Customer | undefined> {
        return new Promise<Customer>((resolve, reject) => {
            const query = `SELECT * FROM clientes`;
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