import { useRef, useState } from 'react';
import style from './Todo.module.css';

export default function Editor({ onCreate }) {
  const [content, setContent] = useState('');
  const contentRef = useRef(null);

  const onHandleContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content.trim() === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.editor}>
      <input
        type="text"
        value={content}
        onChange={onHandleContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
        ref={contentRef}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
