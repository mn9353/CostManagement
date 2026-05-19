import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvoiceUploadComponent } from './components/invoice-upload/invoice-upload.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'invoice-upload', component: InvoiceUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
