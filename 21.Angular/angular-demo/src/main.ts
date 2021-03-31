import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import AppModule from "./app/app.module";
// import AppModule from "./01_databinging/app.module";
// import AppModule from "./02_databinging/app.module";
// import {AppModule} from "./03_databinding/app.module"
// import AppModule from "./doubts/app.module"
import {AppModule} from "./04_parent-child/app.module";



import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
