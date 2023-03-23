import UIDInput from '@/components/uid/UIDInput'


export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100%]">
          <div className='absolute'>
            <UIDInput/>
          </div>
      </div>
    </main>
  )
}
