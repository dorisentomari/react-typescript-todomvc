import React  from 'react';

import './index.scss';

const Home: React.FC = (props) => {
  console.log('home');
  console.log(props);
  return (
    <div className='home'>
      <h2>home page</h2>
    </div>
  );
};

export default Home;
