import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex-1">
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-gray-400">ChatGPT</h1>
        <div className="flex-col">
          <div className="flex flex-wrap">
            {" "}
            <div className="p-1 mr-2 border border-gray-300 rounded-lg max-w-[600px] hover:bg-gray-200">
              <div>
                {/*h1 text*/}
                <h1 className="font-bold text-gray-800">
                  Create a personal webpage for me,
                </h1>
              </div>
              <div>
                {/*h2 text*/}
                <h2 className="text-gray-400 text-[15px]">
                  Create a personal webpage for me,dasdasd
                </h2>
              </div>
            </div>
            <div className="p-1 border mt-3 sm:mt-0   border-gray-300 rounded-lg max-w-[600px] hover:bg-gray-200">
              <div>
                {/*h1 text*/}
                <h1 className="font-bold text-gray-800">
                  Create a personal webpage for me,
                </h1>
              </div>
              <div>
                {/*h2 text*/}
                <h2 className="text-gray-400 text-[15px]">
                  Create a personal webpage for me,dasdasd
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            {" "}
            <div className="p-1 mr-2 border border-gray-300 rounded-lg max-w-[600px] hover:bg-gray-200">
              <div>
                {/*h1 text*/}
                <h1 className="font-bold text-gray-800">
                  Create a personal webpage for me,
                </h1>
              </div>
              <div>
                {/*h2 text*/}
                <h2 className="text-gray-400 text-[15px]">
                  Create a personal webpage for me,dasdasd
                </h2>
              </div>
            </div>
            <div className="p-1 border mt-3 sm:mt-0 border-gray-300 rounded-lg max-w-[600px] hover:bg-gray-200">
              <div>
                {/*h1 text*/}
                <h1 className="font-bold text-gray-800">
                  Create a personal webpage for me,{" "}
                </h1>
              </div>
              <div className="flex">
                {/*h2 text*/}
                <h2 className="text-gray-400 text-[15px]">
                  Create a personal webpage for me,dasdasd
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
