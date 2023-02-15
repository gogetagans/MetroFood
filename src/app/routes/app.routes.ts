import { Route } from "@angular/router";
import { HomeComponent } from "@components/home/home.component";
import { LoginComponent } from "@components/login/login.component";
import { ROUTERPATH } from "@models/enums/router-path.enum";

export const APP_ROUTES: Route[] = [
    { path: ROUTERPATH.LOGIN, component: LoginComponent },
    { path: ROUTERPATH.HOME, component: HomeComponent },
    { path: '', component: HomeComponent },
];