import React, { Component } from 'react';
import Button from './Button'
import { observer, inject } from 'mobx-react';

@inject("farm")
@observer
export default class extends Component {
  render(){
    console.log(this.props)
    const {addAnimal} = this.props.farm;
    return (
      <Button color="green" title="Add Animal" onClick={() => addAnimal()} />
    )
  }
}