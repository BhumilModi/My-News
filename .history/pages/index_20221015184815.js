import Image from 'next/image'
import NavBar from '../component/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>
      <NavBar></NavBar>
      <div className={styles.main}>
        <h1>My NEWS App</h1>
        <h3>One Stop for all the Latest NEWS</h3>
        <Image src="/4_generated-removebg-preview.png" alt='mic' width={100} height={50}></Image>
      </div>
    </div>
  )
}
