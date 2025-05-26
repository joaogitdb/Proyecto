export interface Motivo {
  motivo_id?: number;
  tipo: 'ENTRADA' | 'SALIDA';
  descripcion: string;
  fecha_creacion?: string;
}