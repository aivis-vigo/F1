import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormulaOneService} from "../formula-one.service";

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss'],
  providers: [FormulaOneService]
})
export class DriverDetailsComponent implements OnInit {
  @Input() driver: any = {};
  @Input() isOpened: boolean = false;
  @Output() closeDriver: EventEmitter<boolean> = new EventEmitter();

  constructor(protected formulaOneService: FormulaOneService) {}

  ngOnInit() {
    this.formulaOneService.fetchCarSpecs();
  }

  toggleDetailView(value: boolean) {
    this.closeDriver.emit(!value);
  }
}
