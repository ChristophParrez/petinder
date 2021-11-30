import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute) {
    this.name = '';
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')!;
    console.log('setup date for ' + this.name);
  }

}
