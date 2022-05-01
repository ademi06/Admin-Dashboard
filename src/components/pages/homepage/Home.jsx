import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import './home.css';
import { userData } from '../../../dummyData';
 

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data ={userData} title= "User Analytics" grid dataKey="Active User" />
    </div>
  );
}
 