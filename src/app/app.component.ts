import {Component} from '@angular/core';
import {PollsService} from './services/polls.service';
import {Polls} from './model/polls';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    displayedColumns: string[] = ['title', 'url', 'author', 'created_at']; // Columns for displaying in table
    dataSource: any = [];
    searchedValue: string = '';
    pollIntervalTracker: any; // For tracking polls interval
    interval: number = 10000; // Value should be in second

    // Initializes poll service
    constructor(private pollsService: PollsService) {
    }

    // Calls on init
    ngOnInit() {
        this.getPolls();
        this.refreshPolls();
    }

    // Function for getting latest polls on defined interval
    refreshPolls() {
        this.pollIntervalTracker = setInterval(() => {
            this.getPolls();
        }, this.interval);
    }

    // Function to get polls data
    getPolls() {
        this.pollsService.fetchPolls().subscribe(response => {
                this.dataSource = new MatTableDataSource(response.hits);
                this.applyFilterPredicate();
                this.applyFilter(this.searchedValue);

            },
            error => {
                console.log('Error occured while fetching polls data');
            });
    }

    // Function for filtering data in the table
    applyFilter(filterValue: string) {
        this.searchedValue = filterValue.trim().toLowerCase(); // For storing searched value
        this.dataSource.filter = this.searchedValue;
    }

    // Function for filtering data based on title
    applyFilterPredicate() {
        this.dataSource.filterPredicate = function (data, filter: string): boolean {
            return data.title.toLowerCase().includes(filter);
        };
    }

    // Used for destroying resource
    ngOnDestroy() {
        if (this.pollIntervalTracker) {
            clearInterval(this.pollIntervalTracker);
        }
    }
}
