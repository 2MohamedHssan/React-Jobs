import { Header } from '../components/Header'
import { HomeCards } from '../components/HomeCards'
import { JobList } from '../components/JobList'
import { ViewAll } from '../components/ViewAll'
 const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeCards />
      <JobList isHome={ true } />
      <ViewAll />
    </div>
  )
}
export default HomePage
