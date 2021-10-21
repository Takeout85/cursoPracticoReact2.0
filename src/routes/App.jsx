import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { PasswordRecovery } from '@pages/PasswordRecovery';
import { SendEmail } from '@pages/SendEmail';
import { NewPassword } from '@pages/NewPassword';
import { MyAccount } from '@pages/MyAccount';
import { CreateAccount } from '@pages/CreateAccount';
import { Checkout } from '@pages/Checkout';
import { Orders } from '@pages/Orders';
import { NotFound } from '@pages/NotFound';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import '@styles/global.scss';

const App = () => {
  const initialState = useInitialState();
	return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/cursoPracticoReact2.0/" component={Home} />
            <Route exact path="/cursoPracticoReact2.0/login" component={Login} />
            <Route exact path="/cursoPracticoReact2.0/password-recovery" component={PasswordRecovery} />
            <Route exact path="/cursoPracticoReact2.0/send-email" component={SendEmail} />
            <Route exact path="/cursoPracticoReact2.0/new-password" component={NewPassword} />
            <Route exact path="/cursoPracticoReact2.0/account" component={MyAccount} />
            <Route exact path="/cursoPracticoReact2.0/signup" component={CreateAccount} />
            <Route exact path="/cursoPracticoReact2.0/checkout" component={Checkout} />
            <Route exact path="/cursoPracticoReact2.0/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
	);
}

export { App };