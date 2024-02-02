import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentNavbarHeaderComponent } from './current-navbar-header.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [CurrentNavbarHeaderComponent],
  exports: [CurrentNavbarHeaderComponent],
})
export class CurrentNavbarHeaderModule {}
