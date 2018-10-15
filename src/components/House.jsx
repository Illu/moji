import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import emojify from '../utils/emojify'; 

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Building = styled.p`
  font-size: 50px;
`;

@inject("farm")
@observer
export default class extends Component {
  render () {
    const {buildings} = this.props.farm;
    return (
      <Wrapper>
        {buildings.map(building => 
          <Building key={building.id}>
            {emojify(building.emoji)}
          </Building>  
        )}
      </Wrapper>
    )
  }
}