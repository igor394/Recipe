import React, {useContext, useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import {sidbarReq} from '../utils/request';
import Context from '../context/context';


export default function SideBar(props) {
    const {contx} = useContext(Context)
    const [list, setList] = useState([]);

    const fetchCategory = async () => {
        const res = await sidbarReq()
        try{
            setList(res);
        }catch (e){
            alert(e.message);
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    if (contx !== null && contx !== undefined && contx.length > 0) return null;

    return (
        <div style={{minWidth: '250px'}}>
            <Table striped bordered hover variant="dark" style={{height: '100%'}}>
                <thead>
                <tr>
                    <th>Category of recipe</th>
                </tr>
                </thead>
                <tbody>

                {list.map((item, index) => <tr key={index} onClick={props.select}>
                    <td id={item['strCategory']}>{item['strCategory']}</td>
                </tr>)}

                </tbody>
            </Table>
        </div>
    );
}