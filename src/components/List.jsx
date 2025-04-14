import { useContext, useMemo, useState } from 'react';
import style from './Todo.module.css';
import TodoItem from './TodoItem';
import { TodoContext } from '../App';

export default function List() {
  const [search, setSearch] = useState('');

  const { todos } = useContext(TodoContext);

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalyzedData 호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className={style.list}>
      <h3>Todo List 🌱</h3>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
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
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
