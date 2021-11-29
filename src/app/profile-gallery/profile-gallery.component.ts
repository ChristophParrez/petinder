import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private petService: PetService;
  private _pets: Pet[];

  constructor(petService: PetService) {
    this.petService = petService;
    this._pets = [];
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this._pets = pets);
  }

  get pets(): Pet[] {
    return this._pets;
  }
}
