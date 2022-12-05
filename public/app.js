//  const rootJs = document.querySelector('#root-js')
//  const element = document.createElement('h1')    //menghasilkan output node
//  element.textContent = "Hello from JS!"
//  element.className = 'heading-1'

//  rootJs.appendChild(element)

//  // buat pakai react
//  const rootReact = document.querySelector('#root-react')

//  const element1 = React.createElement('h1', {   //menghasilkan output object literal
//      children: 'Hello from REACT!',
//      className: 'heading-1'
//  })

//React Fragment
// const root = document.querySelector('#root')

// const p1 = React.createElement('p', {
//     children: "Ini Paragraf 1"
// })

// const p2 = React.createElement('p', {
//     children: "Ini Paragraf 2"
// })

// const element = React.createElement(React.Fragment, {
//     children: [p1, p2]
// })

//nasted element
// const root = document.querySelector('#root')

// const element = React.createElement('ul', {
//     className: 'list'
//     },
//     React.createElement('li', null, "Apple"),
//     React.createElement('li',  null, "Orange"),
//     React.createElement('li',  null, "Grape")
//     )

//bable
// const root = document.querySelector('#root')

// const element = (
//     <ul>
//         <li>Apple</li>
//         <li>Orange</li>
//         <li>Grape</li>
//     </ul>
// )
/* bable => javascript compiler. kita bs nulis kode js versi terbaru, lalu bable akan compile kode tersebut menjadi kode js yg bisa diterima di semua browser.
selain itu bable dapat juga mentransformasi kode js yang engga standar seperti jsx, menjadi kode js yg standar */

//more about jsx
// const root = document.querySelector('#root')

// function ngegas(text){
//     return text.toUpperCase();
// }

// const name = 'Dina'

// const element = (
//     <div>
//         <h1>Hello {ngegas(name)} {new Date().toLocaleDateString()}</h1>
//         <img src="https://images.unsplash.com/photo-1669150740834-a7f067378ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
//     </div>
// );

//react component
// const root = document.querySelector('#root');

// function Halo(props) {
//     return <p>Halo <b>{props.name}</b></p>
// }

// const element = (
//     <>
//         <Halo name="Dina"/>
//         <Halo name="Pipit"/>
//         <Halo name="Nurul"/>
//     </>
// )

//rendering
// const root = document.querySelector('#root');
// console.log("yakin")

// function tick() {
//     const element = (
//         <div>
//             <h3>Jam Sekarang</h3>
//             {new Date().toLocaleTimeString()}
//         </div>
//     )
//     ReactDOM.render(element, root)
// }

// setInterval(function() {
//     tick();
// }, 1000)

//inline style
// const root = document.querySelector('#root');

// const element = (
//     <div style = {
//         { 
//             width: 200,
//             height: 200,
//             backgroundColor: 'blue'
//         }
//     }>
//     </div>
// )

//external style
// const root = document.querySelector('#root');

// const element = (
//     <div className="box"></div>
// )

//Even Handling
// const root = document.querySelector('#root');

// function clickDong(text){
//     alert(text)
// }
// const element = <button onClick={clickDong.bind(this, "Maaciw Yawh")} >Click Me</button>

//React State
// const root = document.querySelector('#root');

// function App() {
//     // const state = React.useState(0);
//     const [count, setCount] = React.useState(0);

//     // const count = state[0];
//     // const setCount = state[1];

//     return (
//         <>
//             <button onClick={function() {
//                 setCount(count - 1);
//             }}> - </button>
//             <span> {count} </span>
//             <button onClick={function() {
//                 setCount(count + 1);
//             }}> + </button>
//         </>
//     )
// }

//Component Lifecycle
// const root = document.querySelector('#root');

// function App() {
//     const [klik, setKlik] = React.useState(false);
//     const [count, setCount] = React.useState(0);

//     React.useEffect(function() {
//         console.log(document.getElementById('judul'));
//     }, []) //untuk mengeksekusi function pada saat component itu dirender pertama kali aja, kita bisa kasih empty array

//     return (
//         <>
//            <h1 id="judul">Hai ini judul</h1>
//            <button onClick={function(){
//             setKlik(true)
//            }}>klik aku dong</button>
//            <button onClick={function(){
//             setCount(count + 1);
//            }}>tambahin nilai dong</button>
//            <span> nilai saat ini : {count}</span>
//         </>
//     )
// }

