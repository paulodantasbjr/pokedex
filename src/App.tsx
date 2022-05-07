import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import { Routes } from 'routes/Routes';

export const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RecoilRoot>
  );
};
