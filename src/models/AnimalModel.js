import { observable } from "mobx";
import names from '../utils/names'

export default class AnimalModel {
  id = Math.random();
  @observable name;
  @observable happiness = 0;

  constructor() {
    this.name = names[Math.floor(Math.random() * names.length)];
  }
}
