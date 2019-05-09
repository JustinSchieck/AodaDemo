import React from 'react';
import logo from './logo.svg';
import './App.css';
import { extname } from 'path';
import ExampleApp from './ExampleApp';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin:0 auto;
  text-align:center;
  overflow:visible;
`;

const RootDiv = styled.div`
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ButtonDiv = styled.div`
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Button = styled.button`
  margin: 5px;
`;




function App() {
  return (
    <MainDiv className="App">
      <div aria-live="true">
        <h1>Welcome My Minions</h1>
      </div>
      <h3>Favourite Drink</h3>
      <RootDiv>
        <div>
          <input type="checkbox" tabindex="0" class="checkbox" role="checkbox" aria-labeledby="pop1"/>
            <span id="pop1" aria-hidden="true">Coke</span>
        </div>      
        <div>
          <input type="checkbox" tabindex="0" class="checkbox" />
          <span id="pop2">Pepsi</span>
        </div>
        <div>
          <input type="checkbox" tabindex="0" class="checkbox" />
          <span id="pop3">Rockstar</span>
        </div>
      </RootDiv>
      <ButtonDiv>
      <h3>Favourite Movie Snacks</h3>      
      <div>
        <Button>Popcode</Button>
      </div>      
      <div>
        <Button>Chips</Button>
      </div>
      <div>
        <Button>Candy</Button>
      </div>       
      </ButtonDiv>
    </MainDiv>
  );
}

export default App;
