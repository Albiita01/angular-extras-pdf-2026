import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServicePostFiles } from './services/service.post.files';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MenuComponent } from './components/menu-component/menu-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './services/service.equipos';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleados } from './services/service.empleados';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    ApiFilesComponent,
    InformesPdfComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideToastService(),
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    // El antiguo de errores
    // provideHttpClient(withInterceptors([errorInterceptor])),
    ServicePostFiles,
    ServiceEquipos,
    ServiceEmpleados
  ],
  bootstrap: [App],
})
export class AppModule { }
