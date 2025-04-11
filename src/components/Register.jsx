import React, { useReducer, useRef, useState } from 'react';

export default function Register() {
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  // const [contry, setContry] = useState('');
  // const [bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: '',
    birth: '',
    contry: '',
    bio: '',
  });

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeContry = (e) => {
  //   setInput({
  //     ...input,
  //     contry: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  const onChangeInput = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(input);

  const inputRef = useRef();

  const onHandleSubmit = () => {
    if (input.name === '') {
      inputRef.current.focus;
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={input.name}
          placeholder="이름"
          name="name"
        />
      </div>
      <br />
      <div>
        <input
          type="date"
          name="date"
          onChange={onChangeInput}
          value={input.birth}
        />
      </div>

      <br />
      <div>
        <select
          name="contry"
          id=""
          value={input.contry}
          onChange={onChangeInput}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.contry}
      </div>
      <br />
      <div>
        <textarea name="bio" id="" value={input.bio} onChange={onChangeInput} />
      </div>
      <br />
      <button onSubmit={onHandleSubmit}>제출</button>
    </div>
  );
}
