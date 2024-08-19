import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgToastModule } from 'ng-angular-popup';
import { selectLoginFeature } from './auth/store/login.selectors';
import { getStoreData } from './app-store/app.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private store = inject(Store);
  private state = this.store.selectSignal(selectLoginFeature);

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(): void {
    localStorage.setItem('authState', JSON.stringify(this.state()));
  } 
  
  ngOnInit(): void {
    const retrievedState = localStorage.getItem('authState');
    if (retrievedState) {
      const auth = JSON.parse(retrievedState)
      this.store.dispatch(getStoreData(auth));
    }
    localStorage.removeItem('authState')
  }
}