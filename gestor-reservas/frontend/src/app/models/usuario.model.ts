export interface Usuario {
  id?: number;
  username: string;
  passwordHash: string;
  rol: 'ADMIN' | 'OPERADOR' | 'LECTOR';
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}