export interface Medico {
  medico_id?: number;
  nombre: string;
  apellidos: string;
  documento_identidad: string;
  especialidad?: string;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}