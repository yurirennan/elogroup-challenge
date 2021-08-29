import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 25px;

  height: 400px;
  width: 320px;
  border: 1px solid #13212b;
  border-radius: 8px;

  margin: 100px auto

`;

export const Title = styled.h1`
  text-align: center;
  padding: 10px 15px;
  color: #ffffff;
  background-color: #13212b;
`;

export const Label = styled.label`
  color: #13212b;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px 0;
  margin-top: 10px;
  
  text-align: center;
  font-size: 18px;

  cursor: pointer;
  color: #ffffff;
  background-color: #0275d8;
  
  border: none;
  border-radius: 8px;

  text-decoration: none;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 8px;
  padding: 5px;
  margin-bottom: 15px;
`;

