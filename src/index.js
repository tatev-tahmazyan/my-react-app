import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// /*lesson1*/  import App from './components/App.jsx';
// /*lesson2*/  import TestMain from './TestMain';
// /*lesson3*/ import PumaHeader from './lesson3Components/PumaHeader';
// import MainLesson4 from './lesson4Components/Main';
// import MainLesson5 from './lesson5Components/Main';
import MainLesson6 from './lesson6Components/Main';


ReactDOM.render( 
    <React.StrictMode>
        {/* <App /> lesson1 */}
        {/* <TestMain /> lesson2*/}
        {/* <PumaHeader />  lesson3*/}
        {/* <MainLesson4 /> */}
        {/* <MainLesson5 /> */}
        <MainLesson6 />
    </React.StrictMode>, 
    document.getElementById('root')
);