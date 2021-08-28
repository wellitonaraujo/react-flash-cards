import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import { allFlashCards } from  '../data/allFlashCards';
import Button from '../components/Button';
import { helperShuffleArray } from '../helpers/arrayHelpers'

export default function FlashCardsPages() {
  const [ allCards, setAllCards ] = useState(allFlashCards)

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards)
   }

    return(
        <>
          <Header>react-flash-card-v1</Header>
          <Main>

            <div className="text-center mb-4">
              <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
            </div>

            <FlashCards>
               {setAllCards.map(({ id, title, description }) => {
                   return <FlashCard key={id} title={title} description={description} />
                 })
               }
            </FlashCards>

          </Main>
        </>
    );
}
