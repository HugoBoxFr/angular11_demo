import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  features: any;

  constructor() {
    this.features =
      [
        {
          name: 'Directives',
          image: './assets/params/images/background/directives.svg',
          description: 'Structural, attribute & custom',
          icon: 'fa fa-arrow-right',
          link: 'directives',
          color: 'red'
        },
        {
          name: 'Interactions',
          image: './assets/params/images/background/interactions.svg',
          description: 'Interpolation, bindings, input, output',
          icon: 'fa fa-link',
          link: 'interactions',
          color: 'pink'
        },
        {
          name: 'Forms',
          image: 'https://via.placeholder.com/286x80',
          description: 'Template driven & reactive forms',
          icon: 'fa fa-address-card',
          link: 'forms',
          color: 'coral'
        },
        {
          name: 'Services',
          image: 'https://via.placeholder.com/286x80',
          description: 'Data sharing',
          icon: 'fa fa-cogs',
          link: 'services',
          color: 'black'
        },
        {
          name: 'Router',
          image: 'https://via.placeholder.com/286x80',
          description: 'Navigation',
          icon: 'fas fa-sitemap',
          link: 'router',
          color: 'blue'
        },
        {
          name: 'HttpClient',
          image: 'https://via.placeholder.com/286x80',
          description: 'Api',
          icon: 'fa fa-cloud',
          link: 'httpclient',
          color: 'lightgray'
        },
        {
          name: 'CRUD',
          image: 'https://via.placeholder.com/286x80',
          description: 'Http methods',
          icon: 'fa fa-server',
          link: 'crud',
          color: '#ffb899'
        },
        {
          name: 'Authentication',
          image: 'https://via.placeholder.com/286x80',
          description: 'Firebase',
          icon: 'fas fa-user',
          link: 'authentication',
          color: 'lime'
        },
        {
          name: 'Drag and Drop',
          image: 'https://via.placeholder.com/286x80',
          description: 'Sprint board',
          icon: 'fa fa-hand-paper',
          link: 'dragAndDrop',
          color: 'wheat'
        },
        {
          name: 'Bootstrap',
          image: 'https://via.placeholder.com/286x80',
          description: 'Cards, jumbotrons, buttons...',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap',
          color: '#563d7c'
        },
        {
          name: 'ChartJs',
          image: 'https://via.placeholder.com/286x80',
          description: 'ChartJs library',
          icon: 'fa fa-chart-bar',
          link: 'chartjs',
          color: 'gold'
        },
        {
          name: 'Calendar',
          image: 'https://via.placeholder.com/286x80',
          description: 'Description',
          icon: 'fa fa-calendar',
          link: 'calendar',
          color: 'lightblue'
        },
      ];

  }

  ngOnInit(): void {
  }

}
