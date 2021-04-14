
import { useState } from 'react';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import './App.css';
import SelectList from "./components/SelectList";



function App() {
    const  [categor, setCategor] = useState('')
   const selectCategory =(e)=>{
       setCategor(e.target.id)
   }


    return (
        <div className="main">
            <Header/>
            <div className="container d-flex">
                <SideBar select={selectCategory}/>
                <SelectList category={categor}/>

            </div>
        </div>


    );
}

export default App;

// Search meal by name - 2.User can click a recipe title to display a recipe card containing the recipe title,
// meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level
// (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps.
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

//     List all meals by first letter - 2b User can search for a recipe not in the list of recipe titles by entering
//     the meal name into a search box and clicking a ‘Search’ button. Any open source recipe API may be used as the
//     source for recipes (see The MealDB below).
// www.themealdb.com/api/json/v1/1/search.php?f=a

//     Lookup full meal details by id - 2.User can click a recipe title to display a recipe card containing the recipe title,
// // meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level
// // (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps.
// www.themealdb.com/api/json/v1/1/lookup.php?i=52907

//
// List all meal categories - 1/3b
// www.themealdb.com/api/json/v1/1/categories.php

// List all Categories
// www.themealdb.com/api/json/v1/1/list.php?c=Lamb
// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous




