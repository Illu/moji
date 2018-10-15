import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import styled from 'styled-components';
import AppTitle from './AppTitle';
import House from './House';
import Field from './Field';

const Wrapper = styled.div`
  width: 1200px;
  height: 800px;
  border-radius: 10px;
  box-shadow: 0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
`;

const FarmWrapper = styled.div`
  flex: 8;
`;

const FieldsWrapper = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`;

class Farm extends React.Component {
  render() {
    return (
      <Wrapper>
        <AppTitle />
        <FarmWrapper>
          <House />
          <FieldsWrapper>
            <Field />
            <Field />
            <Field />
            <Field />
            <Field />
            <Field />
          </FieldsWrapper>
        </FarmWrapper>
      </Wrapper>
    );
  }
}

export default Farm;
