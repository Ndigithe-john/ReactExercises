
import questions from '../data/data'
import Card from './Card'
import '../index.css'
import { useState } from 'react'
const FlashCards = () => {
    const [selectedId, setSelectedID]=useState(null)
    function clickHandler(){
        setSelectedID(questions.id)
    }
  return (
    <div className='flashcards'> 
    {questions.map(question=><Card select={selectedId} question={question} key={question.id} onclick={clickHandler} />)}
    </div>
  )
}

export default FlashCards