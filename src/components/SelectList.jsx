import React, {useContext, useEffect, useState} from 'react';
import CardRecipe from "./CardRecipe";
import {selectReq} from '../utils/request';
import Context from "../context/context";


const SelectList = (props) => {

    const {contx, setContx} = useContext(Context);
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
        setContx([])
        setRecipe(e.target.id);
    }
    const backList =(e)=>{
        fetchSelect(e.target.id);
    }
    let out = itemRecep && itemRecep.map((item, index) => <div onClick={cardView} className="ietm-list " id={item['strMeal']} key={index} >{item['strMeal']}</div>);
    if( contx!==null && contx!==undefined && contx.length>0 ){
        out = contx.map((item, index) => <div onClick={cardView} className="ietm-list " id={item['strMeal']} key={index} >{item['strMeal']}</div>);
    }


    return (
        <div className="d-flex align-content-start flex-wrap item-wrap">
            {out}
             <CardRecipe recept={recipe} back={backList}/>
        </div>
    );
};

export default SelectList;