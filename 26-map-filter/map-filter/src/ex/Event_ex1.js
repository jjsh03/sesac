import React, { useState, useRef } from 'react';
import './ex1.css';

export default function Event_ex1() {
  const [content, setContent] = useState([
    { id: 1, title: 'Hi', writer: 'sue' },
    { id: 2, title: 'Hello', writer: 'John' },
  ]);

  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const writerRef = useRef();
  const titleRef = useRef();

  const addContent = () => {
    if (inputWriter.trim().length === 0) {
      writerRef.current.focus();
      return;
    } else if (inputTitle.trim().length === 0) {
      titleRef.current.focus();
      return;
    }

    const newContent = content.concat({
      id: content.length + 1,
      title: inputTitle,
      writer: inputWriter,
    });

    setContent(newContent);
    setInputWriter('');
    setInputTitle('');
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.code === 'Enter') {
      addContent();
    }
  };
  return (
    <div>
      <fieldset>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          placeholder="작성자"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          ref={writerRef}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          onKeyDown={(e) => handleKeyDown(e)}
          ref={titleRef}
        />
        <button onClick={addContent}>작성</button>
      </fieldset>
      <br />
      <div>
        <select name="" id="">
          <option value="작성자">작성자</option>
        </select>
        <input type="text" />
        <button type="button">검색</button>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {content.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
