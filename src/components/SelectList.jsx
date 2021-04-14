import React, {useEffect, useState} from 'react';
import CardRecipe from "./CardRecipe";
import {selectReq} from '../utils/request';


const SelectList = (props) => {

    const [itemRecep, setItemRecep] = useState([]);
    const [recipe, setRecipe] = useState(null)

    const fetchSelect =  async (param) =>{
        const  res = await selectReq(param)
        setItemRecep(res);
        setRecipe(null);
    }
    useEffect(()=>{
        fetchSelect(props.category);
    }, [props.category])


    const cardView = (e)=>{
        setItemRecep([]);
        setRecipe(e.target.id);
    }
    const backList =(e)=>{
        fetchSelect(e.target.id);
        console.log(e.target.id);
    }


    return (
        <div className="d-flex align-content-start flex-wrap container item-wrap">
            {itemRecep && itemRecep.map((item, index) => <div onClick={cardView} className="ietm-list " id={item['strMeal']} key={index} >{item['strMeal']}</div>)}
             <CardRecipe recept={recipe} back={backList}/>
        </div>
    );
};

export default SelectList;