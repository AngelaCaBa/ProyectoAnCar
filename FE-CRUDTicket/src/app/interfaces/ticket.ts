export interface Ticket {
  curp: string; // CURP del alumno
  nombre: string; // Nombre del alumno
  apellidoPaterno: string; // Apellido paterno
  apellidoMaterno: string; // Apellido materno
  nivelId: number; // Nivel educativo (referencia a un catálogo)
  municipioId: number; // Municipio (referencia a un catálogo)
  asunto: number; // Referencia al catálogo de asuntos
  estado: TicketState; // Estado del ticket
}

export type TicketState = 'Pendiente' | 'Resuelto'; // Tipo para el estado del ticket
