import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { JokeGeneratorComponent } from './app/joke-generator/joke-generator/joke-generator.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(JokeGeneratorComponent)
  .catch(err => console.error(err));