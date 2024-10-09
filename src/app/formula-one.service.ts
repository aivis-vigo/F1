import {Injectable} from '@angular/core';
import {Driver} from "./driver";

@Injectable({
  providedIn: 'root'
})
export class FormulaOneService {
  url: string = 'https://api.openf1.org/v1/';
  drivers: Driver[] = [];
  tracks: Set<any> = new Set();
  driversCar: any = {};

  constructor() {
    this.fetchDrivers();
    this.fetchTracks();
  }

  async fetchDrivers(): Promise<void> {
    await fetch(`${this.url}/drivers?session_key=7763`)
      .then(response => response.json())
      .then(jsonContent => this.drivers = jsonContent);
  }

  async fetchTracks(): Promise<void> {
    await fetch(`${this.url}sessions`)
      .then(response => response.json())
      .then(jsonContent => this.tracks = jsonContent.filter((track: any) => this.removeDuplicate(track)));
  }

  async fetchCarSpecs(): Promise<void> {
    await fetch(`${this.url}/car_data?driver_number=55&session_key=9159&speed%3E=315`)
      .then(response => response.json())
      .then(jsonContent => this.driversCar = jsonContent[0]);
  }

  removeDuplicate(track: any) {
    if (this.tracks.has(track.circuit_key)) {
      return false;
    }
    this.tracks.add(track.circuit_key);
    return true;
  }

  getDrivers(): Driver[] {
    return this.drivers;
  }

  getTracks(): any[] {
    return [...this.tracks];
  }

  getCarSpecs(): any {
    return this.driversCar;
  }
}
