import {Injectable} from "@angular/core";
import {Language} from "../types/language.type";

@Injectable()
export class StorageService {
  static setLanguage(language: Language) {
    localStorage.setItem("lang", language);
  }

  static getLanguage(): Language | null {
    return typeof window !== "undefined"
      ? (localStorage.getItem("lang") as Language)
      : null;
  }
}
