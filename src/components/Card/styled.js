import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 120px;
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;

  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 10px solid rgba(230, 236, 245, 0.4);

  cursor: grab;

  p {
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p {
      opacity: 0;
    }
  `}
`;