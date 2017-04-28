import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-vote',
	templateUrl: './vote.component.html',
	styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		
	}

	places = [{ _id : 1, name : 'Prédio 50'}, { _id : 2, name : 'Prédio 32'}]; 
}
