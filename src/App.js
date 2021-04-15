import React, {useState} from 'react';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import './App.css';
import SelectList from "./components/SelectList";
import Context from './context/context';


function App() {

    const [categor, setCategor] = useState('');

    const selectCategory = (e) => {
        setCategor(e.target.id)
    }

    const [contx, setContx] = useState([]);
    const clearItems = () => {
        if (contx.length > 0) {
            return false
        } else return true;
    };
    const value = {contx, setContx, clearItems};


    return (
        <Context.Provider value={value}>
            <div className="main">
                <Header/>
                <div className="container d-flex">
                    <SideBar select={selectCategory}/>
                    <SelectList category={categor}/>
                </div>
            </div>
        </Context.Provider>


    );
}

export default App;





