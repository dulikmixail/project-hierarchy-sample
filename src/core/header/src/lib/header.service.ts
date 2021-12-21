import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() {
    console.log('HeaderServiceConstructor')
  }

  show() {
    console.log('Header show!')
  }
}
