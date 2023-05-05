import { useRef, useState } from 'react'
import psApi from '../api/psApi'
import Dashboard from '../components/dashboard/Dashboard'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import BootstrapThemeKit from './BootstrapThemeKit'

export default function Home() {
  return (
    <>
      {/* <BootstrapThemeKit/> */}
      <section id="homepage" className="homepage">
        <div className="container mt-3 border border-black">
          <div className="row">
            <div className="col-md-3 col-sm-3 d-none d-sm-block">
              <Navbar />
            </div>
            <div className="col-12 col-sm-9 col-md-6">
              <Dashboard />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
