import { Component } from '@angular/core';

@Component({
    template: `
        <div class="error-template">
            <h1>
                Oops!</h1>
            <h2>
                404 Not Found</h2>
            <div class="error-details">
                Sorry, an error has occured, Requested page not found!
            </div>
            <div class="error-actions">
                
            </div>
        </div>
    `
})
export class PageNotFoundComponent { }
