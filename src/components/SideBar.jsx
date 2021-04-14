import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import {sidbarReq} from '../utils/request';


export default function SideBar(props) {

    const [list, setList] = useState([]);

    const fetchCategory =  async ()=>{
    const  res = await sidbarReq()
    setList(res);
    }
    useEffect(()=>{
        fetchCategory()
    }, [])

    return (
        <div style={{ minWidth: '250px'}}>
            <Table striped bordered hover variant="dark" style={{height: '100%' }}>
                <thead>
                <tr>
                    <th>Category of recipe</th>
                </tr>
                </thead>
                <tbody>

                {list.map((item, index) => <tr key={index} onClick={props.select}><td id={item['strCategory']}>{item['strCategory']}</td></tr>)}

                </tbody>
            </Table>
        </div>
    );
}