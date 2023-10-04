import React, { useState } from 'react';

export default function Event_ex() {
  const [user, setUser] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addUser = () => {
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) {
      return;
    }

    const newUser = user.concat({
      id: user.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setUser(newUser);
    setInputName('');
    setInputEmail('');
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.code === 'Enter') {
      addUser();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addUser}>등록</button>
      <ol>
        {user.map((value) => {
          return (
            <li key={value.id}>
              {' '}
              {value.name}: {value.email}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
