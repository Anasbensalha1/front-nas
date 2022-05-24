import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditComponent } from './edit/edit.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { ListStructuresComponent } from './list-structures/list-structures.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { ListDelegatedAdminComponent } from './list-delegated-admin/list-delegated-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path :'login' , component : LoginComponent},
  {path :'sidebar' , component : SidebarComponent},
  {path :'edit' , component : EditComponent},
  {path :'listemp' , component : ListEmployeesComponent},
  {path :'liststructures' , component : ListStructuresComponent},
  {path :'listgroups' , component : ListGroupsComponent},
  {path :'listadmin' , component : ListDelegatedAdminComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path :'addemployee' , component : AddEmployeeComponent},
  {path :'' , redirectTo : 'login' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
