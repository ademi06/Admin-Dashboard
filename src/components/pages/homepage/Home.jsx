import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import './home.css';
import { userData } from '../../../dummyData';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';
import VerticalSlider from '../../verticalSlider/VerticalSlider';
import { useState } from 'react';
 

const Home = () => {
  const [getValue, setGetValue] = useState(1);
  

  let newValue = {};
  let sliderValue =getValue ;
  const transformedData = userData.map(calculatedNewMonth);
  function calculatedNewMonth(month){
    const newActiveUserValue = sliderValue * month["Active User"];
    newValue = {...month, "Active User": newActiveUserValue}
    return newValue;
  }

  return (
    <div className="home">
        <FeaturedInfo/>
        <div className="homeContainer">
        <VerticalSlider 
            changedValue = {getValue => setGetValue(getValue)} 
      />
        <Chart data ={transformedData} title= "User Analytics" grid dataKey="Active User" />
        </div>
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  );
  }

export default Home;