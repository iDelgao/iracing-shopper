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
import { MatMenuModule } from '@angular/material/menu';

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
    MatMenuModule, // <--- Registramos el módulo
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

  // Función inteligente para agrupar coches en el tooltip (Corregida para tu estructura real)
  // 1. Agrupa los coches por clase (Versión Array para poder pintarlos por separado)
  getTooltipMulticlase(cochesData: any[]): { clase: string; coches: string[] }[] {
    if (!cochesData || cochesData.length === 0) return [];

    const grupos: { [key: string]: string[] } = {};
    const cochesSinClase: string[] = [];

    const cochesExtraidos: string[] = [];
    cochesData.forEach((item) => {
      if (typeof item === 'string') cochesExtraidos.push(item);
      else if (item.coches && Array.isArray(item.coches)) cochesExtraidos.push(...item.coches);
      else if (item.nombre) cochesExtraidos.push(item.nombre);
    });

    cochesExtraidos.forEach((cocheStr) => {
      if (!cocheStr) return;
      const nombreUpper = cocheStr.toUpperCase();

      if (
        nombreUpper.includes('GTP') ||
        nombreUpper.includes('V-SERIES.R') ||
        nombreUpper.includes('ARX-06') ||
        nombreUpper.includes('963')
      ) {
        if (!grupos['GTP']) grupos['GTP'] = [];
        grupos['GTP'].push(cocheStr);
      } else if (nombreUpper.includes('LMP2') || nombreUpper.includes('DALLARA P217')) {
        if (!grupos['LMP2']) grupos['LMP2'] = [];
        grupos['LMP2'].push(cocheStr);
      } else if (nombreUpper.includes('LMP3') || nombreUpper.includes('LIGIER JS P320')) {
        if (!grupos['LMP3']) grupos['LMP3'] = [];
        grupos['LMP3'].push(cocheStr);
      } else if (
        nombreUpper.includes('GT3') ||
        nombreUpper.includes('PORSCHE 911 GT3 R') ||
        nombreUpper.includes('296 GT3') ||
        nombreUpper.includes('M4 GT3')
      ) {
        if (!grupos['GT3']) grupos['GT3'] = [];
        grupos['GT3'].push(cocheStr);
      } else if (nombreUpper.includes('GT4')) {
        if (!grupos['GT4']) grupos['GT4'] = [];
        grupos['GT4'].push(cocheStr);
      } else if (nombreUpper.includes('TCR')) {
        if (!grupos['TCR']) grupos['TCR'] = [];
        grupos['TCR'].push(cocheStr);
      } else {
        cochesSinClase.push(cocheStr);
      }
    });

    const resultado = [];
    for (const clase in grupos) {
      resultado.push({ clase: clase, coches: grupos[clase] }); // Enviamos el array, no un texto
    }

    if (cochesSinClase.length > 0) {
      resultado.push({
        clase: Object.keys(grupos).length > 0 ? 'Otras Clases' : 'Coches',
        coches: cochesSinClase,
      });
    }

    return Object.keys(grupos).map((key) => ({
      clase: key,
      coches: grupos[key],
    }));
  }

  // 2. Decide de qué color se pinta el botón "Multiclase" (Faltante, Comprado o Gratis)
  getEstadoMulticlase(cochesData: any[]): string {
    if (!cochesData || cochesData.length === 0) return 'missing-badge';

    let hasFree = false;
    let hasOwned = false;

    // Recolectamos todos los coches de la serie
    const allCars: string[] = [];
    cochesData.forEach((item) => {
      if (typeof item === 'string') allCars.push(item);
      else if (item.coches && Array.isArray(item.coches)) allCars.push(...item.coches);
      else if (item.nombre) allCars.push(item.nombre);
    });

    // Comprobamos qué tenemos en el garaje
    for (const coche of allCars) {
      const tipo = this.dataService.getTipoCoche(coche);
      if (tipo === 'free') hasFree = true;
      if (tipo === 'owned') hasOwned = true;
    }

    // Si tenemos alguno gratis, pinta el botón de gratis.
    // Si no, pero tenemos comprados, pinta de comprado.
    // Si no tenemos absolutamente ninguno, pinta de faltante.
    if (hasFree) return 'free-badge';
    if (hasOwned) return 'owned-badge';
    return 'missing-badge';
  }

  // --- NUEVAS FUNCIONES DE APOYO PARA EL HTML ---

  // 1. Decide estrictamente si la serie usa Tooltip (Multiclase) o Etiquetas (Clase única)
  esMulticlase(serie: SerieOficial): boolean {
    if (!serie.coches || serie.coches.length === 0) return false;

    // Si el formato es un array de strings sueltos
    if (typeof serie.coches[0] === 'string') {
      return serie.coches.length > 3; // Si hay muchos coches sueltos, forzamos multiclase para no romper la UI
    }

    // Si el formato es de objetos (ej: [{ clase: 'GTP', coches: [...] }, { clase: 'GT3', coches: [...] }])
    return serie.coches.length > 1; // Más de 1 clase detectada = MULTICLASE puro
  }

  // 2. Extrae los coches para pintarlos como etiquetas sueltas (Solo se ejecuta si NO es multiclase)
  getCochesPlanos(cochesData: any[]): string[] {
    if (!cochesData || cochesData.length === 0) return [];

    // Si es formato antiguo de strings, los devolvemos tal cual
    if (typeof cochesData[0] === 'string') return cochesData;

    // Si es formato de objetos, como sabemos que NO es multiclase, extraemos los coches de su única clase
    if (cochesData[0].coches && Array.isArray(cochesData[0].coches)) {
      return cochesData[0].coches;
    }

    return [];
  }
}
