import React, { Component } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

@inject("farm")
@observer
export default class extends Component {
  render(){
    const {addAnimal} = this.props.farm;
    return (
      <ControlsWrapper>
        <Button color="green" title="Add Animal" onClick={() => addAnimal()} />
      </ControlsWrapper>
    )
  }
}