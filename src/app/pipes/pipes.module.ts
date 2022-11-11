import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarClassPipe} from "./sidebar-class.pipe";

const pipes = [SidebarClassPipe]

@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule
  ],
  exports: [...pipes]
})
export class PipesModule { }
