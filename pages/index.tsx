import HomeComponent from '../components/Home';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <HomeComponent />
    </div>
  )
}

export default Home