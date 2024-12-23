import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: ` 
  <div class="wrapper"> 
    <header class="banner"> 
      <nav class="navbar"> 
        <ul> 
          <li><a routerLink="/projects">Projects</a></li> 
          <li><a routerLink="/resume">Resume</a></li> 
          <li><a routerLink="/about">About</a></li>  
          <li><a routerLink="/">Home</a></li>
        </ul> 
      </nav> 
    </header> 
  
    <main class="main-content"> 
      <section class="content"> 
        <router-outlet /> 
      </section> 
    </main> 
  
    <footer class="footer"> 
      <nav class="footer-nav"> 
        <a routerLink="/">Home</a> | 
        <a routerLink="/about">About</a> | 
        <a routerLink="/resume">Resume</a> | 
        <a routerLink="/projects">Projects</a> 
      </nav> 
  
      <p>&copy; Created by Angelica Gutierrez</p> 
    </footer> 
  </div>`  ,
  styles: '.'
})
export class AppComponent {
  title = 'portfolio';
}