import React from "react";
import './Listing.css'

function Listing({items = []}) {

  function quantityLevel(quantity) {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    if (quantity >= 20) return 'level-high';
  }

  function title50(title) {
    return (title.length > 50) ? title.substring(0, 50) + '...' : title
  }

  function showPrice(code, price) {
    switch (code) {
      case 'USD':
        return '$' + price;
      case 'EUR':
        return '€' + price;
      default:
        return price + ' ' + code;
    }
  }

  return (
    <div className="item-list">
      {items.filter(item => item.state !== 'removed')
        .map(item => 
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img alt="img" src={item.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{title50(item.title)}</p>
            <p className="item-price">{showPrice(item.currency_code, item.price)}</p>
            <p className={'item-quantity ' + quantityLevel(item.quantity)}> left {item.quantity}</p>
          </div>
        </div>      
      )}
    </div>
  )
}

export default Listing;