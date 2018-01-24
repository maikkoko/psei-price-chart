import asyncComponent from '../../containers/AsyncComponent'

const AsyncHome = asyncComponent(() =>
  import(/* webpackChunkName: "stock" */ './components/Stock')
)

export default AsyncHome
