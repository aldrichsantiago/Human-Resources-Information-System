import React from 'react'
import PageTitle from './ui/PageTitle'
import Select from './ui/Select'
import { Button } from './ui/Input'

export default function Report() {
  return (
    <>
        <main id="content" className="flex-1 p-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="px-4 py-6 sm:px-0">
                    <div className="rounded-lg max-h-32 mb-2">
                        <PageTitle title='Report' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur!'/>
                    </div>
                </div>
                <div className="flex flex-wrap gap-9">
                    <Select
                    label_id="filter_1"
                    label="Report Type"
                    placeholder="Select an option"
                    className="md:w-[500px]"
                    options={[
                        { value: '', label: '' },
                        { value: 'headcount', label: 'Employee Headcount Report' },
                        { value: 'turnover', label: 'Turnover Report' },
                        { value: 'payroll', label: 'Payroll Summary Report' },
                        { value: 'recruitment', label: 'Recruitment and Hiring Report' },
                        { value: 'performance', label: 'Employee Performance Report' },
                        { value: 'attendance', label: 'Time and Attendance Report' }
                    ]}
                    />
                        <Select
                    label_id="filter_1"
                    label="File Type"
                    placeholder="Select an option"
                    className="md:w-[500px]"
                    options={[
                        { value: '', label: '' },

                        { value: 'excel', label: 'Excel' },
                        { value: 'pdf', label: 'PDF' },
                    ]}
                    />
                </div>
                <Button
                    title="Generate Report"
                />
            </div>
        </main>
    </>
  )
}
