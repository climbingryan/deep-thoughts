import React from 'react';
import ThoughtList from '../components/ThoughtList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // use useQery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
                    // ^ if data exists -> store it. if undefined -> save empty arr to thoughts component
  console.log(thoughts);
  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          { loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title='Some Feed for Thought(s)...' />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;