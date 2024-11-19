import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket, TicketState } from '../../interfaces/ticket';

@Component({
  selector: 'app-listadoticket',
  templateUrl: './listadoticket.component.html',
  styleUrls: ['./listadoticket.component.css'],
})
export class ListadoticketComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'curp',
    'nombre',
    'apellidoPaterno',
    'apellidoMaterno',
    'nivelId',
    'municipioId',
    'asunto',
    'estado',
    'acciones'
  ];

  // DataSource ahora es de tipo MatTableDataSource para soportar paginador, filtro y ordenamiento
  dataSource = new MatTableDataSource<Ticket>([
    {
      curp: 'CABA020425HCLRRNA6',
      nombre: 'Angel',
      apellidoPaterno: 'Carrillo',
      apellidoMaterno: 'Berlanga',
      nivelId: 1,
      municipioId: 10,
      asunto: 1,
      estado: 'Pendiente',
    },
    {
      curp: 'MOPA930715MCLRRL06',
      nombre: 'Maria',
      apellidoPaterno: 'Perez',
      apellidoMaterno: 'Lopez',
      nivelId: 2,
      municipioId: 15,
      asunto: 2,
      estado: 'Resuelto',
    },
  ]);

  // Catálogo de asuntos
  asuntoCatalog: { [key: number]: string } = {
    1: 'Consulta',
    2: 'Inscripción',
    3: 'Solicitud de documentos',
    4: 'Otro',
  };

  // Paginador y ordenamiento
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Conecta el paginador
    this.dataSource.sort = this.sort; // Conecta el ordenamiento
  }

  // Devuelve la descripción del asunto según su ID
  getAsuntoLabel(asuntoId: number): string {
    return this.asuntoCatalog[asuntoId] || 'Desconocido';
  }

  // Filtro de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
