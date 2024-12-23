import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
 <div class="about-container ">
  <div class="text">
    <h2>WHO AM I?</h2>
    <h4>Growing up in San Bernardino, I have always been finding ways to learn and grow.
      Being the youngest of three, I have always looked to others for inspiration and followed in their footsteps. 
      That was until I tried out web development for the first time during my first degree. 
      With zero experience, I watched YouTube tutorials, read online articles, and researched everything I could. 
      I coded from sunrise to sundown.
      It was something I enjoyed learning and hope to continue creating projects. </h4>
      <BR>
      <h4>During my freetime, I love being part of the music scene. 
      Whether it is going out to a show, listening to albums in my room, or working at a local venue,
      I love music with a passion and am always looking out for new bands to support.</h4>
  </div>

  <div class="image ">
    <img src="../images/picofme2.jpeg" alt="picture of me" width="460" height="345">
  </div>
</div>


  `,
  styles: `
  .about-container {
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
export class AboutComponent {

}
