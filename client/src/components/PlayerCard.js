import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #C2174D;
  padding: 10px;
  margin: 20px auto;
  width: 230px;
  border-radius: 15px;
  box-shadow: 5px 5px lightgray;
`;

const Name = styled.h2`
  margin-bottom: 5px;
`;

const OtherText = styled.h3`
  margin-bottom: 5px;
`;

function PlayerCard(props) {
  return (
      <Card>
        <div key={props.id}>
          <Name>Player: {props.name}</Name>
          <OtherText>Country: {props.country}</OtherText>
          <OtherText>Searches: {props.searches}</OtherText>
        </div>
      </Card>
  ) 
}

export default PlayerCard;