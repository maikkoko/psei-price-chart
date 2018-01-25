import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchStockData } from '../modules/stock'

import Stock from '../components/Stock'

const mapStateToProps = state => ({
  isFetching: state.stock.isFetching,
  data: state.stock.data,
  hasError: state.stock.hasError,
  errorMessage: state.stock.errorMessage
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchStockData
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Stock)
