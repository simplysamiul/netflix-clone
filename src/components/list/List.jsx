import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { useRef } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

const List = ({list}) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();
    const handelClick = (direction) =>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        else if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        
    }
    return (
        <div className='list'>
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' 
                onClick={() => handelClick("left")}
                style={{display : !isMoved && "none"}}
                />
                    <div className="container" 
                    ref={listRef}>
                        {list.content.map((item, index) =>(
                        <ListItem index={index} item={item} key={index}/>
                        ))}
                    </div>
                <ArrowForwardIosOutlined
                onClick={() => handelClick("right")} 
                className='sliderArrow right' />
            </div>
        </div>
    );
};

export default List;