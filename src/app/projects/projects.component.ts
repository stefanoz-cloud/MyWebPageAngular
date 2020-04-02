import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Java',
        items: [
          [
            {
              label: 'Esercizi 1',
              items: [{label: 'Esercizi 1.0', url: 'https://github.com/stefanoz-cloud/java-projects/tree/esercizi01'}]
            },
            {
              label: 'Esercizi 2',
              items: [{label: 'Esercizi 2.0', url: 'https://github.com/stefanoz-cloud/java-projects/tree/esercizi02'}]
            },
            {
              label: 'Esercizi 3',
              items: [{label: 'Esercizi 3.0', url: 'https://github.com/stefanoz-cloud/java-projects/tree/esercizi03'} ]
            },
            {
              label: 'Esercizi 4',
              items: [{label: 'Esercizi 4.0', url: 'https://github.com/stefanoz-cloud/java-projects/tree/esercizi04'} ]
            },
          ]
        ]
      },
      {
        label: 'Angular',
        items: [
          [
            {
              label: 'User 1',
              items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
            },
            {
              label: 'User 2',
              items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
            },
          ],
          [
            {
              label: 'User 3',
              items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
            },
            {
              label: 'User 4',
              items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
            },
            {
              label: 'User 6',
              items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'Spring Boot',
        items: [
          [
            {
              label: 'Event 1',
              items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
            },
            {
              label: 'Event 2',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ],
          [
            {
              label: 'Event 3',
              items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
            },
            {
              label: 'Event 4',
              items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'PHP',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Setting 2',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Setting 3',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      }
    ];
  }

}
