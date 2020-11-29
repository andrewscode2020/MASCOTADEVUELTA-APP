import { Component } from '@angular/core';
import { faCoffee, faShare, faSignInAlt, faSignOutAlt, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/fontawesome-free-brands';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MASCOTADEVUELTA-APP';
  faCoffee = faCoffee;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  share = faShare;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUserPlus = faUserPlus;
  faUser = faUser;

  login = false;
  newUser = true
}
