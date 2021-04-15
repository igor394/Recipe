import React, {useCallback, useContext, useEffect, useState} from 'react';
import CardRecipe from './CardRecipe';
import {selectReq} from '../utils/request';
import Context from '../context/context';


const SelectList = (props) => {

    const {contx, setContx, clearItems} = useContext(Context);
    const [itemRecep, setItemRecep] = useState([]);
    const [recipe, setRecipe] = useState(null)

    const fetchSelect = async (param) => {
        const res = await selectReq(param)
        try{
            setItemRecep(res);
            setRecipe(null);
        }catch (e){
            alert(e.message);
        }
    }

    useEffect(() => {
        fetchSelect(props.category);
    }, [props.category])

    const cardView = useCallback((e) => {
        setItemRecep([]);
        setContx([])
        setRecipe(e.target.id);
    },[setContx])

    const backList = useCallback((e) => {
        fetchSelect(e.target.id);
    },[])

    let out = itemRecep && itemRecep.map((item, index) => <div onClick={cardView} className="ietm-list " id={item['strMeal']} key={index}>{item['strMeal']}</div>);
    if (contx !== null && contx !== undefined && contx.length > 0) {
        out = contx.map((item, index) => <div onClick={cardView} className="ietm-list " id={item['strMeal']} key={index}>{item['strMeal']}</div>);
    }

    return (
        <div className="d-flex justify-content-center flex-wrap" style={{width: '100%'}}>
            {out}
            {clearItems() && <CardRecipe recept={recipe} back={backList}/>}
        </div>
    );
};

export default SelectList;