import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 20%;
  height: 100%;
  width: 600px;

  padding: 10px 20px;
  border: 1px solid #13212b;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-right: 50px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding: 10px 15px;
  color: #ffffff;
  background-color: #13212b;
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 16px;
  border: none;

  color: #FFF;
  background-color: #0d6efd;
  cursor: pointer;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-evenly;

   div {
     display: flex ;
     flex-direction: column;
   }

   label {
    margin-top: 10px;
   }

   table, td, tr, th {
    border: 1px solid #000;
   }

   table{
    width: 300px;
    border-collapse: collapse;
    margin-bottom: 16px;
   }

   th, td {
     text-align: center;
   }
`;