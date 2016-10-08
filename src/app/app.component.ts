import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppService } from './app.service';
import { Store } from './store';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
    <h1>
      {{title}}  
    </h1>
    <h2>{{counter | async}}</h2>
    <h3>{{timestamp | async}}</h3>
    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="timeUpdate()">TimeUpdate</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Increment app';

  constructor(
    private service: AppService,
    private store: Store,
  ) { }


  increment(): void { this.service.increment(); }

  decrement(): void { this.service.decrement(); }

  timeUpdate(): void { this.service.timeUpdate(); }


  get counter() { return this.store.getState().map(s => s.counter); }
  get timestamp() { return this.store.getState().map(s => s.timestamp); }

}
