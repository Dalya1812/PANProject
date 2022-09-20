import mainImgVeg from "../logos/VegetablesAndFruit.png";
import mainImgCer from "../logos/CerealsAndLegumes.png";
import mainImgMeet from "../logos/meetTitle.png";
import mainImgProcessed from "../logos/ProcessedFood.png";
import vegImg from "../logos/Vegetables And Fruit.png";
import cerImg from "../logos/Cereals and legumes.png";
import meetImg from "../logos/meet.png";
import processedImg from "../logos/Processed food.png";

const images = [
  { img: mainImgVeg, imgGroups: [cerImg, meetImg, processedImg] },
  { img: mainImgCer, imgGroups: [vegImg, meetImg, processedImg] },
  { img: mainImgMeet, imgGroups: [cerImg, vegImg, processedImg] },
  { img: mainImgProcessed, imgGroups: [cerImg, vegImg, meetImg] },
];

export default images;
