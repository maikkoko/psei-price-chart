import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GetStock from 'lib/api'

class Stock extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  // Convert to redux
  state = {
    isValid: true,
    stock: null
  }

  componentDidMount() {
    const { params } = this.props.match

    GetStock(params.symbol)
      .then(response => {
        console.log(response.data)
        this.setState({
          stock: response.data.stock[0]
        })
      })
      .catch(error => {
        console.log(error.message)
        this.setState({
          isValid: false
        })
      })
  }

  render() {
    const { isValid, stock } = this.state

    if (!isValid) {
      return (
        <div>
          <h2>Stock</h2>
          <p>404 Not Found</p>
        </div>
      )
    }

    return (
      <div>
        <h2>Stock</h2>
        <p>{stock ? stock.name : ''}</p>
        <p>{stock ? stock.price.currency + stock.price.amount : ''}</p>
      </div>
    )
  }
}

export default Stock
