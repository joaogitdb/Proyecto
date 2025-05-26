export interface Establecimiento {
  establecimiento_id?: number;
  nombre: string;
  direccion: string;
  capacidad: number;
  tipo?: string;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}