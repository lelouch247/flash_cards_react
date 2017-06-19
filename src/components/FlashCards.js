import React from 'react'
import FlashCard from './FlashCard'

class FlashCards extends React.Component {
  state = {cards: [
                     {
                      title: 'Card 1',
                      front: 'What gem do you use for testing',
                      back: 'rspec-rails'
                    },
                    {
                      title: 'Card 2',
                      front: 'What gem do you use to test code',
                      back: 'pry'
                    },
                    {
                      title: 'Card 3',
                      front: 'What gem can you use for css',
                      back: 'Matrialize-sass or bootstrap'
                    },
]};


  displayFlashCards = () => {
    return this.state.cards.map( card => {
      return(<FlashCard card={card} />);
    });
  }

  render() {
      return(
        <div>
          { this.displayFlashCards() }
        </div>
      )
    }
  }


export default FlashCards;
