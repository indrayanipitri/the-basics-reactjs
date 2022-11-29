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
        const root = document.querySelector('#root');

        function tick() {
            const element = (
                <div>
                    <h3>Jam Sekarang</h3>
                    {new Date().toLocaleTimeString()}
                </div>
            )
            ReactDOM.render(element, root)
        }

        setInterval(function() {
            tick();
        }, 1000)
