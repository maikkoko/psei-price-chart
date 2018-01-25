import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

Reactotron.configure('PSEI 30-Day Graph')
  .use(reactotronRedux())
  .connect()
