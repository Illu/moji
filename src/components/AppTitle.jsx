import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import emojify from '../utils/emojify';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
  margin: 20px;
  flex: 1;
  text-align: center;
`;

const Gold = styled.p`
  padding: 0 30px;
  color: white;
  font-size: 1.6em;
  flex: 1;
  text-align: right;
`;

const Social = styled.div`
  flex: 1;
  background: green;
`;

@inject("player")
@observer
export default class extends Component {

  render(){
    const {gold} = this.props.player;
    return (
      <Wrapper>
        <Social />
        <Title>Moji</Title>
        <Gold>{emojify("👨‍🌾")}{gold}</Gold>
      </Wrapper>
    )
  }
}