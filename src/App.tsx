import './assets/css/assets.css'
import './index.css'
import quizData from './quiz.json'
import React, { useState, useEffect } from 'react'

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
  const [score, setScore] = useState(0)
  
  useEffect(() => {
    let random = Math.floor(Math.random() * 10); 
    setScore(score + random)
  }, [count])

  let img = `/genshin-card/${count + 1}.png`

  return (
    <div className="main flex flex-col justify-center items-center h-screen w-screen">
      <div className="window flex flex-col justify-center items-center p-4 bg-white rounded-xl max-w-2xl max-h-70%">
        
        <img src={img} alt="" className='max-w-full max-h-[50%] rounded-2xl mb-2'/>
        <h1 className='h2_title text-black text-center'>{quizData[count].question}</h1>
        <p className='mb-12 text-xl'>{count} из 42</p>

        <div className="grid gap-4 grid-cols-2 grid-rows-2">
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[0].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[1].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[2].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[3].value}</button>
        </div>

      </div>
    </div>
  )
}

export default App