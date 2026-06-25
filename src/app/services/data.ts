import { Injectable } from '@angular/core';

export interface ItemContenido {
  id: string;
  nombre: string;
  tipo: 'free' | 'owned';
}

export interface PerfilPiloto {
  licencias: {
    oval: string;
    sportsCar: string;
    formula: string;
    dirtOval: string;
    dirtRoad: string;
  };
  estadisticas: {
    oval: { sr: number; ir: number };
    sportsCar: { sr: number; ir: number };
    formula: { sr: number; ir: number };
    dirtOval: { sr: number; ir: number };
    dirtRoad: { sr: number; ir: number };
  };
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  public miPerfil: PerfilPiloto = {
    licencias: { oval: 'C', sportsCar: 'B', formula: 'C', dirtOval: 'C', dirtRoad: 'D' },
    estadisticas: {
      oval: { sr: 2.41, ir: 1193 },
      sportsCar: { sr: 3.37, ir: 1592 },
      formula: { sr: 2.18, ir: 1186 },
      dirtOval: { sr: 2.48, ir: 1287 },
      dirtRoad: { sr: 2.5, ir: 1221 },
    },
  };

  private coches: ItemContenido[] = [
    // --- COCHES BASE (GRATUITOS) ACTUALIZADOS ---
    { id: 'legends_ford_34', nombre: "Legends Ford '34 Coupe", tipo: 'free' },
    { id: 'mini_stock', nombre: 'Mini Stock', tipo: 'free' },
    {
      id: 'nascar_truck_silverado_2008',
      nombre: 'NASCAR Truck Chevrolet Silverado - 2008',
      tipo: 'free',
    },
    { id: 'street_stock_panther', nombre: 'Street Stock - Panther', tipo: 'free' },
    { id: 'mx5', nombre: 'Global Mazda MX-5 Cup', tipo: 'free' },
    { id: 'bmw_m2_cs', nombre: 'BMW M2 CS Racing', tipo: 'free' },
    { id: 'bmw_m2_g87', nombre: 'BMW M2 Racing (G87)', tipo: 'free' },
    { id: 'cadillac_ctsv', nombre: 'Cadillac CTS-V', tipo: 'free' },
    { id: 'kia_optima', nombre: 'Kia Optima', tipo: 'free' },
    { id: 'mazda_mx5_2010', nombre: 'Mazda MX-5 Cup – 2010', tipo: 'free' },
    { id: 'mazda_mx5_roadster_2010', nombre: 'Mazda MX-5 Roadster – 2010', tipo: 'free' },
    { id: 'pontiac_solstice', nombre: 'Pontiac Solstice Club Sport', tipo: 'free' },
    { id: 'pontiac_solstice_rookie', nombre: 'Pontiac Solstice Club Sport – Rookie', tipo: 'free' },
    { id: 'gr86', nombre: 'Toyota GR86', tipo: 'free' },
    { id: 'vw_jetta', nombre: 'Volkswagen Jetta TDi', tipo: 'free' },
    { id: 'radical_sr8', nombre: 'Radical SR8 V8', tipo: 'free' },
    { id: 'scca_spec_racer', nombre: 'SCCA Spec Racer Ford', tipo: 'free' },
    { id: 'dallara_dw12', nombre: 'Dallara DW12', tipo: 'free' },
    { id: 'formula_vee', nombre: 'Formula Vee – Classic', tipo: 'free' },
    { id: 'ray_ff1600', nombre: 'Ray FF1600', tipo: 'free' },
    { id: 'dirt_legends_34', nombre: 'Dirt Legends Ford ’34 Coupe', tipo: 'free' },
    { id: 'dirt_micro_sprint', nombre: 'Dirt Micro Sprint', tipo: 'free' },
    { id: 'dirt_micro_sprint_non_winged', nombre: 'Dirt Micro Sprint – Non Winged', tipo: 'free' },
    {
      id: 'dirt_outlaw_micro_non_winged',
      nombre: 'Dirt Outlaw Micro Sprint – Non Winged',
      tipo: 'free',
    },
    { id: 'dirt_outlaw_micro_winged', nombre: 'Dirt Outlaw Micro Sprint – Winged', tipo: 'free' },
    { id: 'dirt_street_stock', nombre: 'Dirt Street Stock', tipo: 'free' },
    { id: 'mini_stock_dirt', nombre: 'Mini Stock – Dirt', tipo: 'free' },
    { id: 'ump_modified', nombre: 'UMP Modified', tipo: 'free' },
    { id: 'fia_cross_car', nombre: 'FIA Cross Car', tipo: 'free' },
    { id: 'vw_beetle', nombre: 'VW Beetle', tipo: 'free' },
    { id: 'vw_beetle_lite', nombre: 'VW Beetle Lite', tipo: 'free' },
    { id: 'lucas_oil_pro2', nombre: 'Lucas Oil Off-Road Pro 2 Lite Truck', tipo: 'free' },

    // --- TUS COCHES COMPRADOS ---
    { id: 'mercedes_gt4', nombre: 'Mercedes-AMG GT4', tipo: 'owned' },
    { id: 'f4', nombre: 'FIA F4', tipo: 'owned' },
    { id: 'ferrari_296_gt3', nombre: 'Ferrari 296 GT3', tipo: 'owned' },
    { id: 'legacy_dallara_ir05', nombre: '[Legacy] Dallara IR-05', tipo: 'owned' },
    {
      id: 'legacy_nascar_impala_2009',
      nombre: '[Legacy] NASCAR Cup Chevrolet Impala COT - 2009',
      tipo: 'owned',
    },
    {
      id: 'legacy_nascar_ss_2013',
      nombre: '[Legacy] NASCAR Cup Chevrolet SS - 2013',
      tipo: 'owned',
    },
    {
      id: 'legacy_nascar_fusion_2016',
      nombre: '[Legacy] NASCAR Cup Ford Fusion - 2016',
      tipo: 'owned',
    },
    {
      id: 'legacy_nascar_nationwide_2012',
      nombre: '[Legacy] NASCAR Nationwide Chevrolet Impala - 2012',
      tipo: 'owned',
    },
    {
      id: 'legacy_nascar_camaro_2014',
      nombre: '[Legacy] NASCAR Xfinity Chevrolet Camaro - 2014',
      tipo: 'owned',
    },
    {
      id: 'legacy_nascar_mustang_2016',
      nombre: '[Legacy] NASCAR Xfinity Ford Mustang - 2016',
      tipo: 'owned',
    },
    {
      id: 'legacy_nascar_camry_2015',
      nombre: '[Legacy] NASCAR Xfinity Toyota Camry - 2015',
      tipo: 'owned',
    },
    { id: 'legacy_pro_mazda', nombre: '[Legacy] Pro Mazda', tipo: 'owned' },
    {
      id: 'legacy_riley_mkxx',
      nombre: '[Legacy] Riley MkXX Daytona Prototype - 2008',
      tipo: 'owned',
    },
    {
      id: 'legacy_v8_falcon_2009',
      nombre: '[Legacy] V8 Supercar Ford Falcon - 2009',
      tipo: 'owned',
    },
    {
      id: 'legacy_v8_fg_falcon_2014',
      nombre: '[Legacy] V8 Supercar Ford FG Falcon - 2014',
      tipo: 'owned',
    },
    {
      id: 'legacy_v8_commodore_2014',
      nombre: '[Legacy] V8 Supercar Holden VF Commodore - 2014',
      tipo: 'owned',
    },
  ];

