import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

// Components
import Board from '../components/board'

export default function Home() {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  )
}