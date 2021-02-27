import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { PersonalRoutingModule } from "./personal-routing.module";
import { PersonalComponent } from './personal.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';

@NgModule({
    declarations: [
        PersonalComponent,
        PetsListComponent,
        PetCardComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        PersonalRoutingModule
    ],
    exports: [
        PersonalComponent
    ]
})
export class PersonalModule { }