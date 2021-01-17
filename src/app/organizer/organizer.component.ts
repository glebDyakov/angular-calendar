import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup  } from '@angular/forms';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  form: FormGroup
  
  constructor(public dateService: DateService) { 
    this.dateService = dateService
  }

  
}
