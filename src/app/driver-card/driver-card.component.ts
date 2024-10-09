import {Component} from '@angular/core';
import {FormulaOneService} from "../formula-one.service";

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
  providers: [FormulaOneService]
})
export class DriverCardComponent {
  activeDriver: {} = {};
  isOpened: boolean = false;

  constructor(protected formulaOneService: FormulaOneService) {}

  selectDriver(currentDriver: object) {
    this.activeDriver = currentDriver;
    this.isOpened = !this.isOpened;

    if (this.isOpened) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleDetailView(value: boolean): void {
    this.isOpened = value;
  }
}
