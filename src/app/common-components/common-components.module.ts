import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {SublevelMenuComponent} from "./sidenav/sublevel-menu.component";

const components = [SidenavComponent, SublevelMenuComponent]

@NgModule({
  declarations: [...components, ], imports: [CommonModule, RouterLinkActive, RouterLinkWithHref], exports: [...components]
})
export class CommonComponentsModule {
}
