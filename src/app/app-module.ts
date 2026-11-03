import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServicePostFiles } from './services/service.post.files';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './components/menu-component/menu-component';
import { ApiFilesComponent } from './components/api-files-component/api-files-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';

@NgModule({
  declarations: [App, MenuComponent, ApiFilesComponent, InformesPdfComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), ServicePostFiles, provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