  private circuitos: ItemContenido[] = [
    // --- CIRCUITOS BASE (GRATUITOS) ACTUALIZADOS ---
    { id: 'centripetal', nombre: 'Centripetal Circuit', tipo: 'free' },
    { id: 'charlotte', nombre: 'Charlotte Motor Speedway', tipo: 'free' },
    { id: 'ledenon', nombre: 'Circuit de Lédenon', tipo: 'free' },
    { id: 'navarra', nombre: 'Circuito de Navarra', tipo: 'free' },
    { id: 'concord', nombre: 'Concord Speedway', tipo: 'free' },
    { id: 'daytona_rx', nombre: 'Daytona International Speedway – Rallycross', tipo: 'free' },
    { id: 'langley', nombre: 'Langley Speedway', tipo: 'free' },
    { id: 'lanier', nombre: 'Lanier National Speedway', tipo: 'free' },
    { id: 'lanier_dirt', nombre: 'Lanier National Speedway – Dirt', tipo: 'free' },
    { id: 'limaland', nombre: 'Limaland Motorsports Park', tipo: 'free' },
    { id: 'lime_rock', nombre: 'Lime Rock Park', tipo: 'free' },
    { id: 'oschersleben', nombre: 'Motorsport Arena Oschersleben', tipo: 'free' },
    { id: 'okayama', nombre: 'Okayama International Circuit', tipo: 'free' },
    { id: 'oran_park', nombre: 'Oran Park Raceway', tipo: 'free' },
    { id: 'oulton_park', nombre: 'Oulton Park Circuit', tipo: 'free' },
    { id: 'oxford', nombre: 'Oxford Plains Speedway', tipo: 'free' },
    { id: 'phoenix_2008', nombre: 'Phoenix Raceway – 2008', tipo: 'free' },
    { id: 'rudskogen', nombre: 'Rudskogen Motorsenter', tipo: 'free' },
    { id: 'snetterton', nombre: 'Snetterton Circuit', tipo: 'free' },
    { id: 'south_boston', nombre: 'South Boston Speedway', tipo: 'free' },
    { id: 'southern_national', nombre: 'Southern National Motorsports Park', tipo: 'free' },
    { id: 'summit_point', nombre: 'Summit Point Raceway', tipo: 'free' },
    { id: 'thompson', nombre: 'Thompson Speedway Motorsports Park', tipo: 'free' },
    { id: 'tsukuba', nombre: 'Tsukuba Circuit', tipo: 'free' },
    { id: 'usa_intl', nombre: 'USA International Speedway', tipo: 'free' },
    { id: 'usa_intl_dirt', nombre: 'USA International Speedway – Dirt', tipo: 'free' },
    { id: 'virginia', nombre: 'Virginia International Raceway', tipo: 'free' },
    { id: 'wild_west', nombre: 'Wild West Motorsports Park', tipo: 'free' },
    { id: 'winton', nombre: 'Winton Motor Raceway', tipo: 'free' },

    // --- TUS CIRCUITOS COMPRADOS ---
    { id: 'daytona', nombre: 'Daytona International Speedway', tipo: 'owned' },
    { id: 'spa', nombre: 'Circuit de Spa-Francorchamps', tipo: 'owned' },
    { id: 'mount_panorama', nombre: 'Mount Panorama Circuit', tipo: 'owned' },
    { id: 'sebring', nombre: 'Sebring International Raceway', tipo: 'owned' },
    { id: 'silverstone', nombre: 'Silverstone Circuit', tipo: 'owned' },
    { id: 'legacy_silverstone_2008', nombre: '[Legacy] Silverstone Circuit - 2008', tipo: 'owned' },
    {
      id: 'legacy_michigan_2009',
      nombre: '[Legacy] Michigan International Speedway - 2009',
      tipo: 'owned',
    },
    { id: 'legacy_pocono_2009', nombre: '[Legacy] Pocono Raceway - 2009', tipo: 'owned' },
    { id: 'legacy_texas_2009', nombre: '[Legacy] Texas Motor Speedway - 2009', tipo: 'owned' },
  ];

