import React, { useState } from 'react';

export default function Alphabet() {
  //   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    // [퀴즈] input이 빈값이라면 alphabet상태가 변경되지 않도록 하기
    if (inputAlpha.trim().length === 0) {
      return;
    }

    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlpha);
    setInputAlpha('');
  };

  const deleteAlpha = (targetId) => {
    // targetId: 삭제될 요소의 id
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  //   const enterAlpha = (e) => {
  //     if (inputAlpha.trim().length === 0) {
  //       return;
  //     }

  //     if (e.key === 'Enter') {
  //       setInputAlpha('');
  //       const newAlpha = alphabet.concat({
  //         id: alphabet.length + 1,
  //         alpha: inputAlpha,
  //       });
  //       setAlphabet(newAlpha);
  //       setInputAlpha('');
  //     }
  //   };

  const handleKeyDown = (e) => {
    console.log(e);

    // bug fix: IME 문제 해결
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.code === 'Enter') {
      addAlpha();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // [퀴즈] input에서 enter 키 누르면 추가되도록!
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
        {alphabet.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
