import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginSate } from '../../home-listing/store/state/state';
import { logout } from '../../auth/store/login.actions';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent implements OnInit, OnDestroy {
  public dropdownOpen: boolean = false
  public userInitials: string = ''
  public username: string = ''
  public email: string = ''
  private userProfileSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private store: Store<LoginSate>) {}

  ngOnInit(): void {
    this.userProfileSubscription = this.authService.getUserProfile().subscribe((response) => {
      this.username = `${response.first_name} ${response.last_name}`
      this.userInitials = this.getInitials(this.username)
      this.email = response.email
    })
  }

  getInitials(name: string): string {
    const [firstName, lastName] = name.split(' ');
    const initials = firstName.charAt(0).toUpperCase() + (lastName ? lastName.charAt(0).toUpperCase() : '');
    return initials;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen
  }

  logout(): void {
    this.dropdownOpen = false
    this.store.dispatch(logout())
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const header = document.getElementById('header')
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }

  ngOnDestroy(): void {
    if (this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
  }
}