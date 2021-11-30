import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {FormBuilder} from '@angular/forms';
import {Kind} from '../model/Kind';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private _pets: Pet[];
  private _selectedPet: Pet | null;
  public searchText: string;
  public KindEnum = Kind;

  public addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
    this._pets = [];
    this._selectedPet = null;
    this.searchText = '';
  }

  onSubmit(): void {
    this.petService.addPet(this.addPetForm.value).subscribe(() => this.getPets());
    this.addPetForm.reset();
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this._pets = pets);
  }

  selectPet(pet: Pet): void {
    if (this._selectedPet == pet) this._selectedPet = null;
    else this._selectedPet = pet;
  }

  showDefaultImage(event: any): void {
    event.target.src = './assets/images/image-not-found.png';
  }

  get pets(): Pet[] {
    return this._pets;
  }

  get selectedPet(): Pet | null {
    return this._selectedPet;
  }
}
