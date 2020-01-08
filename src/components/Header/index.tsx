import React from 'react';

interface Props {
  title?: string;
}

const Header: React.FunctionComponent<Props> = props => {
  const title = 'YOUR TODO LIST';

  return (
    <div className='c-header'>
      <h3 className='title'>{props.title ? props.title : title}</h3>
    </div>
  );
};

export default Header;
