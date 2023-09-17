import {portfolio} from '../../data'
import PortfolioItem from '../../component/PortfolioItem'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section className='portfolio section'>
      <h2 className="section__title" data-aos="fade-left " data-aos-duration="3000">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
        return <PortfolioItem key={item.id} {...item} />})}
      </div>
    </section>
  )
}

export default Portfolio
