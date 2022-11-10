import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  constructor() {}

  ngOnInit(): void {}

  public getFooterClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'footer-trimed';
    } else {
      styleClass = 'footer-md-screen';
    }
    return styleClass;
  }
}
