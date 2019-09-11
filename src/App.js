import React, { useState } from 'react'
import './styles/style.css'
import SearchStock from './components/SearchStock'
import StockDetails from './components/StockDetails'

const App = () => {
    const [selectedStock, setSelectedStock] = useState('')
    const selectStock = symbol => {
        setSelectedStock(symbol)
        console.log(selectedStock)
    }
    return (
        <div className="app">
            <div className="app-container">
                <h1>Stock Search</h1>
                <SearchStock selectStock={selectStock} />
                {selectedStock ? (
                    <StockDetails selectedStock={selectedStock} />
                ) : (
                    <h2>Look up any stock!</h2>
                )}
            </div>
        </div>
    )
}

export default App
