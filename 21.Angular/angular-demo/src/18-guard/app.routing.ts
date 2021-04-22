import { Routes } from "@angular/router";
import { CreateItemComponent } from "./components/create-item/create-item.component";
import { HomeComponent } from "./components/home/home.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AdminSellerPageGuard } from "./guards/admin.guard";
import { LoginPageGuard } from "./guards/login-page.guard";

const routes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'create', component: CreateItemComponent, canActivate: [AdminSellerPageGuard]},
    {path: 'signin', component: SigninComponent, canActivate: [LoginPageGuard]},
    {path: 'signup', component: SignupComponent, canActivate: [LoginPageGuard]},
    

    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export default routes;