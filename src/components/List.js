import React, { PureComponent, PropTypes } from 'react'
import Item from '../containers/Item'

const propTypes = {
  items: PropTypes.array
}

class List extends PureComponent {
  render() {
    const { items, onSelect } = this.props
    return (
      <div>
        <h1>Books</h1>
        <ul>
          {items.map(item =>
            <Item
              key={item.id}
              id={item.id}
            />
          )}
        </ul>
      </div>
    )
  }
}

List.propTypes = propTypes

export default List
