import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches?limit=12';
  constructor(private http: HttpClient) { }

  getSpaceData(payload?): Observable<ISpaceXData[]> {
    const launchSuccess = payload && payload.hasOwnProperty('launch_success') ? `&launch_success=${payload.launch_success}` : '';
    const landSuccess = payload && payload.hasOwnProperty('land_success') ? `&land_success=${payload.land_success}` : '';
    const launchYear = payload && payload.hasOwnProperty('launch_year') ? `&launch_year=${payload.launch_year}` : '';
    return this.http.get<ISpaceXData[]>(`${this.apiUrl}${launchSuccess}${landSuccess}${launchYear}`);
  } 
}

export interface ISpaceXData {
  crew: null;
  details: string;
  flight_number: number;
  is_tentative: boolean; 
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_failure_details: object;
  launch_site: object;
  launch_success: boolean;
  launch_window: number;
  launch_year: string;
  links: object;
  mission_id: [];
  mission_name: string;
  rocket: object;
  fairings: object;
  first_stage: object;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  second_stage: object;
  ships: [];
  static_fire_date_unix: number;
  static_fire_date_utc: string;
  tbd: boolean;
  telemetry: object;
  tentative_max_precision: string;
  timeline: object;
  upcoming: boolean;
}
