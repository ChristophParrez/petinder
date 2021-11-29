import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private _petService: PetService;
  private _pets: Pet[];
  private _selectedPet!: Pet;

  constructor(petService: PetService) {
    this._petService = petService;
    this._pets = [];
    // this._selectedPet = Object();
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this._petService.getPets().subscribe(pets => this._pets = pets);
  }

  selectPet(pet: Pet): void {
    console.log('Selecting pet', pet);
    this._selectedPet = pet;
  }

  get pets(): Pet[] {
    return this._pets;
  }

  get selectedPet(): Pet {
    return this._selectedPet;
  }
}
