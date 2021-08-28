import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../src/components/Calendar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const calculateWeeksLived = function (birth) {
    const today = new Date().getTime()
    birth = new Date(birth).getTime()
    return parseInt((today - birth) / (24 * 3600 * 1000 * 7))
  }
  const lifeExpectancyInYears = 80
  const birth = '1988-05-05'
  const weeksLived = calculateWeeksLived(birth)
  return (
    <div className={styles.container}>
      <Head>
        <title>My Life in Weeks</title>
        <meta name="description" content="My Life in Weeks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Life in Weeks
        </h1>
        <p className={styles.description}>
          Birth
          <code className={styles.code}>{birth}</code>
          ~
          Life expectancy
          <code className={styles.code}>{lifeExpectancyInYears} years</code>
        </p>
        <div id={styles.container}>
          <div id={styles.calendar}>
            <Calendar lifeExpectancyInYears={lifeExpectancyInYears} weeksLived={weeksLived} />
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
