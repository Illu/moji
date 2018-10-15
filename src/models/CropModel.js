import { observable } from "mobx";

export default class CropModel {
  id = Math.random();
  @observable type;
  @observable status = 0;
  @observable waterLevel = 0;

  constructor(type = CROP_WHEAT) {
    this.type = type;
  }
}
