import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { MyModuleComponent } from './pages/my-module/my-module.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TypographyComponent } from './pages/typography/typography.component';

const routes: Routes = [
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'my-module', component: MyModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
