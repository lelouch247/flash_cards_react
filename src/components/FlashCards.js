import React from 'react'
import FlashCard from './FlashCard'

class FlashCards extends React.Component {
  constructor(props) {
    super(props)
      this.state = {cards: [
        // I need Component FlashCards to scope here to get title and front
        // possible solution? this.props.cards.title.map (defeats purpose of loop)

        // Component FlashCard loops through the state cards and has var cards
        // possible solution? maybe I can do card.title? (returns card 1 in browser)

        // return front and title, possible solution? card.title, card.front
        // returns front: var but overwrites title
        // I can write card.front somewhere else if it's still inside loop funct
        // False I cannot write card.front cause it can only return once

        { title: 'Card 1', front: 'What gem do you use for testing' }
                        //  {
                        //   title: 'Card 1',
                        //   front: 'What gem do you use for testing',
                        //   back: 'rspec-rails'
                        // },
                        // {
                        //   title: 'Card 2',
                        //   front: 'What gem do you use to test code',
                        //   back: 'pry'
                        // },
                        // {
                        //   title: 'Card 3',
                        //   front: 'What gem can you use for css',
                        //   back: 'Matrialize-sass or bootstrap'
                        // },
          ]};

}

  // displayFlashCards = () => {
  //   return this.state.cards.map( card => {
  //     return(<FlashCard card={card} />);
  //   });
  // }

  render() {
      return(
        <div>
            <FlashCard cards={this.state.cards} />
        </div>
      )
    }
  }


export default FlashCards;
