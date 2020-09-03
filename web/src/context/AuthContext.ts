import { createContext } from 'react';

interface AuthContextData  {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // iniciando vazio para o usuario logar

export default AuthContext;
