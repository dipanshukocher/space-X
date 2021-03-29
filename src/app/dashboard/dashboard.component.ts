import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  spaceXData = [];
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getSpaceXData(params);
    });
  }

  getSpaceXData(payload?): void {
    this.sharedService.getSpaceData(payload).subscribe(res => {
      this.spaceXData = res;
    }, err => {
      this.handleError(err);
    });
  }

  handleError(error: HttpErrorResponse) {
    console.log('Server Error');
    return throwError(error);
  }

}
