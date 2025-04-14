import { useState } from 'react';
import style from './Todo.module.css';
import TodoItem from './TodoItem';

export default function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') return todos;

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className={style.list}>
      <h3>Todo List 🌱</h3>
      <div className={style.input_wrapper}>
        <input
          type="text"
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요"
        />
      </div>
      <div>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
