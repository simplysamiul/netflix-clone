import { useEffect } from 'react';
import { useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import axios from "axios";
import './home.scss';

const Home = ({type}) => {
    const [genre, setGenre] = useState(null);
    const [lists, setLists] = useState([]);
    useEffect(()=>{
        const getRandomList = async () =>{
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, 
                    {
                        headers: {
                            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTVmZGFjYmI0ZDI2YjY5ZGY5N2Y3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE4ODc5NCwiZXhwIjoxNjYwNjIwNzk0fQ.QWRcfHMv8lv6hgZXuKFJLm3QTUosq9p2lpFeI4B_hIA"
                        }
                    }
                    );
                    setLists(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        // call this function
        getRandomList();
    },[genre, type]);
    return (
        <div className='home'>
            <Navbar />
            <Featured type={type} />
            {
                lists.map((list) => (
                    <List list={list} key={list._id} />
                ))
            }
        </div>
    );
};

export default Home; 