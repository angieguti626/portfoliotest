import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class =home-container>
    <div class=text>
      <h3>WELCOME!</h3>
      <h1>I AM ANGELICA GUTIERREZ.</h1>
      <h4>A developer, designer, and student. 
      <br>
      I have been coding and creating projects for 6 years. Here you will find everything and anything there is to know about me and my experience.  </h4>
    </div>

    <div class=image>
      <img src="../images/picofme.JPG" alt="picture of me" width="460" height="345">
    </div>
  </div>
  `,
  styles: ` 
  .home-container {
   display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
}
  .text {
    flex: 1;
    margin-right: 20px;
    height: 100%;
    width: 50%;
    padding-top: 20px;
    right:0;
    margin-top: %;
    margin-left: 3%;
}

.image img {
    max-width: 100%;
    height: auto;
    border-radius:25px;
}
  `
})
export class HomeComponent {

}
