import { Injectable } from '@angular/core';

export interface Semana {
  numero: number;
  fechaInicio: string;
  circuito: string;
  duracion: string;
}

export interface CocheClase {
  nombreClase: string;
  coches: string[];
}

export interface SerieOficial {
  nombre: string;
  categoria: string;
  clase: string;
  coches: CocheClase[]; // Soporta clases o un arreglo simple de nombres de coches
  calendario: any[]; // (O tu interfaz de CalendarioItem)
}

@Injectable({
  providedIn: 'root',
})
export class Schedule {
  // Base de datos ampliada a las 12 Semanas Reales
  private temporadaActual: SerieOficial[] = [
    {
      nombre: 'BMW M2 Cup',
      categoria: 'Sports Car',
      clase: 'R',
      // Ya no usamos string[], usamos CocheClase[]
      coches: [{ nombreClase: 'Default', coches: ['BMW M2 Racing (G87)'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Okayama International Circuit - Full Course',
          duracion: '12 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Oulton Park Circuit - International',
          duracion: '12 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Circuito de Navarra - Speed Circuit',
          duracion: '12 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Summit Point Raceway - Summit Point Raceway',
          duracion: '12 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Virginia International Raceway - North Course',
          duracion: '12 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Winton Motor Raceway - National Circuit',
          duracion: '12 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Tsukuba Circuit - 2000 Full',
          duracion: '12 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Charlotte Motor Speedway Roval 2025',
          duracion: '12 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Lime Rock Park - Grand Prix',
          duracion: '12 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Motorsport Arena Oschersleben - Grand Prix',
          duracion: '12 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Oulton Park Circuit - Fosters',
          duracion: '12 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Circuit de Lédenon',
          duracion: '12 mins',
        },
      ],
    },
    {
      nombre: 'Global Mazda MX-5 Cup by Fanatec',
      categoria: 'Sports Car',
      clase: 'R',
      coches: [{ nombreClase: 'Default', coches: ['Global Mazda MX-5 Cup'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Okayama International Circuit - Full Course',
          duracion: '12 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Oulton Park Circuit - International',
          duracion: '12 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Circuito de Navarra - Speed Circuit',
          duracion: '12 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Summit Point Raceway - Summit Point Raceway',
          duracion: '12 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Virginia International Raceway - North Course',
          duracion: '12 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Winton Motor Raceway - National Circuit',
          duracion: '12 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Tsukuba Circuit - 2000 Full',
          duracion: '12 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Charlotte Motor Speedway Roval 2025',
          duracion: '12 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Lime Rock Park - Grand Prix',
          duracion: '12 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Motorsport Arena Oschersleben - Grand Prix',
          duracion: '12 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Oulton Park Circuit - Fosters',
          duracion: '12 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Circuit de Lédenon',
          duracion: '12 mins',
        },
      ],
    },
    {
      nombre: 'BMW M Power Challenge',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [{ nombreClase: 'Default', coches: ['BMW M2 Racing (G87)'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Road Atlanta - Full Course',
          duracion: '15 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Circuit Zandvoort - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Circuit de Nevers Magny-Cours - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Red Bull Ring - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Oran Park Raceway - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Circuit de Spa-Francorchamps - Grand Prix Pits',
          duracion: '15 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Okayama International Circuit - Full Course',
          duracion: '15 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Qualcomm Circuit (Naval Base Coronado)',
          duracion: '15 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Motorsport Arena Oschersleben - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Suzuka International Racing Course - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Rudskogen Motorsenter',
          duracion: '15 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Virginia International Raceway - Full Course',
          duracion: '15 mins',
        },
      ],
    },
    {
      nombre: 'Clio Cup',
      categoria: 'Sports Car',
      clase: 'D', // Mapeado desde Rookie 4.0 según telemetría
      coches: [{ nombreClase: 'Default', coches: ['Renault Clio'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Oulton Park Circuit - International',
          duracion: '15 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Okayama International Circuit - Full Course',
          duracion: '15 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Tsukuba Circuit - 2000 Full',
          duracion: '15 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Snetterton Circuit - 100',
          duracion: '15 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Watkins Glen International - Cup',
          duracion: '15 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Donington Park Racing Circuit - National',
          duracion: '15 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Virginia International Raceway - North Course',
          duracion: '15 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Motorsport Arena Oschersleben - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Rudskogen Motorsenter',
          duracion: '15 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Summit Point Raceway - Summit Point Raceway',
          duracion: '15 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Circuit de Spa-Francorchamps - Grand Prix Pits',
          duracion: '15 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Winton Motor Raceway - National Circuit',
          duracion: '15 mins',
        },
      ],
    },
    {
      nombre: 'Ford Mustang Challenge by Skip Barber',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [{ nombreClase: 'Default', coches: ['Ford Mustang GT4'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Virginia International Raceway - Full Course',
          duracion: '15 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Watkins Glen International - Boot',
          duracion: '15 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Circuit des 24 Heures du Mans',
          duracion: '15 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'WeatherTech Raceway at Laguna Seca',
          duracion: '15 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Daytona International Speedway - Road Course',
          duracion: '15 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Summit Point Raceway - Summit Point Raceway',
          duracion: '15 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Circuit de Spa-Francorchamps - Grand Prix Pits',
          duracion: '15 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Oran Park Raceway - Grand Prix',
          duracion: '15 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Road America - Full Course',
          duracion: '15 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Snetterton Circuit - 300',
          duracion: '15 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Sebring International Raceway - International',
          duracion: '15 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Road Atlanta - Full Course',
          duracion: '15 mins',
        },
      ],
    },
    {
      nombre: 'Global Sports Car Challenge by Fanatec',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [{ nombreClase: 'Default', coches: ['Cadillac CTS-V Racecar', 'Kia Optima'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Summit Point Raceway - Summit Point Raceway',
          duracion: '25 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Circuit de Spa-Francorchamps - Grand Prix Pits',
          duracion: '25 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Nürburgring Nordschleife - Industriefahrten',
          duracion: '5 laps',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Okayama International Circuit - Full Course',
          duracion: '25 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Autódromo Hermanos Rodríguez - Grand Prix',
          duracion: '25 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Watkins Glen International - Boot',
          duracion: '25 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Willow Springs International Raceway - Big Willow',
          duracion: '25 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Silverstone Circuit - Grand Prix',
          duracion: '25 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Autódromo José Carlos Pace - Grand Prix',
          duracion: '25 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Homestead Miami Speedway - Road Course B',
          duracion: '25 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Oran Park Raceway - Grand Prix',
          duracion: '25 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Mount Panorama Circuit',
          duracion: '25 mins',
        },
      ],
    },
    {
      nombre: 'Legends Road Cup by Go Motorsports Shop',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [{ nombreClase: 'Default', coches: ["Legends Ford '34 Coupe"] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Circuito de Navarra - Speed Circuit - Short',
          duracion: '15 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Tsukuba Circuit - 1000 Chicane',
          duracion: '15 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Donington Park Racing Circuit - National',
          duracion: '15 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Okayama International Circuit - Short',
          duracion: '15 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Road Atlanta - Short',
          duracion: '15 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Snetterton Circuit - 300',
          duracion: '15 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Oulton Park Circuit - Fosters w/Hislop',
          duracion: '15 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Road America - Full Course',
          duracion: '15 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Charlotte Motor Speedway Infield Road Course',
          duracion: '15 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Lime Rock Park - Chicanes',
          duracion: '15 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Circuit de Lédenon',
          duracion: '15 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Misano World Circuit Marco Simoncelli - Truck',
          duracion: '15 mins',
        },
      ],
    },
    {
      nombre: 'Mission R Challenge',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [{ nombreClase: 'Default', coches: ['Porsche Mission R'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Charlotte Motor Speedway Roval No Chicanes',
          duracion: '20 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Watkins Glen International - Classic',
          duracion: '20 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Fuji International Speedway - No Chicane',
          duracion: '20 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Okayama International Circuit - Full Course',
          duracion: '20 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Mount Panorama Circuit',
          duracion: '20 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Long Beach Street Circuit',
          duracion: '20 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Virginia International Raceway - Full Course',
          duracion: '20 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Hockenheimring Baden-Württemberg - Outer',
          duracion: '20 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Nürburgring Nordschleife - Industriefahrten',
          duracion: '3 laps',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Oulton Park Circuit - Intl w/no Chicanes',
          duracion: '20 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: '[Legacy] Silverstone Circuit - 2008 - Historical Grand Prix',
          duracion: '20 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Road America - Full Course',
          duracion: '20 mins',
        },
      ],
    },
    {
      nombre: 'NASCAR Euro Series',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [{ nombreClase: 'Default', coches: ['EURO NASCAR V8GP'] }],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-06-16',
          circuito: 'Brands Hatch Circuit - Indy',
          duracion: '20 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-06-23',
          circuito: 'Circuit Zolder - Grand Prix',
          duracion: '20 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-06-30',
          circuito: 'Oulton Park Circuit - Island',
          duracion: '20 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-07-07',
          circuito: 'Donington Park Racing Circuit - National',
          duracion: '20 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-07-14',
          circuito: 'Hockenheimring Baden-Württemberg - National A',
          duracion: '20 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-21',
          circuito: 'Nürburgring Grand-Prix-Strecke - Sprintstrecke',
          duracion: '20 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-07-28',
          circuito: 'Red Bull Ring - National',
          duracion: '20 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-04',
          circuito: 'Silverstone Circuit - National',
          duracion: '20 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-08-11',
          circuito: 'Snetterton Circuit - 200',
          duracion: '20 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-08-18',
          circuito: 'Motorsport Arena Oschersleben - Grand Prix',
          duracion: '20 mins',
        },
        {
          numero: 11,
          fechaInicio: '2026-08-25',
          circuito: 'Circuit de Barcelona Catalunya - National',
          duracion: '20 mins',
        },
        {
          numero: 12,
          fechaInicio: '2026-09-01',
          circuito: 'Circuit de Spa-Francorchamps - Grand Prix Pits',
          duracion: '20 mins',
        },
      ],
    },
    {
      nombre: 'Nurburgring Endurance Championship',
      categoria: 'Sports Car',
      clase: 'D',
      coches: [
        {
          nombreClase: 'GT3 Class',
          coches: [
            'Mercedes-AMG GT3 2020',
            'Ferrari 296 GT3',
            'Aston Martin Vantage GT3 EVO',
            'BMW M4 GT3 EVO',
            'Lamborghini Huracán GT3 EVO',
            'Porsche 911 GT3 R (992)',
            'Ford Mustang GT3',
          ],
        },
        {
          nombreClase: 'GT4 Class',
          coches: [
            'Mercedes-AMG GT4',
            'BMW M4 G82 GT4 Evo',
            'Aston Martin Vantage GT4',
            'Porsche 718 Cayman GT4 Clubsport MR',
          ],
        },
        {
          nombreClase: 'TCR Class',
          coches: ['Hyundai Elantra N TCR', 'Audi RS3 LMS Gen2 TCR', 'Honda Civic Type R TCR'],
        },
        {
          nombreClase: 'Other',
          coches: ['BMW M2 Racing (G87)'],
        },
      ],
      calendario: [
        {
          numero: 1,
          fechaInicio: '2026-03-21',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 2,
          fechaInicio: '2026-04-04',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 3,
          fechaInicio: '2026-04-25',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 4,
          fechaInicio: '2026-05-23',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 5,
          fechaInicio: '2026-06-06',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 6,
          fechaInicio: '2026-07-04',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '360 mins',
        },
        {
          numero: 7,
          fechaInicio: '2026-08-08',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 8,
          fechaInicio: '2026-08-29',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 9,
          fechaInicio: '2026-10-10',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
        {
          numero: 10,
          fechaInicio: '2026-11-07',
          circuito: 'Nürburgring Combined - Gesamtstrecke VLN',
          duracion: '240 mins',
        },
      ],
    },
  ];

  getCalendarioCompleto(): SerieOficial[] {
    return this.temporadaActual;
  }
}
