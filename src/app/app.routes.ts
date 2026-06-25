import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
// (Nota: Si VS Code marca 'Dashboard' en rojo, borra la palabra, vuelve a escribirla y usa el autocompletado para que haga el import correcto).

export const routes: Routes = [
  // Cuando la ruta esté vacía (es decir, al entrar a localhost:4200), carga el Dashboard
  { path: '', component: Dashboard },

  // Estas rutas las prepararemos más adelante:
  // { path: 'garaje', component: GarajeComponent },
  // { path: 'calculadora', component: CalculadoraComponent },
];
