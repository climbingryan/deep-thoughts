import React from 'react';

// special react component we'll use to provide data to all other components
import { ApolloProvider } from '@apollo/react-hooks';
// Used to get data when we're ready to use it
import ApolloClient from 'apollo-boost';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

import Home from './pages/Home';

// new connection to GraphQl using Apollo
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});
// Uniform Resource identifier

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile/:username?' component={Profile} /> {/* ? - username is optional */}
            <Route exact path='/thought/:id' component={SingleThought} />
  
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
