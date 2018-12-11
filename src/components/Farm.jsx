import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import AppTitle from './AppTitle';
import House from './House';
import Field from './Field';
import Controls from './Controls';
import { TYPE_ANIMALS } from "../utils/constants";

const Wrapper = styled.div`
  width: 75vw;
  height: 80vh;
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

@inject("farm")
@observer
class Farm extends React.Component {


  render() {
    this.props.farm.addField(TYPE_ANIMALS);

    const {fields} = this.props.farm;
    return (
      <Wrapper>
        <AppTitle />
        <FarmWrapper>
          <House />
          <FieldsWrapper>
            {fields.map(field => <Field key={field.id} />)}
          </FieldsWrapper>
        </FarmWrapper>
        <Controls />
      </Wrapper>
    );
  }
}

export default Farm;
