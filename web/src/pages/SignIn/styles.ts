import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

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

    input {
      background: #eae0d5;
      border-radius: 10px;
      border: 2px solid #eae0d5;
      padding: 16px;
      width: 100%;
      color: #2b2d42;


      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ef233c;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #eae0d5;
      font-weight: 500;
      width: 100%;
      margin-top: 17px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ef233c')};
      }
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
