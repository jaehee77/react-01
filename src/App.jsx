import {
  useReducer,
  useRef,
  useState,
  useCallback,
  createContext,
} from 'react';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import style from './components/Todo.module.css';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래하기',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);

  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(mockData.length);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []);

  return (
    <>
      <div className={style.todo_wrap}>
        <Header />
        <TodoContext.Provider value={todos}>
          <TodoDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoContext.Provider>
      </div>
    </>
  );
}

export default App;
