import React from 'react'
import { useHistory } from 'react-router-dom';

import Board from '../../components/Board';

import { Container, Header, Title, Button } from './styled';

function LeadsPanel(){
  const history = useHistory();
  return(
    <Container>
      <Header>
      <Title>E L O G R O U P</Title>
      <h2>Painel de Leads</h2>
      </Header>

      <Button onClick={(e) => history.push("/new")} type='button' >Novo Lead (+)</Button>
      <hr />
      
      <Board />
    </Container>
  );
}

export default LeadsPanel;