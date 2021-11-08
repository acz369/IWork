import { Component } from '@angular/core';
import clients from '../files/clients.json';

interface Client {
  personId: string;
  name: string;
  lastName: string;
  currentRole: string;
  country: string;
  industry: string;
  numberOfRecommendations: string;
  numberOfConnections: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  occurrences: any = {};
  avOccurrences: any = {};
  allClients = clients;
  countrys: string[] = clients.map((client: Client) => client.country);
  totalClients: any = this.countrys.length;

  averageCountry() {
    this.occurrences = this.countrys.reduce((acc: any, curr: any) => {
      //Ternary operator
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    this.avOccurrences = Object.keys(this.occurrences).forEach(key => {         
      this.occurrences[key] = this.occurrences[key] / this.totalClients
      return this.occurrences[key];
    }, {});  
    return this.occurrences;
  }
}
