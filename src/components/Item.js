import React, { Component, PropTypes } from 'react'

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func
}

class Item extends Component {

  render() {
    const {
      id,
      name,
      author,
      selected,
      onSelect
    } = this.props

    const style = {
      color: selected ? 'blue' : 'black'
    }

    const onClick = () => onSelect(id)

    return (
      <li style={style} onClick={onClick}>{name} by {author.name}</li>
    )
  }
}

export default Item
