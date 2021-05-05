import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MyModuleComponent } from './my-module.component';
@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        TableModule,
        PaginatorModule,
        MatIconModule,
        MatButtonModule,
        ButtonModule,
        BadgeModule
    ],
    declarations: [MyModuleComponent],
    exports: [MyModuleComponent]
})
export class MyModuleModule { }
