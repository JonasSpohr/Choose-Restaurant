import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
	selector: 'app-root',
 	moduleId: module.id,
	template:
	`
		<div class="container">
	 	<app-header-component></app-header-component>
	    <router-outlet></router-outlet>
	    <footer></footer>
	    </div>
	`,
	styleUrls: ['./app.component.css']
})

export class AppComponent { 
}
