import React from 'react'
import PageTitle from './ui/PageTitle'
import Card from './ui/Card'
import { AxisOptions, Chart } from 'react-charts'

export default function Dashboard() {

    type DailyStars = {
        date: Date,
        stars: number,
      }
      
      type Series = {
        label: string,
        data: DailyStars[]
      }

      
      const data: Series[] = [
        {
          label: 'React Charts',
          data: [
            {
              date: new Date(),
              stars: 2023,
            },
            {
              date: new Date('June 16, 2024'),
              stars: 300,
            }
            // ...
          ]
        },
        {
          label: 'React Query',
          data: [
            {
              date: new Date('June 10, 2024'),
              stars: 3230,
            },
            {
              date: new Date('June 16, 2024'),
              stars: 8000,
            }
            // ...
          ]
        }
    ]

    console.log(new Date());
    
    const primaryAxis = React.useMemo(
        (): AxisOptions<DailyStars> => ({
          getValue: datum => datum.date,
        }),
        []
      )
    
      const secondaryAxes = React.useMemo(
        (): AxisOptions<DailyStars>[] => [
          {
            getValue: datum => datum.stars,
            elementType: 'bar'
          },
        ],
        []
      )

  return (
    <>
        <main id="content" className="flex-1 p-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="px-4 py-6 sm:px-0">
                    <div className="rounded-lg max-h-32">
                        <PageTitle title='Dashboard' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur!'/>
                    </div>
                    <div className="w-full rounded-lg my-8">
                        <div className="w-full flex flex-wrap gap-4">
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={400000}
                                description='+$4800 in the last 6 hours'
                            />
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={400000}
                                description='+$4800 in the last 6 hours'
                            />
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={400000}
                                description='+$4800 in the last 6 hours'
                            />
                            <Card 
                                title='Total Revenue'
                                unit='$'
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>}
                                data={400000}
                                description='+$4800 in the last 6 hours'
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between ">
                        <div className="w-full md:w-1/2 rounded-lg h-64">
                            <Chart
                            typeof='bar'
                            options={{
                                data,
                                primaryAxis,
                                secondaryAxes,
                            }}
                        />
                        </div>
                        <div className="w-full md:w-1/2 rounded-lg h-64">
                            <Chart
                            options={{
                                data,
                                primaryAxis,
                                secondaryAxes,
                            }}
                        />
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    </>
  )
}
