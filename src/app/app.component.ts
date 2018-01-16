import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
import 'rxjs/add/observable/timer';
import { startWith } from "rxjs/operators/startWith";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'X-Team';

  constructor(private dialog: MatDialog) {

  }
  
}
