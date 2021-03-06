import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const animateCloud = keyframes`
0% {
  margin-left: -1000px;
}
100% {
  margin-left: 100%;
}
`;

const Main = styled.div`
  background: #00b4ff;
  color: #333;
  font: 100% Arial, Sans Serif;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
`;
const BackgroundWrap = styled.div`
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
`;
const Cloud = styled.div`
  background: #fff;
  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(5%, #fff),
    color-stop(100%, #f1f1f1)
  );
  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#fff',
      endColorstr='#f1f1f1',
      GradientType=0
    );

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

  height: 120px;
  position: relative;
  width: 350px;

  &:after,
  &:before {
    background: #fff;
    content: '';
    position: absolute;
    z-index: -1;
  }

  &:after {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;

    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  &:before {
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
`;
const X1 = styled.div`
  z-index: 10;
  -webkit-animation: ${animateCloud} 35s linear infinite;
  -moz-animation: ${animateCloud} 35s linear infinite;
  animation: ${animateCloud} 35s linear infinite;

  -webkit-transform: scale(0.35);
  -moz-transform: scale(0.35);
  transform: scale(0.35);
`;
const X2 = styled.div`
  -webkit-animation: ${animateCloud} 20s linear infinite;
  -moz-animation: ${animateCloud} 20s linear infinite;
  animation: ${animateCloud} 20s linear infinite;

  -webkit-transform: scale(0.55);
  -moz-transform: scale(0.55);
  transform: scale(0.55);
`;

const X3 = styled.div`
  -webkit-animation: ${animateCloud} 30s linear infinite;
  -moz-animation: ${animateCloud} 30s linear infinite;
  animation: ${animateCloud} 30s linear infinite;

  -webkit-transform: scale(0.35);
  -moz-transform: scale(0.35);
  transform: scale(0.35);
`;

const X4 = styled.div`
  -webkit-animation: ${animateCloud} 18s linear infinite;
  -moz-animation: ${animateCloud} 18s linear infinite;
  animation: ${animateCloud} 18s linear infinite;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
`;
const X5 = styled.div`
  -webkit-animation: ${animateCloud} 25s linear infinite;
  -moz-animation: ${animateCloud} 25s linear infinite;
  animation: ${animateCloud} 25s linear infinite;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
`;
const Body = styled.div`
  z-index: 21;
  background: white;
  border: 10px solid black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLinks = styled.a`
  font-size: 16px;
  padding: 10px;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export default class LandingPage extends Component {
  render() {
    return (
      <Main>
        <Body>
          <StyledLinks>About</StyledLinks>
          <StyledLinks>Portfolio</StyledLinks>
          <StyledLinks>Testimonial</StyledLinks>
          <StyledLinks>Contact</StyledLinks>
        </Body>
        <BackgroundWrap>
          <X1>
            <Cloud />
          </X1>
          <X2>
            <Cloud />
          </X2>
          <X3>
            <Cloud />
          </X3>
          <X4>
            <Cloud />
          </X4>
          <X5>
            <Cloud />
          </X5>
        </BackgroundWrap>
      </Main>
    );
  }
}
