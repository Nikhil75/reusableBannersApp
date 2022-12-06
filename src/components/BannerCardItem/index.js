import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <h1 className="headerText">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more">Show More</button>
    </li>
  )
}

export default BannerCardItem
