import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Room from '../components/room';
import Loader from "../components/Loader";
import  Error from "../components/Error";
import { DatePicker} from 'antd';
import 'antd/dist/antd.css';
import moment from "moment";
const {RangePicker}=DatePicker;



function Homescreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [fromdate, setfromdate] = useState('');
    const [todate, settodate] = useState('')
    


    const fetchRooms = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/rooms/getallrooms');
            console.log("Fetched data:", data);
            
            if (data.rooms && Array.isArray(data.rooms)) {
                setRooms(data.rooms);
            } else {
                console.error("Fetched data does not contain an array of rooms");
            }
            setLoading(false);
        } catch (error) {
            setError(true);
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);
    
    function filterByDate(dates){
        console.log(moment(dates[0]).format("DD-MM-YYYY"))
        console.log(moment(dates[1]).format("DD-MM-YYYY"))
        setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
        settodate(moment(dates[1]).format('DD-MM-YYYY'))

    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4">
            
    
    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />

    


                </div>
                </div>
            <div className="row justify-content-center mt-5 ">
        
            {loading ? (
               <h1><Loader/></h1> 
            ) : rooms.length>1 ?(
                rooms.map((room) => {
                    return <div className="col md-9 mt-3">
                        <Room room={room}/>
                        </div>
                })
                
            ) : (
                <Error/>
                
            )}
          </div>  
          </div>
    
    );
}

export default Homescreen;