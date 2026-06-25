import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <--- ¡Cambio aquí!

bootstrapApplication(AppComponent, appConfig) // <--- ¡Y cambio aquí!
  .catch((err) => console.error(err));
