import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test';
  serverCreated = false;
  servers = ['test server', 'test server 2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = !this.allowNewServer
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName)
    this.serverCreated = true;
    this.serverCreationStatus = "Server '"+ this.serverName +"' created!"
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