  constructor() {}

  getPerfil(): PerfilPiloto {
    return this.miPerfil;
  }
  getMisCochesIds(): string[] {
    return this.coches.map((c) => c.nombre);
  }
  getMisCircuitosIds(): string[] {
    return this.circuitos.map((c) => c.nombre);
  }

  // 🧠 BUSCADOR INTELIGENTE: Ignora layouts "- Full Course" o "- Grand Prix"
  getTipoCircuito(nombreCircuitoCalendario: string): 'free' | 'owned' | 'missing' {
    // 1. Buscamos qué circuitos de nuestra lista están incluidos en el nombre del calendario
    const encontrados = this.circuitos.filter((c) =>
      nombreCircuitoCalendario.toLowerCase().includes(c.nombre.toLowerCase()),
    );

    if (encontrados.length === 0) return 'missing';

    // 2. Si encuentra varios (ej: "Daytona" y "Daytona RX"), cogemos el nombre más largo
    // porque será la coincidencia más exacta.
    encontrados.sort((a, b) => b.nombre.length - a.nombre.length);

    return encontrados[0].tipo;
  }

  // 🧠 BUSCADOR INTELIGENTE PARA COCHES
  getTipoCoche(nombreCocheCalendario: string): 'free' | 'owned' | 'missing' {
    const encontrados = this.coches.filter((c) =>
      nombreCocheCalendario.toLowerCase().includes(c.nombre.toLowerCase()),
    );

    if (encontrados.length === 0) return 'missing';

    encontrados.sort((a, b) => b.nombre.length - a.nombre.length);
    return encontrados[0].tipo;
  }
}
