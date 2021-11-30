import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Pet } from "../../model/Pet";
import { PetService } from "../../service/pet.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  name: string;
  pet: Pet | any;

  public sendTextForm = this.formBuilder.group({
    name: ''
  });

  constructor(private petService: PetService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.name = '';
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.petService.getPetByName(this.name).subscribe(response => this.pet = response);
  }

  onSubmit(): void {
    this.petService.sendText(this.sendTextForm.value.name, this.pet).subscribe();
    this.sendTextForm.reset();
  }

  showDefaultImage(event: any): void {
    event.target.src = './assets/images/image-not-found-small.png';
  }

  test(): void {
    console.log(this.pet);
  }

}
