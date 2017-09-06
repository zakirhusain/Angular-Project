import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  isServerCreated = false;
  serverName = 'Test Server';

  constructor() {
    setTimeout(()=> this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = "Server was created";
  }
  
}
