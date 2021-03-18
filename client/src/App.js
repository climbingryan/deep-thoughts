import React from 'react';

// special react component we'll use to provide data to all other components
import { ApolloProvider } from '@apollo/react-hooks';
// Used to get data when we're ready to use it
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// new connection to GraphQl using Apollo
const client = new ApolloClient({
  uri: '/graphql'
});
// Uniform Resource identifier

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
