import React  from 'react';
import './index.scss';
import Header from 'src/components/Header';

const Home: React.FC = props => {
  return (
    <div className='home'>
      <Header/>
    </div>
  );
};

export default Home;
