import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { ROUTERPATH } from '@models/enums/router-path.enum';
import { LoginService } from '@services/loginService/login-service.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        loadChildren: () =>
            import('../section1/section1.module').then((m) => m.Section1Module),

    },
    {
        path: ROUTERPATH.SECTION1,
        component: HomeComponent,
        loadChildren: () =>
            import('../section1/section1.module').then((m) => m.Section1Module),

    },
    {
        path: ROUTERPATH.SECTION2,
        component: HomeComponent,
        loadChildren: () =>
            import('../section2/section2.module').then((m) => m.Section2Module),

    },
    {
        path: ROUTERPATH.SECTION3,
        component: HomeComponent,
        loadChildren: () =>
            import('../section3/section3.module').then((m) => m.Section3Module),

    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
