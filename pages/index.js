import styles from '../styles/Home.module.css'

export default function Home({ msg }) {
  return (
    <div className={styles.container}>
      <h1>{msg}</h1>
    </div>
  )
}

export async function getStaticProps() {
  const responseJson = await fetch("http://localhost:3000/api/hello")
  const response = await responseJson.json()

  return {
    props: response,
    revalidate: 60
  }
}