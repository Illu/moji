import { observable } from "mobx";
import { TYPE_ANIMALS } from "../utils/constants";
import AnimalModel from "./AnimalModel";
import CropModel from "./CropModel";

export default class FieldModel {

  // If not specified, every new field created will be of type "animal"
  
  @observable items = [];
  
  type = TYPE_ANIMALS;

  constructor(type) {
    this.type = type;
  }

  @action
  addItem() {
    this.items.push(this.type === TYPE_ANIMALS ? new AnimalModel() : new CropModel());
  }
}
