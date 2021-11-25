import Head from "next/head";
import Image from "next/image";
import headerImg from "./assets/header-img.jpg";
import abstractWave from "./assets/abstractWave.jpg";
import whiteEgg from "./assets/whiteegg.jpg";
import pinkEgg from "./assets/pinkEgg.jpg";
import LaunchIl from "./assets/launch-il.svg";


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
              <p className="text-sm font-semibold text-gray-100">
                favourite this
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div className="col space-y-5 pb-7 w-full md:w-1/3 bg-purple-400 rounded-lg  p-4 px-7 ">
            {/* image */}
            <div className="col  rounded-xl">
              <Image className="rounded-lg" src={pinkEgg} alt="abstract wave" />
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
              <p className="text-sm font-semibold text-gray-100">
                favourite this
              </p>
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
              <p className="text-sm font-semibold text-gray-100">
                favourite this
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* insights */}
      <div className="row space-x-0 space-y-6 md:space-x-24 flex-wrap md:flex-nowrap px-4 py-16">
        <div className="col w-full md:w-1/2 p-5 center">
          {/* illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="w-full"
            viewBox="0 0 861.34285 648.67936"
          >
            <path
              d="M487.96668,298.31443c37.10109-23.94307,88.20046-14.64015,124.34793,10.72884a196.9347,196.9347,0,0,1,32.30722,28.82658c5.64318,6.18962,10.99283,12.68743,16.10981,19.409,1.26068,1.64909,2.51531,3.31471,3.74573,4.99679q1.26287,1.70574,2.50473,3.43526c10.37769,14.42492,19.89188,29.60015,29.20575,44.63751,23.25089,37.5382,47.10783,76.19386,82.53441,102.54908,7.29895,5.42842,17.482,10.31693,24.95986,5.13332,6.48912-4.50162,6.7671-13.96718,5.29023-21.72428-5.49032-28.74-25.29548-52.55662-46.33553-72.88759-21.03978-20.33084-44.332-38.97058-60.22963-63.5374-15.8979-24.56687-23.16127-57.36431-9.23631-83.09406,12.00085-22.17255,37.8208-34.60974,63.02364-35.189,25.20065-.57377,49.68543,9.22225,71.00676,22.6735,21.31941,13.45676,40.066,30.53133,59.63091,46.42986,11.79386,9.5917,28.26094,19.10907,41.11381,10.98808,10.85632-6.863,11.70313-23.33834,5.233-34.43131s-18.01809-18.0644-29.08878-24.56575q-51.5577-30.28842-103.11733-60.5713c-10.54549-6.18859-21.32085-12.575-29.10512-22.01161-7.78648-9.43112-12.10823-22.68629-7.81685-34.1389,4.23393-11.2862,16.05933-18.45281,28.02325-19.94843,11.95605-1.49217,24.0148,1.823,35.19936,6.31353,41.91245,16.83224,140.602,126.95133,166.90453,145.77839,16.90328,12.0919,34.65985,27.40012,36.36931,48.11155,2.1296,25.78425-23.526,47.18186-49.27763,49.68313-25.74808,2.50866-50.70386-8.68727-73.71019-20.52382s-46.48564-24.88724-72.30913-26.53029c-25.823-1.64282-54.79532,12.16074-60.91654,37.29958-5.32348,21.87428,8.20967,44.44617,25.83789,58.44235,13.79843,10.95842,29.99225,18.25607,45.63451,26.46205,4.3438,2.27173,8.64194,4.62083,12.8341,7.132a180.25086,180.25086,0,0,1,29.93459,22.5045,183.67679,183.67679,0,0,1,25.77414,29.64094,179.18159,179.18159,0,0,1,15.62068,27.17341q1.00641,2.1759,1.95446,4.4124c.59864,1.42551,1.17874,2.86947,1.72867,4.32782,7.17972,18.91307,9.97662,40.10751.8045,57.76316-9.14885,17.60784-28.96516,28.03412-48.75259,29.48a89.80071,89.80071,0,0,1-33.791-4.46408,137.2297,137.2297,0,0,1-23.12969-9.94084C794.52567,600.7,767.40355,571.54178,742.6339,541.566c-24.7637-29.9737-48.08255-61.5336-77.48153-86.97744-29.39734-25.44945-66.23669-44.69009-105.12049-44.39784-38.88188.2867-78.96477,23.97778-90.00792,61.25757-16.09646-27.73614-26.98109-59.35475-25.544-91.388S461.024,315.70525,487.96668,298.31443Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#3f3d56"
            />
            <circle cx="469.48709" cy="272.01678" r="4.2718" fill="#7e20a8" />
            <circle cx="308.49926" cy="275.79175" r="6.60457" fill="#ff6584" />
            <circle cx="785.86508" cy="221.51745" r="2.44032" fill="#ff6584" />
            <circle cx="736.48895" cy="90.36211" r="2.44032" fill="#ff6584" />
            <path
              d="M843.02633,456.74236a26.07891,26.07891,0,0,1,2.78-5.68327c4.3438,2.27173,8.64194,4.62083,12.8341,7.132a180.25086,180.25086,0,0,1,29.93459,22.5045,26.02472,26.02472,0,0,1-45.54867-23.95319Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#ff6584"
            />
            <circle cx="362.47378" cy="249.1678" r="2.49578" fill="#f0f0f0" />
            <circle cx="668.2498" cy="64.51306" r="2.49578" fill="#f0f0f0" />
            <circle cx="645.77831" cy="20.05675" r="2.49578" fill="#f0f0f0" />
            <circle cx="822.50254" cy="185.77006" r="2.49578" fill="#f0f0f0" />
            <circle cx="691.4035" cy="189.35566" r="2.49578" fill="#f0f0f0" />
            <circle cx="621.83508" cy="427.40632" r="2.49578" fill="#f0f0f0" />
            <circle cx="543.40782" cy="193.29038" r="2.49578" fill="#f0f0f0" />
            <circle cx="539.90427" cy="146.09722" r="2.49578" fill="#f0f0f0" />
            <path
              d="M866.14147,532.28381c-3.70615-.15179-7.30281-.16975-10.76983-.04989-21.35628.73815-35.58147,6.85689-39.02807,16.788s3.92974,23.54668,20.23724,37.35613q2.419,2.0484,5.04258,4.06347a80.0276,80.0276,0,0,1,24.51808-58.15768Z"
              transform="translate(-169.32858 -125.66032)"
              fill="none"
            />
            <path
              d="M846.04959,563.68214a79.49915,79.49915,0,0,1,20.09249-31.39921q1.80051-1.72372,3.7035-3.33106a80.08128,80.08128,0,0,1,44.50356-18.61538,179.18438,179.18438,0,0,1,15.62068,27.17341q1.00639,2.17594,1.95446,4.4124c.59864,1.42551,1.17874,2.86947,1.72867,4.32782,7.17972,18.91307,9.97662,40.10751.8045,57.76316-9.14885,17.60784-28.96517,28.03416-48.7526,29.48007a89.80131,89.80131,0,0,1-33.791-4.46411,79.90212,79.90212,0,0,1-10.1306-34.05964c-.09842-1.50666-.14666-3.01457-.16151-4.52952A79.68475,79.68475,0,0,1,846.04959,563.68214Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#7e20a8"
            />
            <path
              d="M813.01622,547.86864c4.00872-11.55075,19.00577-18.34978,42.2361-19.15377,4.64842-.16374,9.76062,1.76955,14.59326.237,23.44495-7.43488,44.71546-2.57642,62.07868,12.9704.59863,1.42553,1.17876,2.86948,1.72869,4.32783-.23093-.08636-.46379-.16717-.69664-.248-23.462-8.14252-46.75216-12.8952-66.81423-13.7192-3.707-.14949-8.129-2.29424-10.76958-.04705-21.20758,18.04834-35.55151,10.486-39.02911,16.78748-5.07941,9.204,3.93167,23.5454,20.23837,37.35631q2.41941,2.05122,5.04,4.06041c.01485,1.51495.06309,3.02286.16151,4.52952q-3.94577-2.91643-7.47707-5.90033C816.56833,574.04719,809.00944,559.41384,813.01622,547.86864Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#e4e4e4"
            />
            <circle cx="731.55933" cy="501.52259" r="2.49578" fill="#f0f0f0" />
            <circle cx="687.40279" cy="469.42248" r="2.49578" fill="#f0f0f0" />
            <circle cx="721.18621" cy="454.43059" r="24.27028" fill="#f0f0f0" />
            <path
              d="M509.19491,311.783c5.67345.26659,17.40774,3.08394,30.12317,6.72643,12.70782,3.64607,26.49182,8.09431,40.10029,12.4941q35.73268,11.54366,71.46211,23.08,4.91208,1.5836,9.85116,3.19521c1.26068,1.64909,2.51531,3.31471,3.74573,4.99679-2.89437-1.02316-5.8003-2.013-8.69749-2.95637-12.37844-4.02258-23.1198-6.67554-35.13327-10.33536-18.48821-5.62729-37.99248-13.0176-56.909-19.8995C544.823,322.19693,523.12131,314.78335,509.19491,311.783Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#f0f0f0"
              opacity="0.3"
            />
            <path
              d="M932.75759,262.92414l53.58031,88.947-50.55816-90.71607a1.84948,1.84948,0,1,0-3.02215,1.76906Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#f0f0f0"
              opacity="0.3"
            />
            <circle cx="737.2964" cy="397.26895" r="2.49578" fill="#f0f0f0" />
            <circle cx="299.53813" cy="375.5268" r="16" fill="#7e20a8" />
            <path
              d="M459.3879,492.40273a11.44042,11.44042,0,0,1-7.3141-15.94512L423.10256,447.935l20.66168-4.40845,24.344,27.76138a11.50245,11.50245,0,0,1-8.72027,21.11472Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#a0616a"
            />
            <path
              d="M320.86565,270.42666l16.157,10.64925,18.91194,4.43s14.99907,107.19866,22.36959,113.62868,1.16,7.03958,3.15737,15.909,6.61965,27.01462,6.61965,27.01462c-44.89679,27.82945-85.006,31.22731-119.22623,4.57454a8.05237,8.05237,0,0,1,3.76528-9.36653c5.786-3.59436-6.76409-17.67495-2.02758-20.495s-3.63329-23.91315-3.63329-23.91315l1.46049-45.29872-4.0663-6.94806,5.72828-44.60031,14.76652-6.56237,5.05588-14.98693Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#7e20a8"
            />
            <path
              d="M327.8667,274.18712l26.64115,8.8716s29.47047-3.11176,30.66466,40.75832-4.29794,67.41167-4.29794,67.41167S442.17772,514.507,375.77221,478.097L356.3667,401.68712l-20-120Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <path
              d="M354.5843,371.17746l13.81877-1.90862s1.33426,20.8342,7.94429,23.99172,4.38173,3.67716,5.16118,7.01962-5.8779,12.60375-.64184,14.90694,51,60,51,60l27-25c-1.85564-5.02813-10.78512-.93686-11.345-6.26714-.70457-8.05889-14.8379-30.07437-17.84566-32.89719s-1.81872-7.79907-3.37763-14.484-.4767-.48633-3.07488-11.62786-37.80825-67.91285-39.03245-78.2-15.55843-16.34242-15.55843-16.34242l-11.14153,2.59818Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <polygon
              points="68.581 615.998 84.845 620.268 109.058 559.567 85.054 553.264 68.581 615.998"
              fill="#a0616a"
            />
            <path
              d="M232.881,758.47391l50.014,13.13347.16612-.6325a20.12793,20.12793,0,0,0-14.35407-24.579l-.00121-.00032-7.31533-9.33008-18.86557,2.45516-4.36588-1.14648Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <polygon
              points="151.957 628.165 168.771 628.164 176.771 563.303 151.953 563.305 151.957 628.165"
              fill="#a0616a"
            />
            <path
              d="M320.69272,771.36718l51.70963-.00195v-.654a20.12793,20.12793,0,0,0-20.12682-20.12651h-.00125l-9.44543-7.1658-17.62308,7.16689-4.51391.00015Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <path
              d="M279.2272,443.4438c-4.062,5.07751-2.031,22.341-2.031,22.341s-7.10852,55.85264-4.062,60.93015-2.031,9.13953-5.07752,16.248-6.093,24.37206-6.093,24.37206c-17.26354,14.217-16.248,79.2092-16.248,79.2092l-6.093,57.88364c2.031,6.093,30.46508,7.10852,34.52709,6.093S317.8163,566.3196,317.8163,566.3196s-2.031,138.10834-2.031,144.20136,27.41857,3.0465,33.51158,3.0465S393.979,464.76932,393.979,464.76932v-14.217l-5.07751-7.10851S283.28921,438.36629,279.2272,443.4438Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <path
              d="M288.8667,277.18712,263.92876,293.0758,251.8667,303.18712l16,102s-24.30892,92.71612,14,87,36.16111-89.03846,36.16111-89.03846Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <path
              d="M322.23542,422.083a11.44044,11.44044,0,0,1-16.54431-5.83342l-40.64366.98165,11.20149-17.91273,36.87863,1.814A11.50245,11.50245,0,0,1,322.2354,422.083Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#a0616a"
            />
            <circle cx="132.62957" cy="105.61497" r="32.11879" fill="#a0616a" />
            <path
              d="M265.52656,210.17108c3.60658-5.57961,10.37456-9.29825,16.93562-8.25331a23.12708,23.12708,0,0,1,38.75042-13.4894,7.19154,7.19154,0,0,1,7.03282-.70384,14.82856,14.82856,0,0,1,5.71367,4.58627,33.28016,33.28016,0,0,1,4.65684,33.85669c.80185-2.915-2.11948-5.65739-5.07118-6.31152-2.95144-.65414-6.04757-.03529-9.04074-.46126-3.83627-.54587-7.28476-2.77134-11.12709-3.27218-3.22918-.42092-6.47658.407-9.62557,1.23693-3.149.82981-6.388,1.67606-9.62178,1.29208-3.234-.384-7.39959,11.87152-7.34369,20.5035.01062,1.63584-.32631,3.73609-1.925,4.08314-1.96872.42749-3.10954-2.28971-4.9834-3.0301a3.46671,3.46671,0,0,0-4.25212,2.26113,5.652,5.652,0,0,0,1.07909,5.06131,16.70142,16.70142,0,0,0,4.04925,3.51261l-.77175.64187c-1.28373,1.69591-3.94655,1.7694-5.7969.72015a12.5112,12.5112,0,0,1-4.16206-4.739c-3.4232-5.69369-6.426-11.76023-7.63408-18.29308S261.92023,215.75069,265.52656,210.17108Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <path
              d="M276.8667,306.18712l-14.43307-12.3687s-16.85215,5.25847-19.70951,16.31358c-22.49139,28.75861-34.60418,62.34589-37.85742,100.05512,29.36371,11.09012,65.31909,15.02441,104,16l-8-30-55-10Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#2f2e41"
            />
            <path
              d="M225.72794,757.227l-7.71-12.39-1.54,7.08008c-.27,1.24-.54,2.5-.79,3.75-2.18995-1.87012-4.52-3.6001-6.79981-5.26q-10.5-7.62012-20.99023-15.26l2.18994,12.7c1.3501,7.82007,2.76025,15.8,6.1001,22.94995.37011.81006.77,1.61011,1.20019,2.39014h32.54a10.48765,10.48765,0,0,0,.54-2.24011.77484.77484,0,0,0,.00976-.15C230.9882,765.947,228.308,761.37706,225.72794,757.227Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#f2f2f2"
            />
            <path
              d="M513.29792,742.99305l14.58608-23.44,2.91353,13.39444c.51083,2.34587,1.02167,4.72962,1.49463,7.09443,4.143-3.538,8.55119-6.81084,12.8642-9.95114q19.86441-14.41611,39.71035-28.86963l-4.143,24.02639c-2.55418,14.79438-5.222,29.8913-11.54046,43.41783-.70021,1.53251-1.45676,3.04608-2.27059,4.52178H505.35179a19.84078,19.84078,0,0,1-1.02167-4.238,1.46446,1.46446,0,0,1-.01848-.28382C503.34632,759.48991,508.41681,750.84426,513.29792,742.99305Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#f2f2f2"
            />
            <path
              d="M501.855,773.68712H434.87842A11.52467,11.52467,0,0,1,423.3667,762.1754V527.19884a11.52466,11.52466,0,0,1,11.51172-11.51172H501.855a11.52466,11.52466,0,0,1,11.51172,11.51172V762.1754A11.52467,11.52467,0,0,1,501.855,773.68712Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#f2f2f2"
            />
            <path
              d="M486.04,521.68712H451.69336A4.332,4.332,0,0,1,447.3667,517.36v-12.3457a4.332,4.332,0,0,1,4.32666-4.32715H486.04a4.332,4.332,0,0,1,4.32666,4.32715V517.36A4.332,4.332,0,0,1,486.04,521.68712Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#3f3d56"
            />
            <path
              d="M584.26926,774.03235l-413.75.30733a1.19069,1.19069,0,0,1,0-2.38137l413.75-.30733a1.19069,1.19069,0,0,1,0,2.38137Z"
              transform="translate(-169.32858 -125.66032)"
              fill="#cacaca"
            />
          </svg>
        </div>
        <div className="col justify-start items-start w-full md:w-1/2 space-y-3 md:space-y-6 text-white">
          <h4 className="uppercase md:text-xl bold text-gray-200">Learn from us</h4>
          <h3 className="text-white md:text-5xl bold">How To Sell Your Fist NFTs</h3>
          <p className="md:text-lg ">Set up an Ethereum Wallet.The first step in your NFT journey is create a digital wallet where {"you'll"} securely store yuor crypto currency that is used to buy, sell and create NFTs. </p>
          {/* btn */}
          <div className="row px-0">
            <div className="btn rounded-full bg-purple-700 hover:bg-purple-900  shadow-lg font-semibold text-sm">
              Learn Now
            </div>
            <div className="btn rounded-full bg-transparent hover:bg-purple-500  shadow-lg font-semibold text-sm">
              Discover More
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
