import Image from 'next/image'
import styles from './page.module.css'
import TabBar from './components/tabbar/tabbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <TabBar></TabBar>
    </main>
  )
}
