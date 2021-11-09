import React from "react";
import { HighlightedCard } from "../../components/HighlightedCard";
import { 
  Container ,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightedCards,
} from "./styles";


export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri:'https://avatars.githubusercontent.com/u/236848?v=4'}}>
            </Photo>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Marcelo</UserName>
            </User>
          </UserInfo>
          <Icon name="power"></Icon>
        </UserWrapper>
      </Header>
      <HighlightedCards>
        <HighlightedCard 
          type="up"
          title="Entradas" 
          ammount="R$ 17.400,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightedCard 
          type="down"
          title="Saídas" 
          ammount="R$ 1.259,00" 
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightedCard
          type="total"
          title="Total" 
          ammount="R$ 17.400,00" 
          lastTransaction="01 à 16 de abril"
        />
   
      </HighlightedCards>
    </Container>
  )
}

