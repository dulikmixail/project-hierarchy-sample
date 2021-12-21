import {Injectable} from "@angular/core";
import {HeaderService} from "src/core/header/src/lib/header.service";

@Injectable({
  providedIn: "root",
  useExisting: HeaderService
})
export abstract class HeaderServiceToken {
  abstract show(): void;
}
