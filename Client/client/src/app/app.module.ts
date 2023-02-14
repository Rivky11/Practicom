import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralService } from './general.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructionsComponent } from './components/instructions/instructions.component';

import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {
      path: 'form',
      component: FormComponent
  },  
  {
      path: 'instructions',
      component: InstructionsComponent
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InstructionsComponent,

  ],
  
  imports: [

    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot(appRoutes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
