import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from './root/root.component';
import { RouterModule } from "@angular/router";
import routes from "./app.routing";
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateItemComponent } from './components/create-item/create-item.component';


@NgModule({
    declarations: [RootComponent, HomeComponent, SigninComponent, SignupComponent, CreateItemComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    bootstrap: [RootComponent]
})
export class AppModule{}