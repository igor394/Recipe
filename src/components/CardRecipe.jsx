import React, {useEffect, useState} from 'react';
import {cardReq} from "../utils/request";
import {Card, Button} from 'react-bootstrap'


const CardRecipe = (props) => {
    const [recipe, setRecipe] = useState([])

    const fetchCard = async (param) => {
        try{
            const res = await cardReq(param);
            setRecipe(res);
        } catch(e){
            alert(e.message);
        }
    }

    useEffect(() => {
        if (props.recept) {
            fetchCard(props.recept)
        } else setRecipe([])

    }, [props.recept])


    return (
        <div>
            {recipe.length > 0 &&
                <Card style={{width: '30rem', margin: '10px'}}>
                    <Card.Img variant="top" src={recipe[0]['strMealThumb']}/>
                    <Card.Body>
                        <Card.Title>{recipe[0]['strMeal']}</Card.Title>
                        <Card.Text>
                            {recipe[0]['strInstructions']}
                        </Card.Text>
                        <Button id={recipe[0]['strCategory']} onClick={props.back} variant="dark">Go back</Button>
                    </Card.Body>
                </Card>}
        </div>
    )
}

export default CardRecipe;