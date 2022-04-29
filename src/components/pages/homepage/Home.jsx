import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import './home.css'

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart />
    </div>
  )
}
