import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from '../../styles/Quiz.module.css'
import { useRouter } from 'next/router'
import useSWR from 'swr'

type quizType = {
  title: string,
  description: string,
  answers: {
    id: number,
    text: string
  }[]
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function QuizWrapper() {
  const router = useRouter()
  const { name } = router.query
  const { data } = useSWR('/api/quiz', fetcher)

  return (
    <>
      <h1>Quiz from { name }</h1>
      <ol>
        {data?.map((quiz: quizType, i: number) => <li key={i}><Quiz title={quiz.title} description={quiz.description} answers={ quiz.answers }/></li>)}
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
