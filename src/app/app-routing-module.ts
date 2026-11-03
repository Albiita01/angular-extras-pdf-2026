import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  { path: "", component: ApiFilesComponent },
  { path: "informes", component: InformesPdfComponent },
  { path: "error", component: ErrorComponent },
  { path: "equipos", component: EquipoComponent },
  { path: "login", component: LoginComponent },
  { path: "subordinados", component: SubordinadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
