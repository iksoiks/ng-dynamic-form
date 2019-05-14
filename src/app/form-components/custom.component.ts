import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-custom-component',
    template: `
        <div>
            I'm a custom component
        </div>
    `,
})
export class CustomFieldComponent implements OnInit {

    @Input() field;
    @Input() group;

    constructor() {
    }

    ngOnInit() {
    }
}
