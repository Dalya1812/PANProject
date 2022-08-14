import {useState} from "react";
import VegFruitPage from "./VeggiAndFruits";
import BeansCereals from "./BeansCereals";
import Start from "./Start";
import './Survey.css'
import food from '../../assets/images/food.png'
import startImg from '../../assets/images/start.png'
import veggiFruits from '../../assets/images/veggiFruit.png'

const sections = ["start","VegFruitPage","beansCereals"]
export default function Survey() {

const [showingSection,setShowingSection] = useState(0)

    function getShowingElement() {
        switch(sections[showingSection]) {
         case '':
                return <Start/>
         case 'start':
                return <Start/>
        case 'VegFruitPage':
            return <VegFruitPage/>
        case 'beansCereals':
            return <BeansCereals/>

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
    {showingSection >=0 && <img src={startImg}/>}
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
    <button  className="buttonMovingLeft" onClick={nextSection}>Next</button>

</div>

}