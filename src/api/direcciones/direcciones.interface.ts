export interface Adress {
    id_direccion: number;
    codigo_postal: string;
    calle: string;
    colonia: string;
    num_ext: string;
    num_int: string;
    ciudad: string;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
    fk_creado_por: number;
    fk_actualizado_por: number;
    fecha_eliminacion?: Date;
    fk_eliminado_por?: number;
    }