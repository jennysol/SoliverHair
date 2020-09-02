import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignIn />
    {/* <SignUp /> */}
    <GlobalStyles/>
  </>
);

export default App;
