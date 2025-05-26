
export interface Paciente {
  paciente_id?: number;
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;  // ISO date
  documento_identidad: string;
  contacto?: string;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}
