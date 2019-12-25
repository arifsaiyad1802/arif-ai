import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PollsAllData} from '../model/polls-all-data';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PollsService {

    // Initializes http method for getting data through api call
    constructor(private http: HttpClient) {
    }

    // Function to fetch poll data through api call
    fetchPolls(): Observable<PollsAllData> {
        return this.http.get<PollsAllData>(environment.apiBaseUrl + 'search_by_date?tags=story');
    }
}
