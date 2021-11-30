import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Pet } from "../../model/Pet";
import { PetService } from "../../service/pet.service";
import { FormBuilder } from "@angular/forms";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  pet: Pet | any;
  environment = environment;

  public sendTextForm = this.formBuilder.group({
    name: ''
  });

  constructor(private petService: PetService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.petService.getPetByName(this.route.snapshot.paramMap.get('name')!).subscribe(response => this.pet = response);
  }

  onSubmit(): void {
    if (!this.sendTextForm.value.name || this.sendTextForm.value.name.trim() === '') return;
    this.petService.sendText(this.sendTextForm.value.name, this.pet).subscribe(() => this.ngOnInit());
    this.sendTextForm.reset();
  }

  showDefaultImage(event: any): void {
    event.target.src = './assets/images/image-not-found-small.png';
  }

  test(): void {
    console.log(this.pet);
  }

}
