import React from 'react';
import { useDrag } from 'react-dnd';

import { Container } from './styled';

function Card({ name, cardIndex: cardId, listId }){

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { listId, cardId },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
  });

  return(
    <Container ref={dragRef} isDragging={isDragging}>
      <p>{name}</p>
    </Container>
  );
}

export default Card