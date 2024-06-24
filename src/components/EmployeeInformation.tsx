import { useState } from "react";
import Card from "./ui/Card";
import PageTitle from "./ui/PageTitle";
import { createColumnHelper, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import TanstackTable from "./ui/TanstackTable";

  // Information
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor('capsule_id', {
      cell: (info) => info.getValue(),
      header: () => <span>Capsule ID</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('capsule_serial', {
      cell: (info) => info.getValue(),
      header: () => <span>Capsule Serial</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: () => <span>Status</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('landings', {
      cell: (info) => info.getValue(),
      header: () => <span>Landings</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('details', {
      cell: (info) => info.getValue(),
      header: () => <span>Details</span>,
      footer: (info) => info.column.id,
    }),
  ];

export default function EmployeeInformation() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabClasses = {
    active: 'py-2 px-6 cursor-pointer rounded-lg text-gray-100 bg-gray-800',
    inactive: 'py-2 px-6  cursor-pointer rounded-lg text-gray-500 bg-gray-200',
  }
  
  const handleTabClick = (option:string) => {
    setActiveTab(option)
  }

  const data = [
    {
        "capsule_serial": "C101",
        "capsule_id": "dragon1",
        "status": "retired",
        "original_launch": "2010-12-08T15:43:00.000Z",
        "original_launch_unix": 1291822980,
        "missions": [
            {
                "name": "COTS 1",
                "flight": 7
            }
        ],
        "landings": 1,
        "type": "Dragon 1.0",
        "details": "Reentered after three weeks in orbit",
        "reuse_count": 0
    },
    {
        "capsule_serial": "C102",
        "capsule_id": "dragon1",
        "status": "retired",
        "original_launch": "2012-05-22T07:44:00.000Z",
        "original_launch_unix": 1335944640,
        "missions": [
            {
                "name": "COTS 2",
                "flight": 8
            }
        ],
        "landings": 1,
        "type": "Dragon 1.0",
        "details": "First Dragon spacecraft",
        "reuse_count": 0
    },
    {
        "capsule_serial": "C103",
        "capsule_id": "dragon1",
        "status": "unknown",
        "original_launch": "2012-10-08T00:35:00.000Z",
        "original_launch_unix": 1349656500,
        "missions": [
            {
                "name": "CRS-1",
                "flight": 9
            }
        ],
        "landings": 1,
        "type": "Dragon 1.0",
        "details": "First of twenty missions flown under the CRS1 contract",
        "reuse_count": 0
    }
]


  //Information
  const table = useReactTable({
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
            <div className="m-2">
              <ul className='flex flex-wrap rounded-lg gap-1'>
                  <li onClick={()=>handleTabClick('dashboard')} className={activeTab == 'dashboard'? tabClasses.active: tabClasses.inactive }>Dashboard</li>
                  <li onClick={()=>handleTabClick('information')} className={activeTab == 'information'? tabClasses.active: tabClasses.inactive }>Information</li>
                  <li onClick={()=>handleTabClick('performance')} className={activeTab == 'performance'? tabClasses.active: tabClasses.inactive }>Performance</li>
              </ul>
            </div>
            { activeTab == 'dashboard' ? 
            <>
              <div className="flex flex-wrap gap-4">
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
              Information
              <TanstackTable.Table table={table}>
                <TanstackTable.Caption>
                  Our products
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your
                    business, and more.
                  </p>
                </TanstackTable.Caption>

                <TanstackTable.THead isSortable />
                <TanstackTable.TBody />
              </TanstackTable.Table>


            </>: activeTab == 'performance' ? 
            <>
              Performance
            </>:<></> }
            
              
          </div>
        </div>
      </main>
    </>
  )
}
