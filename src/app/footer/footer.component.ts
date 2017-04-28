import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  template: '<footer>I am AngularJS2</footer>',
  styleUrls: ['./footer.component.css'] 
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
