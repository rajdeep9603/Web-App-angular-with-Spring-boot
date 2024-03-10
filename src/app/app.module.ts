import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // for add a route
    AppRoutingModule,
    // RouterModule.forRoot([]),
    HttpClientModule,
    CommonModule
    
  ],
  providers: [
    provideHttpClient(withFetch()),
    // provideRouter(routes),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
