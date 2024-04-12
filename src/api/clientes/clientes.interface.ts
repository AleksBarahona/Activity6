export interface Customer {
    id_cliente: number;
    nombre: string;
    apellido: string;
    fecha_nac: Date;
    fk_genero: number;
    telefono: number;
    correo: string;
    fk_direccion: number;
    fecha_creacion: Date;    
    fecha_actualizacion: Date;
    fk_creado_por: number;
    fk_actualizado_por: number;
    fecha_eliminacion?: Date;
    fk_eliminado_por?: number;
    }