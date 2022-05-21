import styles from '../styles/Home.module.css'
import helloMsg from "./api/hello"

export default function Home({ msg }) {
  return (
    <div className={styles.container}>
      <h1>{msg}</h1>
    </div>
  )
}

export async function getStaticProps() {
  const responseJson = await helloMsg()
  const response = await responseJson.json()

  return {
    props: response,
    revalidate: 60
  }
}
