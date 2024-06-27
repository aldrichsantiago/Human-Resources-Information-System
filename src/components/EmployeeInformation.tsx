import { useState } from "react";
import Card from "./ui/Card";
import PageTitle from "./ui/PageTitle";
import { createColumnHelper, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import TanstackTable from "./ui/TanstackTable";

  // Information
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('image', {
      cell: url => <img src={url.getValue()} alt="" className="w-6 h-6 rounded-full bg-white" />
    }),
    columnHelper.accessor('employee_id', {
      cell: (info) => info.getValue(),
      header: () => <span>ID</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('full_name', {
      cell: (info) => info.getValue(),
      header: () => <span>Full Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('position_title', {
      cell: (info) => info.getValue(),
      header: () => <span>Position Title</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('employment_status', {
      cell: (info) => info.getValue(),
      header: () => <span>Employment Status</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('department', {
      cell: (info) => info.getValue(),
      header: () => <span>Department</span>,
      footer: (info) => info.column.id,
    }),
  ];

export default function EmployeeInformation() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [data, setData] = useState([
    {
      "employee_id": "C101",
      "full_name": "dragon1",
      "employment_status": "retired",
      "original_launch": "2010-12-08T15:43:00.000Z",
      "original_launch_unix": 1291822980,
      "missions": [
          {
              "name": "COTS 1",
              "flight": 7
          }
      ],
      "department": 1,
      "position_title": "Dragon 1.0",
      "image":"https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535720d39923630d5487d7_peep-47.svg",
      "details": "Reentered after three weeks in orbit",
      "reuse_count": 0
    },{
      "employee_id": "C104",
      "full_name": "dragon1",
      "employment_status": "retired",
      "original_launch": "2010-12-08T15:43:00.000Z",
      "original_launch_unix": 1291822980,
      "missions": [
          {
              "name": "COTS 1",
              "flight": 7
          }
      ],
      "department": 1,
      "position_title": "Dragon 1.0",
      "image":"https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535720d39923630d5487d7_peep-47.svg",
      "details": "Reentered after three weeks in orbit",
      "reuse_count": 0
    },{
      "employee_id": "C103",
      "full_name": "dragon1",
      "employment_status": "retired",
      "original_launch": "2010-12-08T15:43:00.000Z",
      "original_launch_unix": 1291822980,
      "missions": [
          {
              "name": "COTS 1",
              "flight": 7
          }
      ],
      "department": 1,
      "position_title": "Dragon 1.0",
      "image":"https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535720d39923630d5487d7_peep-47.svg",
      "details": "Reentered after three weeks in orbit",
      "reuse_count": 0
    },{
      "employee_id": "C102",
      "full_name": "dragon1",
      "employment_status": "retired",
      "original_launch": "2010-12-08T15:43:00.000Z",
      "original_launch_unix": 1291822980,
      "missions": [
          {
              "name": "COTS 1",
              "flight": 7
          }
      ],
      "department": 1,
      "position_title": "Dragon 1.0",
      "image":"https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535720d39923630d5487d7_peep-47.svg",
      "details": "Reentered after three weeks in orbit",
      "reuse_count": 0
    },
  ])

  const tabClasses = {
    active: 'py-2 px-6 cursor-pointer rounded-lg text-gray-100 bg-gray-800',
    inactive: 'py-2 px-6  cursor-pointer rounded-lg text-gray-500 bg-gray-200',
  }
  
  const handleTabClick = (option:string) => {
    setActiveTab(option)
  }

  //Information
  const employee_table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  //Performance
  const performance_table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });


  return (
    <>
      <main id="content" className="flex-1 p-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg max-h-32 mb-2">
              <PageTitle title='Employee Information' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur!'/>
            </div>
            <div className="my-2">
              <ul className='flex flex-wrap rounded-lg gap-1'>
                  <li onClick={()=>handleTabClick('dashboard')} className={activeTab == 'dashboard'? tabClasses.active: tabClasses.inactive }>Dashboard</li>
                  <li onClick={()=>handleTabClick('information')} className={activeTab == 'information'? tabClasses.active: tabClasses.inactive }>Information</li>
                  <li onClick={()=>handleTabClick('performance')} className={activeTab == 'performance'? tabClasses.active: tabClasses.inactive }>Performance</li>
              </ul>
            </div>
            { activeTab == 'dashboard' ? 
            <>
              <div className="flex flex-wrap gap-4 my-12">
                <Card
                title='Total Employee Count'
                unit='👤'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>}
                data={312}
                description='+21 in the last month'
                />
                <Card
                title='Employees Promoted'
                unit='🏅'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>}
                data={12}
                description='+12 in the last 3 weeks'
                />
                <Card
                title='Employees at work'
                unit='💼'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>}
                data={263}
                description='+12 in the last 2 hours'
                />
                <Card
                title='Employees at work'
                unit='💼'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>}
                data={263}
                description='+12 in the last 2 hours'
                />
              </div>  
            </>: activeTab == 'information' ? 
            <>

            <div>
              <div className="my-2 w-full text-right">
                <button className="py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium">Add Employee</button>
              </div>
              <TanstackTable.Table table={employee_table}>
                <TanstackTable.Caption>
                  Our Employees
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse all of our employees in one table.
                  </p>
                </TanstackTable.Caption>

                <TanstackTable.THead isSortable />
                <TanstackTable.TBody />
              </TanstackTable.Table>
          </div>
              


            </>: activeTab == 'performance' ? 
            <>
              <div className="my-16">
                
                <TanstackTable.Table table={performance_table}>
                  <TanstackTable.Caption>
                    Employee's Performance
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Browse all of our employees' peformance in one table, see who's performing at their best and those who are not.
                    </p>
                  </TanstackTable.Caption>

                  <TanstackTable.THead isSortable />
                  <TanstackTable.TBody />
                </TanstackTable.Table>
              </div>
            </>:<></> }
            
              
          </div>
        </div>
      </main>
    </>
  )
}
