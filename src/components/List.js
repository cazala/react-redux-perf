import React, { Component, PropTypes } from 'react'
import Item from './Item'

const propTypes = {
  items: PropTypes.array
}

class List extends Component {
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
              name={item.name}
              author={item.author}
              selected={item.selected}
              onSelect={onSelect}
            />
          )}
        </ul>
      </div>
    )
  }
}

List.propTypes = propTypes

export default List
