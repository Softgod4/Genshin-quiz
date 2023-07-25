import './assets/css/assets.css'
import './index.css'
import quizData from './quiz.json'
import { useState, useEffect } from 'react'

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  if (showQuiz) { return <Quiz/>}

  return (
    <div className="main flex flex-col justify-center items-center h-screen w-screen">
      <div className="window flex flex-col justify-center items-center p-4 bg-white rounded-xl max-w-2xl">
        <img src="/genshin-logo.png" alt="" className='w-2/3 rounded-2xl'/>
        <h1 className='h2_title mb-8 text-black text-center text-3xl'>Твой парень в геншин импакт</h1>
        <button onClick={() => setShowQuiz(true)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-8 rounded-xl border-solid'>Начать</button>
      </div>
    </div>
  )
}

function Quiz() {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  
  useEffect(() => {
    let random = Math.floor(Math.random() * 2); 
    setScore(score + random)
    console.log(score)
  }, [count])

  if (count === 43) {
    return <QuizEnd count = {score} />;
  }

  let img = `/genshin-card/${count + 1}.png`

  return (
    <div className="main flex flex-col justify-center items-center h-screen w-screen">
      <div className="window flex flex-col justify-center items-center p-4 bg-white rounded-xl max-w-2xl sm:max-h-[50%] max-h-[90%]">
        
        <img src={img} alt="" className='max-w-full max-h-[60%] rounded-2xl mb-2 mt-5'/>
        <h1 className='h2_title text-black text-center break-words'>{quizData[count].question}</h1>
        <p className='mb-7 text-xl'>{count} из 42</p>

        <div className="grid gap-4 grid-cols-1 grid-rows-4 whitespace-nowrap sm:grid-cols-2 sm:grid-rows-4">
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[0].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[1].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[2].value}</button>
          <button onClick={() => setCount(count + 1)} className='glow-on-hover text-xl bg-cyan-950 text-white py-2 px-20 rounded-xl border-solid max-w-3xl max-h-12 text-center'>{quizData[count].answers[3].value}</button>
        </div>

      </div>
    </div>
  )
}

function QuizEnd(props: { count: number }) {
  
  let img;
  let text;
  let points = props.count;

  if (points >= 11 && points <= 13) {
    img = '/end1.png';
    text = 'Дилюк — тихий, рассудительный, холостяк один из самых богатых людей в Монштадте. Никого вам не напоминает? Возможно он и не прыгает по крышам ночью, но этого героя мы точно заслужили. Его пламенный меч сметет с дороги любого врага. Возможно немногие знают сколько полезного принес этому городу Дилюк оставаясь в тени, но мы с вами знаем и ему всегда найдется место в нашем отряде.'
  } else if (points >= 14 && points <= 16) {
    img = '/end2.png';
    text ='Венти — этот веселый  вечно жизнерадостный бард не совсем тот, кем кажется. Но истинную его личность, пожалуй, вы узнаете сами. А вот со своим луком этот персонаж управляется не хуже чем с лирой. Его анемо способности не только идеальный для изучения мира, но и просто необходимы для прохождения сложного контента игры. '
  } else if (points >= 18 && points <= 20) {
    img = '/end3.png'
    text = 'Кэйа — капитан Ордо Фавониус один из базовых персонажей Геншин Импакт который присоединяется к вашей группе в течении прохождения сюжета. Несмотря на не самые сильные боевые способности может быть крайне полезен в путешествии. Его Элементальный навык позволит вам добраться до таких мест о которых другие Крио персонажи могут только мечтать. '
  } else if (points >= 21 && points <= 23) {
    img ='/end4.png'
    text = 'Чжун Ли — взрослый и спокойный молодой человек работающий консультантом в Ритуальном Бюро Ваншэн. Он многое знает об Архонтах и Старой войне. Размах его Гео Взрыва стихий поражает воображение и просто стирает с лица земли врагов, а элементарный навык может быть крайне полезен при исследовании. Но если соберетесь по магазинам вместе с Чжун Ли проверьте не забыл ли он Мору, ну так на всякий случай. '
  } else if (points >= 24 && points <= 26) {
    img ='/end5.png'
    text = 'Вы тоже гей? автор этого сайта тоже!'
  } else if (points >= 27 && points <= 28 && points === 28) {
    img = 'end6.png'
    text = 'Те, с кем приключилась беда в лесу Авидья, будут рады повстречать лесного стража Тигнари. Но если беда приключилась с вами по собственной глупости, то встреча с Тигнари может оказаться неоднозначной. Тигнари решает проблемы быстро и профессионально, но в то же время не упустит случая строго отчитать провинившегося.  Как говорится, тот, кто недооценивает тропический лес, получит свой урок. А тот, кто недооценивает лесного стража, получит целую «Лекцию по выживанию в дикой природе» Конечно, это лишь слухи. При встрече с Тигнари не стоит слишком переживать. Любой человек с ясной головой сможет понять его простые и понятные объяснения.' 
  }


  return (
    <div className="main flex flex-col justify-center items-center h-screen w-screen">
       <div className="window flex flex-col justify-center items-center p-4 bg-white rounded-xl max-w-2xl sm:max-h-[100%] h-auto">
          <img src={img} alt="" className='max-w-full max-h-[75%] rounded-2xl mb-2 mt-5'/>
          <h1 className='h2_title text-black text-center break-words'>Ваш парень: {}</h1>
          <p className='mb-7 text-sm'>{text}</p>
       </div>
    </div>
  )
}

export default App