import "./Item.css"
import { useState } from "react";

const Item = ({card}) => {
    const [showLogo, setShowLogo] = useState(true)
    const {name, img, options} = card;
    const handleClick = () => {
        setShowLogo(!showLogo);
    }
  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
        {
            showLogo ? 
            ( <div>
           <img className="card-logo" src={img} alt="" />
           <h3 className="cards-title"> {name} </h3>  
        </div>) 
        :  
        <ul className="list">
            {
                options.map((element, index) => {
                    return <li key={index}> {element} </li>
                })
            }
        </ul>
        }
       
       
    </div>
  )
}

export default Item
