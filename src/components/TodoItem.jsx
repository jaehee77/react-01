import style from './Todo.module.css';

export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) {
  // const

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
