export const Header = () => {
  return (
    <div className="header inline-flex flex-col space-y-6 items-center justify-start w-96 pl-10 pr-2.5 pb-2.5">
      <div className="Frame8 flex flex-col space-y-6 items-start justify-start h-56">
        <div className="Frame3 flex flex-col space-y-2.5 items-start justify-start">
          <p className="mainheadline w-72 h-1/2 text-2xl text-gray-700">
            Build Your Awesome Team With Us
          </p>
          <p className="mainheadline w-full text-lg font-extralight text-gray-700">
            We help you to build the ideal team for you with our professional
            mentors
          </p>
        </div>
        <div className="Getstarted btn inline-flex items-center justify-center w-28 h-8 px-2.5 py-1 bg-purple-500 shadow rounded-xl">
          <p className="GetStarted text-sm font-thin text-center text-white">
            Get Started
          </p>
        </div>
      </div>
      <img
        className="unsplash:C3V88BOoRoM w-5/6 h-36 rounded-lg"
        src="https://via.placeholder.com/271x141"
      />
    </div>
  )
}
