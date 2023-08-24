import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main style={{display:'flex' , flexDirection:'column'}}>
      <Navbar />
      <Banner />
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <ProductCard />
      </div>
    </main>
  )
}
