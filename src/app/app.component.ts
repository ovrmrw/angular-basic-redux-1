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
  title = 'app works!';

  constructor(
    private service: AppService,
    private store: Store,
  ) { }


  increment(): void {
    this.service.increment();
  }


  get state(): Observable<any> {
    return this.store.getState();
  }

}
