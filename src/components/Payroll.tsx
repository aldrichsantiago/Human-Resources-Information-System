import React, { useState } from 'react'
import PageTitle from './ui/PageTitle'
import TanstackTable from './ui/TanstackTable'
import { createColumnHelper, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ReactSelect from 'react-select';
import Select from './ui/Select';
import { Button } from './ui/Input';

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

export default function Payroll() {
    const [printModal, setPrintModal] = useState(false)
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

    const openModal = (stateModalFunction:  any) => stateModalFunction(true);
    const closeModal = (stateModalFunction:  any) => stateModalFunction(false);

    const employee_table = useReactTable({
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
                        <PageTitle title='Payroll' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur!'/>
                    </div>
                </div>
                <div className='my-3 flex justify-end'>
                    <Button 
                    title="Print"
                    onClick={()=>openModal(setPrintModal)}/>
                    
                </div>
                <TanstackTable.Table table={employee_table}>
                <TanstackTable.Caption>
                  Payroll Processing
                  <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                    View all the payroll details of our employees.
                  </p>
                </TanstackTable.Caption>

                <TanstackTable.THead isSortable />
                <TanstackTable.TBody />
              </TanstackTable.Table>
            </div>
            <Modal open={printModal} onClose={()=>closeModal(setPrintModal)} center classNames={{modal: 'modal-xs'}}>
              <div className=" h-[300px]">
                <h2 className='text-3xl font-bold mb-8'>PRINT</h2>
                <Select
                  label_id="filter_1"
                  label="Payslip Type"
                  placeholder="Select an option"
                  className="md:w-[450px]"
                  options={[
                    { value: 'payslip v1', label: 'Payslip v1' },
                    { value: 'payslip v2', label: 'Payslip v2' },
                    { value: 'payslip v3', label: 'Payslip v3' }
                  ]}
                />
                <div className="w-full flex">
                </div>
                <Button
                title="Print Payslip"
                />
              </div>
             
            </Modal>
        </main>
        
    </>
  )
}
