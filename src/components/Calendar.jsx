import styles from '../../styles/Home.module.css'

export default function Calendar(props) {
  const weeksInYear = 52
  const lifeExpectancyInWeeks = weeksInYear * props.lifeExpectancyInYears
  let weeksHTML = [];
  for (let i = 1; i <= lifeExpectancyInWeeks; i++) {
    let className = styles.week
    if (i <= props.weeksLived) {
      className += ` ${styles.lived}`
    }
    weeksHTML.push(<div key={i} title={'#' + i} className={className}></div>)
  }
  return (
    <div id={styles.weeks}>
      {weeksHTML}
    </div>
  )
}