import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataListComponent } from './components/data-list/data-list.component';
import { DataFormComponent } from './components/data-form/data-form.component';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContentComponent } from './components/data-list/content/content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SearchToolComponent } from './components/search-tool/search-tool.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ImageModalComponent } from './components/image-modal/image-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    DataFormComponent,
    ContentComponent,
    ConfirmDialogComponent,
    SearchToolComponent,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
