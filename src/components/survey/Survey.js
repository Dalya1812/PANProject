import {useState} from "react";
import Food from "./Food";
import Start from "./Start";
import './Survey.css'
import food from '../../assets/images/food.png'
const sections = ["start","food","children"]
export default function Survey() {

const [showingSection,setShowingSection] = useState(0)

    function getShowingElement() {
        switch(sections[showingSection]) {
         case 'start':
                return <Start/>
         case 'food':
                return <Food/>
        }
        return null
    }

function nextSection()  {
    if(showingSection === sections.length-1)
        return
    setShowingSection(showingSection+1)
}

return <div>
<div className="time-line">
    <div className="time-line-container">
<div className="time-line-circle">
    {showingSection >=0 && <img src={food}/>}
</div>
<div className="time-line-circle">

   {showingSection >=1 && <img src={food}/>}
</div>
<div className="time-line-circle">

   {showingSection >=2 && <img src={food}/>}
</div>
        </div>
        <hr />
</div>
        <div className="showing_section_survey">
        {getShowingElement()}
        </div>
    <button onClick={nextSection}>Next</button>
    <button>Prev</button>
</div>

}