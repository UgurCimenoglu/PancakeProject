import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { NgZorroAntdModule } from './antd.module';
import { ModalComponent } from './components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { modalReducer } from './store/reducers/ModalReducer';
import { productReducer } from './store/reducers/ProductReducer';
import { ImageComponent } from './components/image/image.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, TableComponent, ModalComponent, ImageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    StoreModule.forRoot({ modal: modalReducer, product: productReducer }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: 'baseUrl', useValue: 'https://dummyjson.com', multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
