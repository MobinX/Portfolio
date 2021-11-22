export const Card = ({ header, paragraph }) => {
  return (
    <div className="Frame6 inline-flex flex-col space-y-5 items-center justify-start w-56 h-40 px-2.5 pt-5 pb-2.5 bg-white rounded-3xl">
      <p className="BussinesPlanning w-28 h-8 text-lg leading-tight text-center">
        {header}
      </p>
      <p className="Wehelp new company to create new plan according to their target the want w-48 h-20 text-base font-thin leading-tight text-center">
       {paragraph}
      </p>
    </div>
  )
}
