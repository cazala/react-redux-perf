import React, { PureComponent, PropTypes } from 'react'

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func
}

const SELECTED = 'selected';
const NOT_SELECTED = '';

class Item extends PureComponent {

  handleClick = () => {
    const { id, onSelect } = this.props
    onSelect(id)
  }

  render() {
    const {
      id,
      name,
      author,
      selected,
      onSelect
    } = this.props

    return (
      <li className={selected ? SELECTED : NOT_SELECTED} onClick={this.handleClick}>{name} by {author.name}</li>
    )
  }
}

export default Item
