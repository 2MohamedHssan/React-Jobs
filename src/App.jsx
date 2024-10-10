import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider, useLoaderData} from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout'
import HomePage from './Pages/HomePage'
import Jobs from './Pages/Jobs'
import AddJobs from './Pages/AddJobs'
import NotFound from './Pages/NotFound'
import JobPage, { JobLoder} from './Pages/JobPage'
import EditPage from './Pages/EditPage'

export const App = () => {
  const addsubmite = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  const updating = async (jobs) => {
    const res = await fetch(`/api/jobs/${jobs.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(jobs)
    });
    return;
  }
  
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE' })
    return
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path='/Jobs' element={<Jobs />} />
        <Route path='/Jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={JobLoder} />
        <Route path='/AddJobs' element={<AddJobs addjobsubmite={ addsubmite} />} />
        <Route path='/edit/:id' element={<EditPage updatingsubmite={updating} />} loader={JobLoder}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
)
  return <RouterProvider router={router}/>
}
