import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidebarClass'
})
export class SidebarClassPipe implements PipeTransform {
  transform(isSideNavCollapsed: boolean, screenWidth: number): string {
    let styleClass = '';
    if(isSideNavCollapsed && screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(isSideNavCollapsed && screenWidth <= 768 && screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
