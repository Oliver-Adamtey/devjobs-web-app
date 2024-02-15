// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { FilterBarComponent } from './filter-bar/filter-bar.component'; 
// import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component'; 
// import { HeaderContentComponent } from './header-content/header-content.component';
// import { ThemeService } from './theme.service';
// import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';
// import { JobService } from './job.service';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, DevjobsCardComponent,
//     FilterBarComponent, HeaderContentComponent, LoadMoreBtnComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })


// export class AppComponent implements OnInit {

//   jobs: Jobs[] = [];

//   constructor(private jobService: JobService) {}

//   ngOnInit() {
//     this.jobService.getJobs().subscribe(
//       (data) => {
//         this.jobs = data;
//       },
//       (error) => {
//         console.error('Error fetching jobs:', error);
//       }
//     );
//   }



//   title(title: any) {
//     throw new Error('Method not implemented.');
//   }
//   isDarkMode: boolean = false;

//   constructor(private themeService: ThemeService) {}

//   ngOnInit() {
//     this.themeService.isDarkMode$.subscribe((isDarkMode) => {
//       this.isDarkMode = isDarkMode;
//       this.updateTheme();
//     });
//   }

//   updateTheme() {
//     const body = document.body;
//     body.style.backgroundColor = this.isDarkMode ? '#121721' : '#F2F2F2';
//     body.style.color = this.isDarkMode ? 'white' : 'black';

//     const filterBar = document.querySelector('.filter-bar') as HTMLElement;
//     if (filterBar) {
//       filterBar.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
//       filterBar.style.color = this.isDarkMode ? 'white' : 'black';
//     }

//      const jobsCard = document.querySelectorAll('.jobs-card') as NodeListOf<HTMLElement>;
//      jobsCard.forEach((card) => {
//        card.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
//        card.style.color = this.isDarkMode ? 'white' : 'black';
//      });
//   }
// }

import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component'; 
import { DevjobsCardComponent } from './devjobs-card/devjobs-card.component'; 
import { HeaderContentComponent } from './header-content/header-content.component';
import { ThemeService } from './theme.service';
import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';
import { JobService } from './job.service';
import { Jobs } from './model/jobsdata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DevjobsCardComponent,
    FilterBarComponent, HeaderContentComponent, LoadMoreBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  jobs: Jobs[] = [];
  isDarkMode: boolean = false;

  constructor(private jobService: JobService, private themeService: ThemeService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );

    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.updateTheme();
    });
  }

  updateTheme() {
    const body = document.body;
    body.style.backgroundColor = this.isDarkMode ? '#121721' : '#F2F2F2';
    body.style.color = this.isDarkMode ? 'white' : 'black';

    const filterBar = document.querySelector('.filter-bar') as HTMLElement;
    if (filterBar) {
      filterBar.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
      filterBar.style.color = this.isDarkMode ? 'white' : 'black';
    }

    const jobsCard = document.querySelectorAll('.jobs-card') as NodeListOf<HTMLElement>;
    jobsCard.forEach((card) => {
      card.style.backgroundColor = this.isDarkMode ? '#19202D' : 'white';
      card.style.color = this.isDarkMode ? 'white' : 'black';
    });
  }
}
