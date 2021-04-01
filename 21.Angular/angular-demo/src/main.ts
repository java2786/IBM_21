import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

// import AppModule from "./app/app.module";
// import AppModule from "./01_databinging/app.module";
// import AppModule from "./02_databinging/app.module";
// import {AppModule} from "./03_databinding/app.module"
// import AppModule from "./doubts/app.module"
// import {AppModule} from "./04_parent-child/app.module";
// import {AppModule} from "./05_directives/app.module";
// import AppModule from './practice_01/app.module';
// import { AppModule } from './06_badges/app.module';
import { AppModule } from './07_directives/app.module';




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
