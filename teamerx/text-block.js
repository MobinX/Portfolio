import { Btn } from "./btn";

export const Textblock = ({ header, pragraph }) => {
  return (
    <div className="inline-flex flex-col space-y-5 items-center justify-center px-5 pt-8 pb-4">
      <img
        className=" w-64 h-32 rounded-lg"
        src="https://via.placeholder.com/250x122"
      />
      <div className="flex flex-col space-y-3 items-center justify-center">
        <p className="text-2xl">{header}</p>
        <p className=" w-full text-lg font-light text-center">{pragraph}</p>
      </div>
        <Btn txt="Get Startd" />
    </div>
  )
}
