import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.activatedSub = this.usersService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
