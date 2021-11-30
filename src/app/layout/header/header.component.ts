import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _title: string;

  constructor() {
    this._title = 'Petinder 2.0'
  }

  get title(): string {
    return this._title;
  }

  ngOnInit(): void {
  }

}
