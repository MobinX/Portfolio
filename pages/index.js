import Head from "next/head";
import Image from "next/image";
import headerImg from "./assets/header-img.jpg";

export default function Home() {
  return (
    <div className="col pt-4 px-4 md:pt-7 md:px-9 bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400 min-h-screen min-w-full">
      {/* navbar */}
      <div className="row justify-between text-white">
        {/* icon container */}
        <div className="row space-x-2">
          <div className="rounded-full bg-purple-600 w-3 p-3"> {/*icon */}</div>
          <h3 className="font-bold text-2xl">Ae.</h3>
        </div>
        {/* nav link */}
        <div className="row  space-x-5 hidden md:flex">
          <h5  className="font-semibold">Explore</h5>
          <h5 className="font-semibold">Blog</h5>
          <h5 className='font-semibold'>About</h5>
          {/* <Uiluser size="20" color="ffffff" /> */}
        </div>
      </div>

      {/* header */}
      <div className="row  flex-wrap md:flex-nowrap  space-y-1 py-7">
        {/* header img  */}
        <div className="col w-full md:w-1/2  center">
          <div className="col md:w-96 center">
            <Image
              src={headerImg}
              alt="header img"
              className="rounded shadow rounded-t-3xl rounded-b-3xl"
            />
          </div>
        </div>

        {/* header info */}
        <div className="col w-full md:w-1/2 justify-start items-start  py-4  text-white">
          <h2 className="md:text-5xl font-bold">Hallucination Quest Album #2021</h2>
          <p className='text-sm my-5' >@mobinchowdhury</p>
          
          <div className="row w-4/5 justify-between">
            <div className="col space-y-2">
              <p>Current Bids</p>
              <h3 className="font-semibold">3.00 ETH</h3>
              <p className="italic">$9000,00</p>
            </div>
            {/* divider */}
            <div className="h-12 w-1 bg-white py-2"></div>
            <div className="col space-y-2 ">
              <p>Auction end in</p>
              {/* time row */}
              <div className="flex flex-row space-x-3 justify-between">
                {/* time cols */}
                <div className="col space-y-1 center">
                  <h3 className="font-semibold">19</h3>
                  <p className="italic">Hours</p>
                </div>
                <div className="col space-y-1 center">
                  <h3 className="font-semibold">38</h3>
                  <p className="italic">Minutes</p>
                </div>
                <div className="col space-y-1 center">
                  <h3 className="font-semibold">9</h3>
                  <p className="italic">Seconds</p>
                </div>
                </div> 
            </div>

          </div>
        </div>
      </div>

      {/* features */}
      <div></div>
    </div>
  );
}