//Conditional Rendering
// const root = document.querySelector('#root');

// function App() {
//     const [login, setLogin] = React.useState(false);

//     //pakai if
//     // if (login) {
//     //     return (
//     //         <>
//     //         <h1>Udah login nih mba :D</h1>
//     //         <button onClick={function() {
//     //         setLogin(false)
//     //         }}>Logout</button>
//     //         </>

//     //     )
//     // }

//     return (
//         <>
//         <h1>
//             //pengkondisian dalam jsx
//             {login ? 'mba udah login' : 'mba belum login'}
//         </h1>
//         <button onClick={function() {
//             setLogin(true)
//         }}>Login</button>
//         </>
//     )      
// }

//Manipulasi DOM di React
// const root = document.querySelector('#root');

// function App () {
//     const judulRef = React.useRef(null);

//     React.useEffect( function() {
//         console.log(judulRef.current.textContent = "App")
//     }, []);

//     return (
//         <>
//         <h1 ref={judulRef}>Application</h1>
//         </>
//     )
// }

//List dan Key
// const root = document.querySelector('#root');

// function App() {
//     const fruits = ["Apple", "Orange", "Grape", "Mango"];

//     return (
//         <>
//         <ul>
//             {fruits.map(function(fruit) {
//                 return <li key={fruit}>{fruit}</li>
//             })}
//         </ul>
//         </>
//     )
// }

//Form
// const root = document.querySelector('#root');

// function App() {
//     const refNama = React.useRef(null)

//     function pasDiSubmit(event){
//         event.preventDefault()

//         const nama = refNama.current.value;
//         console.log("Nama : " + nama)
//     }

//     return (
//         <>
//         <form onSubmit={pasDiSubmit}>
//             <div>
//                 <label>Nama : </label>
//                 <input type="text" name="nama" ref={refNama} />
//             </div>
//                 <button type="submit">Kirim</button>
//         </form>
//         </>
//     )
// }

//Form Bagian 2
// const root = document.querySelector('#root');

// function App() {
//     const [nama, setNama] = React.useState('');

//     function pasDiSubmit(event) {
//         event.preventDefault();
//         console.log("Nama : " + nama)
//     }

//     return (
//         <>
//         <form onSubmit={pasDiSubmit}>
//             <div>
//                 <label>Nama : </label>
//                 <input type="text" name="nama" onChange={function(event) {
//                     setNama(event.target.value)
//                 }} />
//             </div>
//             <button type="submit">Kirim</button>
//         </form>
//         </>
//     )
// }

//Fetch Data
// const root = document.querySelector('#root');

// function App() {

//Cara 1
// React.useEffect(function() {
//     const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(function(response) {
//         return response.json();
//     }).then(function(response) {
//         console.log(response)
//     })
// }, []);

//Cara 2 dan ui
//     const [news, setNews] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(function() {
//         async function getData() {
//             const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');

//             const response = await request.json();

//             setNews(response);
//             setLoading(false)
//         }
//         getData();
//     }, []);

//     return (
//         <>
//         <h2>Judul Berita</h2>
//         {loading ? (<i>Tunggu ya sist..</i>) : (
//             <ul>
//             {news.map(function(item) {
//                 return <li key={item.id}>
//                     <h3>{item.title}</h3>
//                     </li>
//             })}
//             </ul>
//         )}
//         </>
//     )
// }

//Todo List
const root = document.querySelector('#root');
function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  function generateId() {
    return Date.now();
  }
  function saveTodoHandler(event) {
    event.preventDefault();
    if (!activity) {
      return setMessage('todo nya diisi dong');
    }
    setMessage('');
    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity: activity,
      done: false
    }]);
    setActivity('');
  }
  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }
  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  function cancelEditHandler(todo) {
    setActivity('');
    setEdit({});
  }
  function doneTodoHandler(todo) {
    const checkedTodo = {
      ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = checkedTodo;
    setTodos(updatedTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "hari ini kamu ngapain?",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Simpan Perubahan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo),
      style: {
        marginRight: 15
      }
    }), todo.activity, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'yellow',
        marginLeft: 10
      }
    }, "(", todo.done ? "selesai" : "belum selesai", ")"), /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "hapus")));
  })) : /*#__PURE__*/React.createElement("h2", null, " belum ada todo nih"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);