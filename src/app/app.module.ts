import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { MyModuleModule } from './pages/my-module/my-module.module';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TypographyComponent } from './pages/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MyModuleModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
