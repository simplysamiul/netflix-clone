import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import './listItem.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({index, item}) => {
    const [isHover, setIsHover] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() =>{
        const getMovie = async()=>{
            try {
                const res = await axios.get("/movies/find/"+item, {
                    headers: {
                        token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTVmZGFjYmI0ZDI2YjY5ZGY5N2Y3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDE4ODc5NCwiZXhwIjoxNjYwNjIwNzk0fQ.QWRcfHMv8lv6hgZXuKFJLm3QTUosq9p2lpFeI4B_hIA"
                    }
                });
                setMovie(res.data);
                
            } catch (error) {
                console.log(error)
            }
        }
        getMovie();
    },[item]);
    return (
        <Link to="/watch" state={movie}>
        <div className='listItem'
        style={{left : isHover && index * 225 -50 + index * 2.5}}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            <img src={movie.img} alt="" />
            {isHover && (
            <>
                <video src={movie.trailer} autoPlay={[true]} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownAltOutlined className='icon' />
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className='limit'>+{item.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">
                            {movie.genre}
                        </div>
                    </div>
            </>
                )}
        </div>
        </Link>
    );
};

export default ListItem;