import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditComponent } from './edit/edit.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListDelegatedAdminComponent } from './list-delegated-admin/list-delegated-admin.component';
import { ListStructuresComponent } from './list-structures/list-structures.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { EmployeeSideBarComponent } from './employee-side-bar/employee-side-bar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    EditComponent,
    ListEmployeesComponent,
    DashboardComponent,
    ListDelegatedAdminComponent,
    ListStructuresComponent,
    ListGroupsComponent,
    EmployeeSideBarComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
