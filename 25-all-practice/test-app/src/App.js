import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result data={data} />
      </div>
    </>
  );
}

export default App;
