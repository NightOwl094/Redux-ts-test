import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import Section1 from "./comp/Section1";
import Section2 from "./comp/Section2";
import store from "./store/Store";
import Section3 from "./comp/Section3";
import Section4 from "./comp/Section4";

const myStore = store

function App() {
    return (
        <Provider store={myStore}>
            <div>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
            </div>
        </Provider>
    );
}

export default App;
