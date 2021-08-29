import React, { useState, useEffect } from 'react';
import produce from 'immer'

import BoardContext from './context';

import { getData, updateData } from '../../services/api';

import List from '../../components/List';

import { Container } from './styled';

function Board() {
  const [list, setList] = useState([]);

  useEffect(()=> {
    setList(getData())
  }, [])

  function move(fromList, toList, cardId) {
    //produce recebe a lista e uma função em que o parametro draft é a copia do
    //1 parametro
    const newList = produce(list, draft => {

      const cardGrabbed = draft[fromList].leads[cardId];
      draft[fromList].leads.splice(cardId, 1);
      draft[toList].leads.push(cardGrabbed);
    });

    setList(newList);
    updateData(newList);
  }

  return (
    <BoardContext.Provider value={{ list, move }}> 
      <Container>
        {list.map((list, index) => <List key={list.title} title={list.title} data={list.leads} listId={index} />)}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;