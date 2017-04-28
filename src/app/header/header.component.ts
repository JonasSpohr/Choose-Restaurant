import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
	selector: 'app-header-component',
	template: 
`
<nav class="navbar navbar-light bg-faded rounded navbar-toggleable-md">
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
	<a class="navbar-brand" href="#">RestaurantApp</a>

	<div class="collapse navbar-collapse" id="containerNavbar">
	  <ul class="navbar-nav mr-auto">
	    <li class="nav-item active">
	      <a class="nav-link" [routerLink]="['/vote']">Vote <span class="sr-only">(current)</span></a>
	    </li>
	    <li class="nav-item">
	      <a class="nav-link" [routerLink]="['/result']">Result</a>
	    </li>
	  </ul>
	</div>
</nav>
`,
	styleUrls: ['./header.component.css']
	
})

export class HeaderComponent implements OnInit {
	constructor(router: Router) {
	}

	ngOnInit() {
	}

	menuOpen = false;
}
