import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';
}
