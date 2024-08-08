import { Component, OnInit } from '@angular/core';
import { useThemeSwitcher } from '../../composable/themeSwitch';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {
  private storage = useThemeSwitcher('theme', 'light')
  public isDark: boolean = this.storage.value() === 'dark'

  constructor() {}

  ngOnInit(): void {
    this.isDark = this.storage.value() === 'dark'
  }

  themeSwitcher(): void {
    const newTheme: 'dark' | 'light' = this.isDark ? 'light' : 'dark';
    this.storage.value.set(newTheme);
    this.isDark = newTheme === 'dark';
    document.body.setAttribute('data-theme', newTheme);
}
}