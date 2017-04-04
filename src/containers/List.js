import { connect } from 'react-redux'
import { select } from '../actions'
import { getList } from '../selectors'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
  return {
    items: getList(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: (id) => dispatch(select(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
