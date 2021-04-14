import React, {useEffect, useState} from 'react';
import {cardReq} from "../utils/request";


const CardRecipe = (props) => {
    const [recipe, setRecipe] = useState([])

    const fetchCard =  async (param) =>{
        const  res = await cardReq(param)
        setRecipe(res);
    }
    useEffect(()=>{
        if(props.recept){
            fetchCard(props.recept)
        } else setRecipe([])

    }, [props.recept])

        return (
            <div>
                {console.log(recipe)}
                {recipe.length === 0 ? '':  <div>{recipe[0]['strMeal']}</div> }
            </div>
        )
    }

export default CardRecipe;