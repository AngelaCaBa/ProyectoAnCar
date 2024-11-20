import { Component } from '@angular/core';
import { Ticket } from '../../interfaces/ticket';


@Component({
  selector: 'app-verticket',
  templateUrl: './verticket.component.html',
  styleUrls: ['./verticket.component.css'],
})
export class VerticketComponent {
  // Datos simulados del ticket
  ticket: Ticket = {
    curp: 'CABA020425HCLRRNA6',
    nombre: 'Angel',
    apellidoPaterno: 'Carrillo',
    apellidoMaterno: 'Berlanga',
    nivelId: 1,
    municipioId: 10,
    asunto: 2,
    estado: 'Pendiente',
  };

  // Catálogo de asuntos
  asuntoCatalog: { [key: number]: string } = {
    1: 'Consulta',
    2: 'Inscripción',
    3: 'Solicitud de documentos',
    4: 'Otro',
  };

  // Devuelve la descripción del asunto según su ID
  getAsuntoLabel(asuntoId: number): string {
    return this.asuntoCatalog[asuntoId] || 'Desconocido';
  }
}