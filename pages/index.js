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
        <h3 className={styles.title}>
          <em>Entre em contato através do email:</em> <br> </br>
          <em>xico.petry@gmail.com</em>
        </h3>
      </main>
    </div>
  )
}
