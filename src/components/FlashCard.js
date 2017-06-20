import React from 'react'

class FlashCard extends React.Component {
  render() {
    let cards = this.props.cards.map( (card)  => {
      return (<li>{card}</li>)
    });

    return (
      // possible solution? cards.title, return no error but does not render title
      <ul>
        {cards}
      </ul>
    )
  }
}

export default FlashCard;
