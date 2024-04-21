import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  template: `
    <nav class="navbar">
      <div class="navbar-brand" >
      <a href="home" >
        <svg
          fill="#fff"
          height="30px"
          width="30px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 292.518 292.518"
          xml:space="preserve"
          transform="matrix(1, 0, 0, 1, 0, 0)"
          stroke="#fff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M292.518,125.66c0-17.848-13.592-32.578-30.965-34.381V18.455c0-2.476-1.222-4.791-3.265-6.189 c-2.041-1.397-4.644-1.697-6.951-0.802L108.39,66.988H30.225c-1.989,0-3.897,0.791-5.305,2.197 c-0.573,0.574-14.118,14.282-20.992,34.914c-6.502,19.513-8.138,48.891,20.993,78.031c1.406,1.407,3.314,2.197,5.304,2.197h1.736 l59.188,93.738c1.374,2.177,3.769,3.496,6.342,3.496h61.382c0.008,0.001,0.016,0.001,0.02,0c4.143,0,7.5-3.357,7.5-7.5 c0-1.655-0.536-3.186-1.445-4.427l-52.984-83.917l139.37,54.226c0.88,0.343,1.802,0.511,2.719,0.511c1.491,0,2.97-0.444,4.235-1.31 c2.044-1.397,3.266-3.714,3.266-6.19v-72.92C278.927,158.233,292.518,143.506,292.518,125.66z M33.516,81.988h68.78v87.34H33.401 C-3.445,130.018,25.215,91.55,33.516,81.988z M101.627,266.562l-51.913-82.215h43.643l51.911,82.215H101.627z M117.297,79.621 l129.257-50.207v192.575l-129.257-50.291V79.621z M261.554,144.877v-38.44c9.071,1.694,15.965,9.662,15.965,19.223 C277.518,135.219,270.625,143.183,261.554,144.877z"
              ></path>
              <path
                d="M229.991,133.205h1c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-1c-4.143,0-7.5,3.357-7.5,7.5 C222.491,129.848,225.848,133.205,229.991,133.205z"
              ></path>
              <path
                d="M200.991,133.205h1c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-1c-4.143,0-7.5,3.357-7.5,7.5 C193.491,129.848,196.848,133.205,200.991,133.205z"
              ></path>
              <path
                d="M171.991,133.205h1c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-1c-4.143,0-7.5,3.357-7.5,7.5 C164.491,129.848,167.848,133.205,171.991,133.205z"
              ></path>
              <path
                d="M142.991,133.205h1c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-1c-4.143,0-7.5,3.357-7.5,7.5 C135.491,129.848,138.848,133.205,142.991,133.205z"
              ></path>
            </g>
          </g>
        </svg>
      </a>
      </div>
      <div class="nav-links">
        <div class="right-links">
          <div class="cart">
            <svg
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 902.86 902.86"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                    M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                  />
                  <path
                    d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                    M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                    S619.162,694.432,619.162,716.897z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <button (click)="logout()" *ngIf="token !== ''; else login">
            Logout
          </button>
          <ng-template #login>
            <a routerLink="/login">Login</a>
          </ng-template>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./topnav.component.css'],
})
export class TopnavComponent {
  token = '';

  constructor(private authService: AuthService, private router: Router) {
    this.token = this.authService.getToken();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.token = '';
  }
}
