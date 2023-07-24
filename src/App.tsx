import './assets/css/assets.css'
import './index.css'
import React, { useState } from 'react'

const DATA = [
  {
    question: 'вопрос 1',
    answers: [
      {
        id: '1',
        value: 'Я гей',
        point: 1,
      },
      {
        id: '2',
        value: 'Я лесбиянка',
        point: 2,
      },
      {
        id: '3',
        value: 'Ответ 3',
        point: 3,
      },
      {
        id: '4',
        value: 'Ответ 4',
        point: 4,
      }
    ]
  },
  {
    question: 'вопрос 2',
    answers: [
      {
        id: '1',
        value: 'Фак',
        point: 1,
      },
      {
        id: '2',
        value: 'Мокрые трусы',
        point: 2,
      },
      {
        id: '3',
        value: 'Ответ 7',
        point: 3,
      },
      {
        id: '4',
        value: 'Ответ 8',
        point: 4,
      }
    ]
  }
]

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  if (showQuiz) { return <Quiz/>}

  return (
    <div className="main flex flex-col justify-center items-center h-screen w-screen">
      <div className="window flex flex-col justify-center items-center p-4 bg-white rounded-xl max-w-2xl">
        <img src="/genshin-logo.png" alt="" className='w-2/3 rounded-2xl'/>
        <h1 className='h1_title mb-12 text-black text-center'>Твой парень в <br/>геншин импакт</h1>
        <button onClick={() => setShowQuiz(true)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-8 rounded-xl border-solid'>Начать</button>
      </div>
    </div>
  )
}

function Quiz() {
  const [count, setCount] = useState(0)

  return (
    <div className="main flex flex-col justify-center items-center h-screen w-screen">
      <div className="window flex flex-col justify-center items-center p-4 bg-white rounded-xl max-w-2xl">
        
        <img src="/genshin-logo.png" alt="" className='w-2/3 rounded-2xl mb-2'/>
        <h1 className='h1_title text-black text-center'>{DATA[count].question}</h1>
        <p className='mb-12 text-xl'>{count} из 50</p>

        <div className="grid gap-4 grid-cols-2 grid-rows-2">
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid'>{DATA[count].answers[0].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid'>{DATA[count].answers[1].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid'>{DATA[count].answers[2].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid'>{DATA[count].answers[3].value}</button>
        </div>

      </div>
    </div>
  )
}

export default App