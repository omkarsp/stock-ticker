import {getStockData} from '/fakeStockAPI.js'

let previousPrice = 0

function renderStockTicker(stockData) {
  
    const stockDisplayName = document.getElementById('name')
    stockDisplayName.textContent = stockData.name
    
    const stockDisplaySymbol = document.getElementById('symbol')
    stockDisplaySymbol.textContent = stockData.sym
    
    const stockDisplayPrice = document.getElementById('price')
    stockDisplayPrice.textContent = stockData.price
    
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    
    stockDisplayPriceIcon.className = stockData.price > previousPrice ? 'triangle up' : stockData.price < previousPrice ? 'triangle down' : 'triangle right'
    
    const stockDisplayTime = document.getElementById('time')
    stockDisplayTime.textContent = stockData.time
    
    previousPrice = stockData.price
}

setInterval(() => {
  const stockData = getStockData()
  renderStockTicker(stockData)
}, 1500)
