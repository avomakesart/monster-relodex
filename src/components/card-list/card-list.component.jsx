import React from "react";
import { StyledCardList } from "./card-list.styles";
import { Card } from "../card/card.component";

export const CardList = props => {
  return (
    <StyledCardList>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </StyledCardList>
  );
};
