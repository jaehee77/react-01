import { memo, useContext } from 'react';
import style from './Todo.module.css';
import { TodoContext } from '../App';

function TodoItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className={style.todo_item}>
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className={style.content}>{content}</div>
      <div className={style.date}>{new Date(date).toLocaleDateString()}</div>
      <button className={style.btn_delete} onClick={onClickDeleteButton}>
        삭제
      </button>
    </div>
  );
}

// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;

//   return true;
// });

export default memo(TodoItem);
