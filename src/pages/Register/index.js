import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { saveUser } from '../../services/api'

import { Container, Title, Label, Button, Input } from './styled';

function Register(){
  const history = useHistory();

  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ passwordConfirm, setPasswordConfirm] = useState('');
  
  function handleCreateUser(event){
    event.preventDefault();

    let usernameIsValid = false;
    let passwordIsValid = false;

    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(username !== '' && username.length >= 4){
      usernameIsValid = true;
    } else {
      usernameIsValid = false
    }

    if(password.match(pattern) && passwordConfirm.match(pattern) && password === passwordConfirm){
      passwordIsValid = true;
    } else {
      passwordIsValid = false
    }

    if(usernameIsValid && passwordIsValid){
      const user = {
        username,
        password,
        passwordConfirm
      }

      saveUser(user);
      history.push("/panel")
    }
  }

  return(
    <Container>
      <Title>E L O G R O U P</Title>

      <Label>Usuário *</Label>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
      <Label>Password *</Label>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <Label>Confirmação Password *</Label>
      <Input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="password" />

      <Button onClick={handleCreateUser} type="submit">Registrar</Button>
    </Container>
  );
}

export default Register;