import { useState, useEffect } from 'react'
import { CircleLoader } from 'react-spinners';
import { AllList } from './AllList'

export const JobList = ({isHome}) => {  
  const [jobs, SetJobs] = useState([]);
  const [loding, SetLoding] = useState(true);
  useEffect(() => {
    const dataFetshing = async () => {
      let Api = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(Api);
        const data = await res.json();
        SetJobs(data)
      } catch (error) {
        console.log(Error('Error Fetshing Data'))
      } finally {
        SetLoding(false)
      }
    }
    dataFetshing()
},[])     
     return (
       <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </h2>
           {loding ? <CircleLoader
             cssOverride={{ display: 'block', margin: 'auto' }}
           /> :
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {jobs.map((job) => (
              <AllList key={job.id} job={job} />
               ))}
          </div>
           }
    </div>
  </section>
  )
}
  
// }
