import React from 'react'
import PageHeading from '@/components/PageHeading'
import SectionCards from './SectionCards'
import { Card, CardContent } from '@/components/ui/card'

const Dashboard = () => {
  return (
    <div className='px-2 lg:px-3'>
      <PageHeading title="Dashboard" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 md:gap-6">
            <SectionCards />
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                test
              </CardContent>
            </Card>

            <div className="px-4 lg:px-6">
              {/* <ChartAreaInteractive /> */}
            </div>
            {/* <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard