import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppService } from './app.service';
import { Store } from './store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Increment app';

  constructor(
    private service: AppService,
    private store: Store,
  ) { }


  increment(): void {
    this.service.increment();
  }


  get counter(): Observable<any> {
    return this.store.getState().map(s => s.counter);
  }

}
