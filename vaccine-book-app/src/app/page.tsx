import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import HospitalCard from '@/components/HospitalCard'

export default function Home() {
  return (
    <main style={{display:'flex' , flexDirection:'column'}}>
      <Banner />
      <div style={{display: 'flex' , justifyContent: 'center' ,height: '250px'}}>
        <ProductCard />
      </div>
      <div className='location' style={{marginTop: '20px' ,backgroundColor: 'rgb(9,21,42)'}}>
        <h2 className='font-bold text-lg' style={{marginLeft: '70px',marginTop: '20px' , color: 'white'}}>
          Cooperating hospitals
        </h2>
        <div className='hospital-list' style={{display: 'flex' , justifyContent: 'space-around'}}>
          <HospitalCard 
            hospitalName='Chulalongkorn Hospital'
            imgSrc='/img/chula.jpg'
          />
          <HospitalCard 
            hospitalName='Thammasat Hospital'
            imgSrc='/img/thammasat.jpg'
          />
          <HospitalCard 
            hospitalName='Rajavithi Hospital'
            imgSrc='/img/rajavithi.jpg'
          />
        </div>
      </div>
    </main>
  )
}
