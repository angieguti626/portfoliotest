import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <h1>ANGELICA GUTIERREZ</h1>
    <h5>San Bernardino, CA | 909.567.6850</h5>
    <h5>angieguti626&#64;gmail.com</h5>
    
    <div>
    <h4>EDUCATION</h4>
    <p>Bellevue University | Bachelor of Science, Web Development Program </p>                                               
    <p>California State University, San Bernardino | Bachelor of Arts, Computer Systems – Graphics Programming </p>
    
    <h4>EXPERIENCE</h4>
    <p>Disneyland Resort, Anaheim, CA | August 2023 - Present</p>
    <p>Attractions & Operations</p>
    <li>Focus on safety of guests while creating magical experiences</li>
    <li>Engage with guests from around the world</li>
    <li>Assist with guest concerns and accommodate as needed</li>
    <li>Load and unload attractions while operating ride systems</li>
    <li>Delivering narratives and communications of varying lengths in front of large audiences</li>
    <li>Work in various weather conditions</li>
    <li>Constant walking, standing, and repetitive motions</li>

    <p>Live Nation Entertainment, Inland Empire, CA | July 2023 - Present</p>
    <p>Guest Services</p>
    <li>Usher/Ticket taker for multiple venues across the Inland Empire</li>
    <li>Create memorable memories for fans by providing assistance to guests that need accommodation</li>
    <li>Guide guests to seats, directions to locations, and more</li>
    <li>Monitor crowd behavior and immediately bring attention to any help as needed</li>
    <li>Participate in show set up and post-show clean up</li>
    <li>Assist with guest concerns </li>
    <li>Work indoors at Riverside venues and outdoors at San Bernardino venue</li>

    <p>Disney College Program, Lake Buena Vista, FL | June 2022 – January 2023</p>
    <p>Food & Beverage</p>
    <li>Worked in three out of four Walt Disney World Resort Parks</li>
    <li>Stocked and restock ice backs coolers as needed with drinks</li>
    <li>Cooked food based on demand</li>
    <li>Worked a register that handles both money and cards</li>
    <li>Handled food cautiously and safely</li>
    <li>Worked with mobile order and walk up orders</li>

    <p>California State University, San Bernardino | September 2020 – June 2022</p>
    <p>Graphic Designer / Software Engineer (Remote)</p>
    <li>Used Visual Studio Code to create and debug code</li>
    <li>Worked with Microsoft Office Suite and Google Suite</li>
    <li>Constructed interactive prototypes using Adobe XD</li>
    <li>Formed website pages using HTML and CSS</li>
    <li>Created relationships to collaborate virtually and make decisions</li>

    <h4>AWARDS & SCHOLARSHIPS</h4>
    <p>Disney Aspire Program, The Walt Disney Company, Burbank, CA | January 2024-March 2025</p>
    <p>Disney Scholars Scholarship, The Walt Disney Company Foundation, Burbank, CA | July 2018-June 2022</p>
    <p>Gold Level Presidential Volunteer Service Award, San Bernardino, CA | June 2019, June 2020</p>

    <br><br>
    <a href="../document/Angelica_Gutierrez_Resume.pdf" class="button">Click here to download my resume!</a>
    </div>
    
  `,
  styles: `
  h1,h5{
  text-align: center;
  }
  
  div{
  padding:20px;
  margin-left:50px;
  }

  p{
  margin-left:50px;
  }
  
  li{
  margin-left:100px;
  }
  
  .button{
   background-color: #ee776d;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  }
  `
})
export class ResumeComponent {

}
