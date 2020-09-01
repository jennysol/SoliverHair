import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img className="logo" src={logoImg} alt="SoliverHerSalon"/>

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn/>
        Criar conta</a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
