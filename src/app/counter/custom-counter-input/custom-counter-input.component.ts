import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeText, customDecrement, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName$!: Observable<string>
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
   this.channelName$ =  this.store.select(getChannelName)
   console.log('channel Observable Called');
   console.log('this', this.channelName$);
   
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value })); //+ to mention that's a number
  }

  onDecrement() {
    this.store.dispatch(customDecrement({ count: +this.value }));
  }

  onCHangeText() {
    this.store.dispatch(changeText())
  }
}
