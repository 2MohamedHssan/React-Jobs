import { useState, useEffect } from "react"
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link,useLoaderData, NavLink, useParams, useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const JobPage = () => {
  // const Navigate = useNavigate();
  const { id } = useParams();
  const jobs = useLoaderData()
  
  

  // loding ? <CircleLoader cssOverride={{ margin: '100px auto' }} size={150} /> :
  return  (
    <>
      
    <section>
      <div className="container m-auto py-6 px-6">
        <NavLink
        to="/jobs"
        className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
        <FaArrowLeft className="mr-2"/> Back to Job Listings
        </NavLink>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{jobs.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {jobs.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <FaMapMarker className="text-orange-700 mr-1 "/>
                <p className="text-orange-700">{jobs.location}</p>
              </div>
            </div>

              
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">{jobs.description}</p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{jobs.salary}</p>
            </div>
          </main>
          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{jobs.company.name}</h2>

                <p className="my-2">{ jobs.company.description}</p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{jobs.company.contactEmail}</p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{jobs.company.contactPhone}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit/${jobs.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link>
              <button 
              onClick={()=>onDelete(jobs.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </> 
  )
}

const JobLoder = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`)
  const data = await res.json()
  return data
}

export {JobPage as default, JobLoder} 
