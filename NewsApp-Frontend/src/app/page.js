import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import NewsCard from '@/app/newsCard/page'
import ArticlePage from '@/app/articlePage/page'
import Login from '@/app/login/page'
import Image from 'next/image'
import { Children } from 'react'
import DashboardScreen from './dashboard/dashboardScreen/page'

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      {/* <h2>You will select</h2>  */}
       {/* <ArticlePage/> */}
      <NewsCard/>
      <NewsCard/>
      <Login/>
      <DashboardScreen/>
    </main>
    
  )
}
