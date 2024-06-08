import React from 'react'
import PageTitle from './ui/PageTitle'
import Card from './ui/Card'

export default function Dashboard() {
  return (
    <>
        <main id="content" className="flex-1 p-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="px-4 py-6 sm:px-0">
                    <div className="rounded-lg max-h-32 mb-2">
                        <PageTitle title='Dashboard' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur!'/>
                    </div>
                    <div className="w-full rounded-lg h-96">
                        <div className="w-full flex flex-wrap gap-4">
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={Number(480832).toFixed(2)}
                                description='+$4800 in the last 6 hours'
                            />
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={Number(480832).toFixed(2)}
                                description='+$4800 in the last 6 hours'
                            />
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={Number(480832).toFixed(2)}
                                description='+$4800 in the last 6 hours'
                            />
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={Number(480832).toFixed(2)}
                                description='+$4800 in the last 6 hours'
                            />

                        </div>
                       
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
