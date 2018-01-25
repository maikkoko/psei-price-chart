import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Stock extends Component {
  static propTypes = {
    match: PropTypes.object,
    fetchStockData: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    data: PropTypes.array,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string
  }

  componentDidMount() {
    const { params } = this.props.match

    this.props.fetchStockData(params.symbol)
  }

  render() {
    const { isFetching } = this.props

    if (isFetching) {
      return (
        <div>
          <h2>Stock</h2>
          <p>Loading...</p>
        </div>
      )
    }

    return (
      <div>
        <h2>Stock</h2>
        <p>Fetch Success</p>
      </div>
    )
  }
}

export default Stock
