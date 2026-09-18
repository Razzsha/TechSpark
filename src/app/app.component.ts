import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SplashComponent,
    NavComponent,
    RouterOutlet,
    FooterComponent,
    ChatbotComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techspark-angular';
}
