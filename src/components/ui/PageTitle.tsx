

export default function PageTitle({ title, description }:{title: string,  description?: string}) {
  return (
    <>
        <h1 className='text-4xl font-bold text-stone-800'>{title}</h1>
        <p className='text-gray-600 mb-6'>{description}</p>
    </>
  )
}
