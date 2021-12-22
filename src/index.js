import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// lesson1  import App from './components/App.jsx';
// lesson2  import TestMain from './TestMain';
import PumaHeader from './lesson3Components/PumaHeader';


ReactDOM.render( 
    <div>
        {/* <App /> lesson1 */}
        {/* <TestMain /> lesson2*/}
        <PumaHeader />
    </div> , 
    document.getElementById('root')
);