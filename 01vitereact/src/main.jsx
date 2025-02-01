import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return(
//         <>
//             <h1>Chai With || Code</h1>
//         </>
//     )
// }

// const reactElement ={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to vist google'
// }

// const Render=(

//     <a href='https://google.com' target='_blank'>Visit Google Site </a>
// )


const userName= "Chai Aur Code"

const ReactElement= React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
        'Click Me To Visit Google Site',
        userName
)


createRoot(document.getElementById('root')).render(
 
    // <App/>
    ReactElement
 
);
