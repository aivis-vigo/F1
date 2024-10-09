import { Component } from '@angular/core';
import {FormulaOneService} from "../formula-one.service";

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
  providers: [FormulaOneService]
})
export class TrackCardComponent {

  constructor(protected formulaOneService: FormulaOneService) {}

}
