import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-up-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearfromRight = keyframes`
  from {
    opacity: 0;
    transition: translateX(50px);
  }
  to {
    opacity: 1 ;
    transition: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation : ${appearfromRight} 1s;

  .logo {
    width: 215px;
  }
    form {
      margin: 20px 0;
      width: 340px;
      text-align: center;

    h1{
      margin-bottom: 24px;
    }

     a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #ef233c;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    position: relative;
    top: -30px;
    transition: color 0.2s;


    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ef233c')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
