import Head from "next/head";
import Image from "next/image";
import headerImg from "./assets/header-img.jpg";
import abstractWave from "./assets/abstractWave.jpg";
import whiteEgg from "./assets/whiteegg.jpg"
import pinkEgg from "./assets/pinkEgg.jpg"


export default function Home() {
  return (
    <div className="col pt-4 px-7 md:pt-7 md:px-9 bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400 min-h-screen min-w-full">
      {/* navbar */}
      <div className="row justify-between text-white">
        {/* icon container */}
        <div className="row space-x-2">
          <div className="rounded-full bg-purple-600 w-3 p-3"> {/*icon */}</div>
          <h3 className="font-bold text-2xl">Ae.</h3>
        </div>
        {/* nav link */}
        <div className="row  space-x-5 hidden md:flex">
          <h5 className="font-semibold">Explore</h5>
          <h5 className="font-semibold">Blog</h5>
          <h5 className="font-semibold">About</h5>
          {/* <Uiluser size="20" color="ffffff" /> */}
        </div>
      </div>

      {/* header */}
      <div className="row flex-row-reverse  flex-wrap md:flex-nowrap  space-y-1 py-7">
        {/* header img  */}
        <div className="col items-start order-last  w-full md:w-1/2  center">
          <div className="col w-11/12 md:w-9/12 center">
            <Image
              src={headerImg}
              alt="header img"
              className="rounded shadow rounded-t-3xl rounded-b-3xl"
            />
          </div>
        </div>

        {/* header info */}
        <div className="col w-full  md:w-1/2 justify-start items-start  py-4  text-white">
          <h2 className="md:text-5xl font-bold">
            Hallucination Quest Album #2021
          </h2>
          <p className="text-sm my-5">@mobinchowdhury</p>

          <div className="row w-4/5 hidden md:flex justify-between">
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
          <div className="row px-0">
            <div className="btn rounded-full bg-purple-600 hover:bg-purple-900  shadow-lg font-semibold text-sm">
              Place a Bid
            </div>
            <div className="btn rounded-full bg-transparent hover:bg-purple-500  shadow-lg font-semibold text-sm">
              View Artwork
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="col space-y-5 text-white pr-4">
        {/* header  */}
        <div className="row justify-between">
          <h5 className="font-semibold">Treanding</h5>
          <p className="text-sm">View all acution</p>
        </div>
        {/* cards */}
        <div className="row space-y-7 space-x-0 md:space-x-7 md:space-y-0 flex-wrap md:flex-nowrap">
          {/* card1 */}
          <div className="col space-y-5 pb-7 w-full md:w-1/3 bg-purple-400 rounded-lg p-4 px-6 ">
            {/* image */}
            <div className="col  rounded-xl">
              <Image
                className="rounded-lg"
                src={whiteEgg}
                alt="abstract wave"
              />
            </div>
            {/* heading text */}
            <div className="row p-0 justify-between">
              <h3 className=" font-semibold">Spectre</h3>
              <p className="font-semibold text-gray-100">3.00 ETH</p>
            </div>
            {/* favourite text */}
            <div className="row p-0 justify-between">
              <div className="row -space-x-1 p-0">
                <div className="w-4 h-4 p-1 rounded-full bg-purple-800"></div>
                <div className="w-4 h-4 p-1 rounded-full bg-green-200 -ml-6"></div>
                <div className="w-4 h-4 p-1 rounded-full bg-white -ml-6"></div>

              </div>
              <p className="text-sm font-semibold text-gray-100">favourite this</p>
            </div>
          </div>
          {/* card-2 */}
          <div className="col space-y-5 pb-7 w-full md:w-1/3 bg-purple-400 rounded-lg  p-4 px-7 ">
            {/* image */}
            <div className="col  rounded-xl">
              <Image
                className="rounded-lg"
                src={pinkEgg}
                alt="abstract wave"
              />
            </div>
            {/* heading text */}
            <div className="row p-0 justify-between">
              <h3 className=" font-semibold">Elegent</h3>
              <p className="font-semibold text-gray-100">3.60 ETH</p>
            </div>
            {/* favourite text */}
            <div className="row p-0 justify-between">
              <div className="row -space-x-1 p-0">
                <div className="w-4 h-4 p-1 rounded-full bg-purple-800"></div>
                <div className="w-4 h-4 p-1 rounded-full bg-green-200 -ml-6"></div>
                <div className="w-4 h-4 p-1 rounded-full bg-white -ml-6"></div>

              </div>
              <p className="text-sm font-semibold text-gray-100">favourite this</p>
            </div>
          </div>
          {/* card3 */}
          <div className="col space-y-5 pb-7 w-full md:w-1/3 bg-purple-400 rounded-lg p-4 px-6 ">
            {/* image */}
            <div className="col  rounded-xl">
              <Image
                className="rounded-lg"
                src={abstractWave}
                alt="abstract wave"
              />
            </div>
            {/* heading text */}
            <div className="row p-0 justify-between">
              <h3 className=" font-semibold">Wavey</h3>
              <p className="font-semibold text-gray-100">2.70 ETH</p>
            </div>
            {/* favourite text */}
            <div className="row p-0 justify-between">
              <div className="row -space-x-1 p-0">
                <div className="w-4 h-4 p-1 rounded-full bg-purple-800"></div>
                <div className="w-4 h-4 p-1 rounded-full bg-green-200 -ml-6"></div>
                <div className="w-4 h-4 p-1 rounded-full bg-white -ml-6"></div>

              </div>
              <p className="text-sm font-semibold text-gray-100">favourite this</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
