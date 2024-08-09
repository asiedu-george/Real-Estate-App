import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { jwtDecode } from 'jwt-decode';
import { UserDetails } from '../../interface/user-profile';
import { LoginResponse } from '../../interface/login';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent implements OnInit {
  public dropdownOpen: boolean = false
  public userInitials: string = ''
  public username: string = ''
  public email: string = ''

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

  }

  getInitials(name: string): string {
    const [first_name, last_name] = name.split(' ')
    const initials = first_name.charAt(0).toUpperCase() + (last_name ? last_name.charAt(0).toUpperCase() : '')
    return initials
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen
  }

  accountSettings(): void {
    this.dropdownOpen = false
  }

  logout(): void {
    this.dropdownOpen = false
    this.authService.logout()
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
}