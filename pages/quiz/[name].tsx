import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from '../../styles/Quiz.module.css'
import { useRouter } from 'next/router'

type quizType = {
  title: string,
  description: string,
  answers: {
    id: number,
    text: string
  }[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { name: 'chris' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/quiz');
  const quizArray = await res.json();

  return {
    props: {
      quizArray
    }
  }
}

export default function QuizWrapper({ quizArray }: { quizArray: quizType[] }) {
  const router = useRouter()
  const {name} = router.query
  return (
    <>
      <h1>Quiz from { name }</h1>
      <ol>
        {quizArray.map((quiz, i) => <li key={i}><Quiz title={quiz.title} description={quiz.description} answers={ quiz.answers }/></li>)}
      </ol>
    </>
  )
}

function Quiz({title, description, answers}: quizType) {
  return (
    <>
      <h4 className={styles.quizTitle}>{ title }</h4>
      <p className={styles.quizDescription}>{ description }</p>
      <ul>
        {answers.map((answer, i) => <li key={i}>{answer.text}</li>)}
      </ul>
    </>
  )
}
