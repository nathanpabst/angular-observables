import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UsersService {
    activatedEmitter = new Subject<boolean>();
}
