import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CustomHeaderService {
  constructor() {
    console.log('CustomHeaderServiceConstructor');
  }

  show(): string {
    return "CustomHeader show";
  }
}
