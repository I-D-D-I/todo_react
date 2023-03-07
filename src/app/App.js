import React, { useState } from "react";
import Component2 from "../components/Component2";
import { Header } from "../components/Header/Header";
import { Provider } from "../context";

// let savedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

function App() {
  const [value, setValue] = useState("");
  // console.log(value);
  const [click, setClick] = useState([]);
  // console.log(click);
  // let todos = savedTodos;

  const clickBtn = () => {
    // setClick((prevValue) => [...prevValue, value]);
    setClick([
      ...click,
      {
        id: new Date().toISOString(),
        text: value,
        isDone: false,
      },
    ]);
    // console.log(click);
    setValue('');
    // console.log(value)
  };

  const delAll = () => {
    setClick([]);
  };

  const delOne = (id) => {
    // console.log('del');
    // let id = click.id;
    setClick(click.filter((obj) => obj.id !== id))
  };

  const toggleIsDone = (id) => {
  setClick (
  click.map((el) => {
    if (el.id === id) {
      el.isDone = !el.isDone;
      return el;
    }
    return el;
  }))
};
console.log(click)

// const toggleIsDone = (id) => {
//   click = click.map((el) => {
//     if (id !== el.id) {
//       return el;
//     }
//     return el
//   });
// };
// console.log(click);


  const delDone = (isDone) => {
    console.log("delDone");
    setClick(click.filter((obj) => !obj.isDone));
    // todos = todos.filter((todo) => !todo.isDone);
  };

  
    // setClick((click) => click.filter((obj) => console.log(obj.id)));
  // obj.id !== obj.id
  // const delOne = () => {
  //   setClick((click) => click.filter((el) => el.id !== id)),
  // };
    // todos = todos.filter((todo) => todo.id !== id);

  // const checked = (checkedValue) => setClick([...checkedValue, value]); // делаем функцию like которая принимает name из data и добавляет его в новый массив имен liked

  // const dislike = (name) => setLiked(liked.filter((el) => el !== name)); // делаем функцию dislike которая принимает name и фильтрует новый массив liked - если name нету то в массиве liked не отображает

  // const delDone = () => {
  //   todos = todos.filter((todo) => !todo.isDone);
  //   // renderTodos();
  // };

  // const toggleIsDone = (id) => {
  //   todos = todos.map((todo) => {
  //     if (id !== todo.id) {
  //       return todo;
  //     }
  //     return (todo = {
  //       ...todo,
  //       isDone: !todo.isDone,
  //     });
  //   });
  //   renderTodos();
  // };

  // const onChange = (value) => {
  //   // (evt) => setValue(evt.target.value);
  //   setValue(value);
  // };

  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        click={click}
        setClick={setClick}
        clickBtn={clickBtn}
        delAll={delAll}
        delOne={delOne}
        delDone={delDone}
        toggleIsDone={toggleIsDone}
      />
      <Provider>
        <div className="App">
          <Component2 />
        </div>
      </Provider>
    </>
  );
}

export default App;
