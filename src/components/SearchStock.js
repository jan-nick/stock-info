import React, { useState } from 'react'

const SearchStock = ({ selectStock }) => {
    const [symbol, setSymbol] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        fetch(
            `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=<IEX_CLOUD_API_KEY>`
        )
            .then(res => res.json())
            .then(res => {
                selectStock(res)
            })
        setSymbol('')
    }
    return (
        <form className="search-stock" onSubmit={handleSubmit}>
            <input
                className="form-input"
                type="text"
                placeholder="Enter Stock Symbol..."
                value={symbol}
                onChange={e => setSymbol(e.target.value)}
                required
            />
            <br />
            <input className="form-submit" type="submit" value="Search" />
        </form>
    )
}

export default SearchStock
