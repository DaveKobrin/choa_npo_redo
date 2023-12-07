import React from 'react';
import Dropdown from '../components/ImportantUpdate'; 

const ImportantUpdate = () => {
  const options = ['Update 1', 'Update 2', 'Update 3'];

  return (
    <div>
      <h1></h1>
      <Dropdown options={options} />
    </div>
  );
};

export default ImportantUpdate;