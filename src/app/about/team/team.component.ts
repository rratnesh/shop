import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  team = [];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      debugger;
      this.team = data['team'];
    })
  }

}
