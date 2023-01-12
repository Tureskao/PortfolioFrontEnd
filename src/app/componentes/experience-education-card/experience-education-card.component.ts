import { Component, OnInit } from '@angular/core';
import {Education} from './EducationItem';

@Component({
  selector: 'app-experience-education-card',
  templateUrl: './experience-education-card.component.html',
  styleUrls: ['./experience-education-card.component.css']
})
export class ExperienceEducationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n1: Education = new Education("../../../assets/img/Normal 1.jpg",
  'Escuela Normal Superior N°1 - Prov. N°34 - "Dr. Nicolás Avellaneda"',"Bachiller en Ciencias Naturales");

  n2: Education = new Education("../../../assets/img/Normal 1.jpg",
  'Escuela Normal Superior N°1 - Prov. N°34 - "Dr. Nicolás Avellaneda"',"Bachiller en Ciencias Naturales");

  ListaEducacion = [this.n1, this.n2];
  

}
