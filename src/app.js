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
        const root = document.querySelector('#root');

        function App () {
            const judulRef = React.useRef(null);

            React.useEffect( function() {
                console.log(judulRef.current.textContent = "App")
            }, []);

            return (
                <>
                <h1 ref={judulRef}>Application</h1>
                </>
            )
        }

        ReactDOM.render(<App />, root)
