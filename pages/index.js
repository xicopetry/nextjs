import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Confraria da Mulher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Domínio à venda
        </h1>
        <h3>
          <em>Entre em contato através do email:</em>
        </h3>
        <h3>
          <em>xico.petry@gmail.com</em>
        </h3>
      </main>
    </div>
  )
}
