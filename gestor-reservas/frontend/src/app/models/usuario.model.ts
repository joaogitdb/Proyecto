export interface Usuario {
  usuario_id?: number;
  username: string;
  password_hash: string;
  rol: 'ADMIN' | 'OPERADOR' | 'LECTOR';
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}