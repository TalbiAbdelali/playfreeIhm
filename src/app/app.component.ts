import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayFreeComponent } from './play-free/play-free.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }

}
