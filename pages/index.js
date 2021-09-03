import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../src/components/Calendar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const calculateWeeksLived = (date) => {
    const todayDate = new Date().getTime()
    const birthDate = new Date(date).getTime()
    return parseInt((todayDate - birthDate) / (24 * 3600 * 1000 * 7))
  }

  const handleBirthChange = (event) => {
    setBirth(event.target.value)
    setWeeksLived(calculateWeeksLived(birth))
  }

  const handleExpectancyChange = (event) => {
    setLifeExpectancy(event.target.value)
  }

  const initialLifeExpectancy = 100
  const initialBirth = '1988-05-05'
  const [birth, setBirth] = useState(initialBirth)
  const [weeksLived, setWeeksLived] = useState(calculateWeeksLived(initialBirth))
  const [lifeExpectancy, setLifeExpectancy] = useState(initialLifeExpectancy)

  return (
    <div className={styles.container}>
      <Head>
        <title>My Life in Weeks</title>
        <meta name="description" content="My Life in Weeks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Life in Weeks</h1>
        <div>
          <label>
            Birth:
            <input type="date" value={birth} onChange={handleBirthChange} />
          </label>
        </div>
        <div>
          <label>
            Life expectancy in years:
            <input
              type="number"
              id={styles.expectancy}
              value={lifeExpectancy}
              onChange={handleExpectancyChange}
            />
          </label>
        </div>
        <br />
        <div id={styles.container}>
          <div id={styles.calendar}>
            <Calendar
              lifeExpectancyInYears={lifeExpectancy}
              weeksLived={weeksLived}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
