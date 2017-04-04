import { connect } from 'react-redux'
import { getList } from '../selectors'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return {
    items: getList(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //..
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
