export interface Reserva {
  reserva_id?: number;
  paciente_id: number;
  establecimiento_id: number;
  habitacion_id?: number;
  medico_id?: number;
  motivo_entrada_id: number;
  motivo_salida_id?: number;
  fecha_entrada: string;   // ISO datetime
  fecha_salida: string;    // ISO datetime
  estado?: 'ACTIVA' | 'CANCELADA' | 'COMPLETADA';
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}