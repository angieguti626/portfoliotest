import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    
  <div>
      <h1>MY WORK</h1>
      <p> WEB DEV PROGRAM </p>
      <ul class="projects-container">
          
      <li class="projects-item">
        <div class="card">
          <h3>BIOSITE</h3>
          <p>This project focused on building a simple website for someone in our personal life.
            I used Visual Studio Code to create a website consistencing of HTML and CSS being able to link
            pages together. I focused on webports and added a interactive transition when you hover over 
            photos. Also, using HTML and CSS validity tools, I was able to test my code making sure everything worked. 
          </p>
        </div>
      </li>
          
      <li class="projects-item">
        <div class="card">
          <h3>RPG CHARACTER BUILDER</h3>
          <p>This project focused on creating a single page application using Angular. 
            Using Angular routes and components, I was able to create a single page application.
            I was able to test my application as well to ensure there were no errors in building the site. I was able to use 
            test cases in order to make sure of possible scenarios. 
          </p>
        </div>
      </li>
  
      <li class="projects-item">
        <div class="card">
          <h3>IN-N-OUT BOOKS</h3>
          <p>This project focused on creating a landing page. All the other work was using test cases. We 
            worked with HTTP requests such as GET, DELETE, etc in order to prove our code was working. For example,
            I created a login system, but not the physicality of it moreso the knowledge with tokens and keys. I was
            able to then translate that into a server to go live.
          </p>
        </div>
      </li>
      
      </ul>

      <p> OTHER PROJECTS </p>
      <ul class="projects-container">
          
      <li class="projects-item">
        <div class="card">
          <h3>HONORSBOOK</h3>
          <p>This project focused on building a website for a Univeristy's Honor Program. This was the first ever time I coded
          and I was able to create mulitple pages with different functions. I was able to create a carousel of images for the home 
          page and work with a team to create a login system. Starting out from a team member, I then later became the team lead.
          </p>
        </div>
      </li>
          
      <li class="projects-item">
        <div class="card">
          <h3>PONG GAME</h3>
          <p>This project was one of the many video game projects I created. It is a simple game of Pong that 2 people, 
          or 1, can play on a computer. This was the first Unity project I created. It focused heavily on C coding as 
          well as building the interface. 
          </p>
        </div>
      </li>
  
      <li class="projects-item">
        <div class="card">
          <h3>ROSE CAFE</h3>
          <p>This project was a full cycle of designing a website from scratch. From building a moodboard, to selecting
          colors, to creating a sitemap. This project is one of my favorite projects. We even created mockups how a home
          page would look on different devices! This project is my all-time favorite. 
          </p>
        </div>
      </li>
      
      </ul>

`
  ,
  styles: `
   .projects-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    .img {
      display:flex;
    }

    .projects-item {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card {
      padding: 20px;
      background-color:rgb(255, 199, 195);
      border-radius: 50px;
    }
  `
})
export class ProjectsComponent {

}
