import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  filterYears: number[] = [];
  startingYear = 2006;
  currentYear = (new Date()).getFullYear();
  routeParams; 
  selectedYear: number; selectedLaunch: boolean; selectedLand: boolean;
  filterTrueFalse: IFilterTF[] = [{name: 'True', value: true}, {name: 'False', value: false}];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.routeParams = params;
    });
    for (let i = this.startingYear; i <= this.currentYear; i++) {
      this.filterYears.push(i);
    } 
  }

  selectedfilter(e, type): void {
    const payload = {
      launch_success: this.routeParams.launch_success ? this.routeParams.launch_success : null,
      land_success: this.routeParams.land_success ? this.routeParams.land_success : null,
      launch_year: this.routeParams.launch_year ? this.routeParams.launch_year : null,
    };
    payload[type] = e;
    this.router.navigate(['/dashboard'], { queryParams: {
      launch_success: payload.launch_success,
      land_success: payload.land_success,
      launch_year: payload.launch_year
    } });
  }

  selectedYr(e): void {
    this.selectedYear = e;
  }

  selectedLaunchSuccess(e): void {
    this.selectedLaunch = e;
  }

  selectedLandSuccess(e): void {
    this.selectedLand = e;
  }

}

export interface IFilterTF {
  name: string;
  value: boolean;
}
