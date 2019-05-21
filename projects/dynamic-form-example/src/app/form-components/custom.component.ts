import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
    selector: 'app-custom-component',
    template: `
        <div>
            I'm a custom component
        </div>
    `,
})
export class CustomFieldComponent extends BaseFieldComponent implements OnInit {
    ngOnInit() {
    }
}
