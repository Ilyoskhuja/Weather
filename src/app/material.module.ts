import { MatButtonModule,MatCardModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule

    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule
    ]
})
export class MaterialModule {

}
