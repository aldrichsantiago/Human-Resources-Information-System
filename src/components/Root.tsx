import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Root() {
  return (
    <>
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
      <Sidebar />
      <Outlet />
    </div>
    </>
  )
}
