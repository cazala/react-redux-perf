import React, { PureComponent, PropTypes } from 'react'
import Item from '../containers/Item'
import Infinite from 'react-infinite'

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
          <Infinite elementHeight={18} useWindowAsScrollContainer>
            {items.map(item =>
              <Item
                key={item.id}
                id={item.id}
              />
            )}
          </Infinite>
        </ul>
      </div>
    )
  }
}

List.propTypes = propTypes

export default List
