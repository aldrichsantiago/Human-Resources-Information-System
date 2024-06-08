import PageTitle from "./ui/PageTitle";

export default function EmployeeInformation() {
  return (
    <>
      <main id="content" className="flex-1 p-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg max-h-32 mb-2">
              <PageTitle title='Employee Information' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur!'/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
