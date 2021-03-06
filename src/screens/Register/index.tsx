import React, { useState } from "react";
import { Input } from "../../components/Form/Input";

import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";



import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./styles";
import { CategorySelect } from "../../components/Form/CategorySelect";

export function Register(){
  const [transactionType, setTransactionType] = useState('');
  
  function handleTransactionTypeSelect(type:'up'|'down'){
    setTransactionType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />
          <Input 
            placeholder="Preço"
          />
          <TransactionsType>
            <TransactionTypeButton 
              type="up" 
              title="Entrada"
              onPress= {() => handleTransactionTypeSelect('up')}
              isActive = {transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down" 
              title="Saída"
              onPress= {() => handleTransactionTypeSelect('down')}
              isActive = {transactionType === 'down'}
            />
          </TransactionsType>

          <CategorySelect title="Categoria"/>
        </Fields>

        <Button title="Enviar"/>
      </Form>
    </Container>
  )
}