import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { saveLead } from '../../services/api';

import { Container, Header, Title, Button, Layout } from './styled';

function CreateLead() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [opportunity1, setOpportunity1] = useState(false);
  const [opportunity2, setOpportunity2] = useState(false);
  const [opportunity3, setOpportunity3] = useState(false);
  const [opportunity4, setOpportunity4] = useState(false);
  const [opportunity5, setOpportunity5] = useState(false);
  


  function handleCreateLead(event) {
    event.preventDefault();

    if (username === '' || phone === '' || email === '') {
      return ;
    }

    if(!(opportunity1 | opportunity2 | opportunity3 | opportunity4)) {
      return ;
    }

    saveLead(username)

    alert('Lead incluído com Sucesso!')

    history.push("/panel")
  }

  return (
    <Container>
      <Header>
        <Title>E L O G R O U P</Title>
        <h2>Novo Lead</h2>
      </Header>

      <Layout>
        <div>
          <label>Nome *</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
          <label>Telefone *</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" />
          <label>Email *</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>
        <div>
          <label>Oportunidades *</label>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" name="checkAll" /></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input checked={opportunity1} onChange={ () => { setOpportunity1(!opportunity1) }}  type="checkbox" name="check" /></td>
                <td>RPA</td>
              </tr>
              <tr>
                <td><input checked={opportunity2} onChange={ () => { setOpportunity2(!opportunity2) }} type="checkbox" name="check" /></td>
                <td>Produto Digital</td>
              </tr>
              <tr>
                <td><input checked={opportunity3} onChange={ () => { setOpportunity3(!opportunity3) }} type="checkbox" name="check" /></td>
                <td>Analytics</td>
              </tr>
              <tr>
                <td><input checked={opportunity4} onChange={ () => { setOpportunity4(!opportunity4) }} type="checkbox" name="check" /></td>
                <td>BPM</td>
              </tr>
              <tr>
                <td><input checked={opportunity5} onChange={ () => { setOpportunity5(!opportunity5) }} type="checkbox" name="check" /></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <Button onClick={handleCreateLead} >Salvar</Button>
        </div>
      </Layout>

    </Container>
  );
}

export default CreateLead;