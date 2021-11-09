import React from "react";
import { color } from "react-native-reanimated";

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Ammount,
  LastTransaction,
} from "./styles";

interface ICardProps {
  title:string;
  ammount: string;
  lastTransaction:string;
  type:'up'|'down'|'total';
}

const icon = {
  up:'arrow-up-circle',
  down:'arrow-down-circle',
  total: 'dollar-sign'
}
export function HighlightedCard({
  type,
  title,
  ammount,
  lastTransaction
}:ICardProps){
  return(
    <Container type={type}>
      <Header>
        <Title 
          type={type}
        >
          {title}
        </Title>
        <Icon name={icon[type]} type={type}/>
      </Header>
      <Footer>
        <Ammount 
          type={type}
        >
          {ammount}
        </Ammount>
        <LastTransaction 
          type={type}
        >
          {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  )
}