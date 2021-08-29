import React, {useContext} from 'react';
import { useDrop } from 'react-dnd';

import Card from '../Card';

import BoardContext from '../Board/context';

import { Container } from './styled';

function List({ title, data, listId }){
  const { move } = useContext(BoardContext)

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop(item, monitor){
      const grabbedListId = item.listId;
      const targetListId = listId;
      const cardId = item.cardId;


      if(targetListId <= grabbedListId){
        return ;
      }

      if(targetListId > grabbedListId + 1) {
        return ;
      }

      move(grabbedListId, targetListId, cardId);
    }
  });


  return(
    <Container ref={dropRef}>
      <header>
        <h2>{title}</h2>
      </header>

      <ul>
        {data.map( (card, index) => <Card key={card.id} name={card.leadName} cardIndex={index} listId={listId} />)}
      </ul>
    </Container>
  );
}

export default List