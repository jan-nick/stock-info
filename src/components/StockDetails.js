import React from 'react'

const StockDetails = ({ selectedStock }) => {
    const {
        companyName,
        symbol,
        primaryExchange,
        latestPrice,
        changePercent,
        marketCap,
        peRatio
    } = selectedStock
    const priceChange =
        changePercent > 0 ? (
            <span className="plus">
                +{Math.round(changePercent * 10000) / 100}%
            </span>
        ) : (
            <span className="minus">
                {Math.round(changePercent * 10000) / 100}%
            </span>
        )
    return (
        <div className="stock-details">
            <div className="head">
                <h1>{companyName}</h1>
                <p>{primaryExchange}</p>
            </div>
            <h2>{symbol}</h2>
            <div className="fin-data">
                <p>
                    Stock Price: {latestPrice} USD {priceChange}
                </p>
                <p>
                    Market Cap:{' '}
                    {marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    USD
                </p>
                <p>P/E Ratio: {peRatio}</p>
            </div>
        </div>
    )
}

export default StockDetails
