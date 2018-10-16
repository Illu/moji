import { observable, computed, action } from "mobx";

import FieldModel from './FieldModel';
import AnimalModel from "./AnimalModel";

export default class FarmModel {
  @observable buildings = [
    {
      id: 0,
      name: "House",
      emoji: "🏡",
    },
  ];

  @observable animals = [];
  @observable crops = [];
  @observable fields = [];

  @computed
  get happyAnimalsCount() {
    return this.animals.filter(animal => animal.happiness > 5).length;
  }

  @action
  addField = type => {
    this.fields.push(new FieldModel(type));
  }

  @action
  addAnimal = () => {
    this.animals.push(new AnimalModel());
  }
}
