import connection from '../../db/mysqlConnection';
import { User } from './usuarios.interface';

export class UserService {

    static async getUserById(userId: string): Promise<User | undefined> {
        return new Promise<User>((resolve, reject) => {
            const query = `SELECT * FROM usuarios WHERE id_usuario = ?`;
            connection.query(query, [userId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static async getUsers(): Promise<User | undefined> {
        return new Promise<User>((resolve, reject) => {
            const query = `SELECT * FROM usuarios`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createUser(userData: Omit<User, 'id_usuario'>): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const query = `INSERT INTO usuarios SET ?`;
            connection.query(query, userData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ id_usuario: insertedId, ...userData });
                }
            });
        });
    }
    
    static async updateUser(
		userId: string,
		userData: Partial<UpdateUserData>
	): Promise<ResultSetHeader> {
		const setValues = [];
		const values: string[] = [];

		for (const [key, value] of Object.entries(userData)) {
			setValues.push(`${key} = ?`);
			values.push(value);
		}

		if (setValues.length === 0) {
			throw new Error('No fields provided for update.');
		}

		const query = `UPDATE users SET ${setValues.join(', ')} WHERE user_id = ?`;
		values.push(userId);

		return new Promise<ResultSetHeader>((resolve, reject) => {
			connection.query<ResultSetHeader>(query, values, (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}

	static async deleteUser(userId: string): Promise<ResultSetHeader> {
		return new Promise<ResultSetHeader>((resolve, reject) => {
			const query = `DELETE FROM users WHERE user_id = ?`;
			connection.query<ResultSetHeader>(query, [userId], (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	}

}