import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-poll-detail',
    templateUrl: './poll-detail.component.html',
    styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent {

    constructor(
        public dialogRef: MatDialogRef<PollDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    // Close the dialog
    closeDialog(): void {
        this.dialogRef.close();
    }

}
