import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Data } from '../../services/data';
import { Schedule, SerieOficial } from '../../services/schedule';
import { CocheClase } from '../../services/schedule';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule, // <--- Registramos el módulo
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  mostrarSoloApto = false;
  semanaActual!: number;
  semanas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // <--- Ahora son 12

  // Novedad: Array con nuestras disciplinas para generar las pestañas
  categorias = ['Sports Car', 'Formula', 'Oval', 'Dirt Oval', 'Dirt Road'];

  nivelLicencia: { [key: string]: number } = { R: 1, D: 2, C: 3, B: 4, A: 5 };

  constructor(
    public dataService: Data,
    public scheduleService: Schedule,
  ) {}

  ngOnInit(): void {
    this.semanaActual = this.calcularSemanaActual();
  }

  calcularSemanaActual(): number {
    const fechaInicioSeason = new Date('2026-06-16');
    const fechaHoy = new Date();

    if (fechaHoy < fechaInicioSeason) return 1;

    const diferenciaMilisegundos = fechaHoy.getTime() - fechaInicioSeason.getTime();
    const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    const semanaCalculada = Math.floor(diferenciaDias / 7) + 1;

    if (semanaCalculada > 12) return 12; // <--- Capado actualizado a la semana 12
    return semanaCalculada;
  }

  // 🏁 NUEVA FUNCIÓN: Obtiene las series filtrando por categoría (ej: "Sports Car")
  obtenerSeriesPorCategoria(categoria: string): SerieOficial[] {
    let filtradas = this.scheduleService
      .getCalendarioCompleto()
      .filter((serie) => serie.categoria === categoria);

    if (this.mostrarSoloApto) {
      filtradas = filtradas.filter((serie) => this.esApto(serie));
    }
    return filtradas;
  }

  getSemanaDeSerie(serie: SerieOficial) {
    return (
      serie.calendario.find((s) => s.numero === this.semanaActual) || {
        circuito: 'Descanso',
        fechaInicio: '-',
        duracion: '-',
      }
    );
  }

  esApto(serie: SerieOficial): boolean {
    const semInfo = this.getSemanaDeSerie(serie);
    if (semInfo.circuito === 'Descanso') return false;

    const perfil = this.dataService.getPerfil();
    const misCoches = this.dataService.getMisCochesIds();
    const misCircuitos = this.dataService.getMisCircuitosIds();

    const tieneLicencia =
      this.nivelLicencia[perfil.licencias.sportsCar] >= this.nivelLicencia[serie.clase];

    // Comprueba si tienes alguno de los coches que pide la serie
    const tieneCoche = serie.coches.some((item: any) => {
      // Si item tiene una propiedad 'coches', tratamos la clase (nuevo formato)
      if (item.coches) {
        return item.coches.some((coche: string) => misCoches.includes(coche));
      }
      // Si item es un string, lo comparamos directamente (formato antiguo)
      return misCoches.includes(item);
    });

    // 🧠 NUEVA LÓGICA: Comprueba si tienes el circuito ignorando los "Layouts"
    const tieneCircuito = misCircuitos.some((miCircuito) =>
      semInfo.circuito.toLowerCase().includes(miCircuito.toLowerCase()),
    );

    return tieneLicencia && tieneCoche && tieneCircuito;
  }

  // Nueva función: Acepta objetos CocheClase y extrae el nombre
  getTooltipMulticlase(cochesData: any[]): { clase: string; lista: string }[] {
    if (!cochesData || cochesData.length === 0) return [];

    const grupos: { [key: string]: string[] } = {};
    const cochesSinClase: string[] = [];

    // Clasificamos la telemetría
    cochesData.forEach((item) => {
      // MAGIA: Si nos llega un texto simple lo usamos, si nos llega el objeto CocheClase, extraemos su .nombre
      const nombreReal = typeof item === 'string' ? item : item.nombre;

      if (!nombreReal) return; // Seguro anti-fallos

      const nombreUpper = nombreReal.toUpperCase();

      if (
        nombreUpper.includes('GTP') ||
        nombreUpper.includes('V-SERIES.R') ||
        nombreUpper.includes('ARX-06') ||
        nombreUpper.includes('963')
      ) {
        if (!grupos['GTP']) grupos['GTP'] = [];
        grupos['GTP'].push(nombreReal);
      } else if (nombreUpper.includes('LMP2') || nombreUpper.includes('DALLARA P217')) {
        if (!grupos['LMP2']) grupos['LMP2'] = [];
        grupos['LMP2'].push(nombreReal);
      } else if (nombreUpper.includes('LMP3') || nombreUpper.includes('LIGIER JS P320')) {
        if (!grupos['LMP3']) grupos['LMP3'] = [];
        grupos['LMP3'].push(nombreReal);
      } else if (
        nombreUpper.includes('GT3') ||
        nombreUpper.includes('PORSCHE 911 GT3 R') ||
        nombreUpper.includes('296 GT3') ||
        nombreUpper.includes('M4 GT3')
      ) {
        if (!grupos['GT3']) grupos['GT3'] = [];
        grupos['GT3'].push(nombreReal);
      } else if (nombreUpper.includes('GT4')) {
        if (!grupos['GT4']) grupos['GT4'] = [];
        grupos['GT4'].push(nombreReal);
      } else if (nombreUpper.includes('TCR')) {
        if (!grupos['TCR']) grupos['TCR'] = [];
        grupos['TCR'].push(nombreReal);
      } else {
        cochesSinClase.push(nombreReal);
      }
    });

    // Construimos el array para el HTML
    const resultado = [];
    for (const clase in grupos) {
      resultado.push({ clase: clase, lista: grupos[clase].join(', ') });
    }

    if (cochesSinClase.length > 0) {
      resultado.push({
        clase: Object.keys(grupos).length > 0 ? 'Otras Clases' : 'Coches',
        lista: cochesSinClase.join(', '),
      });
    }

    return resultado;
  }

  // Función auxiliar para extraer el nombre del coche y evitar errores estrictos del HTML
  getNombreCocheUnico(coche: any): string {
    if (!coche) return '';
    // Si es un texto simple lo devuelve, si es un objeto extrae el .nombre
    return typeof coche === 'string' ? coche : coche.nombre;
  }
}
