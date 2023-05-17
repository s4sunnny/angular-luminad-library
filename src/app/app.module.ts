//others
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//forms
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Angular material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

//Pages or Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogonOrRegisComponent } from './authPage/logon-or-regis/logon-or-regis.component';
import { DashboardComponent } from './common-pages/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardForAdminComponent } from './common-pages/dashboard-for-admin/dashboard-for-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LogonOrRegisComponent,
    DashboardComponent,
    DashboardForAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Injectable()
export class AppModule {

}
