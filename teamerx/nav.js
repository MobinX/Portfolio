export const Navbar = () => {
  return (
    <div className="nav inline-flex space-x-2.5 items-center justify-between w-96 h-14 px-5 py-2.5">
      <div className="Frame1 flex space-x-5 items-center justify-center py-0.5">
        <div className="heroicons-solid:menu-alt-4 inline-flex items-center justify-center w-full flex-1 px-1 py-2">
          <img
            className="Group flex-1 h-full rounded-full"
            src="https://via.placeholder.com/18.900001525878906x10.400002479553223"
          />
        </div>
        <p className="text-xs">TeamingX</p>
      </div>
      <div className="healthicons:ui-user-profile-outline inline-flex items-center justify-center w-2 flex-1 p-0.5">
        <img
          className="Group flex-1  rounded-lg"
          src="https://via.placeholder.com/25x25"
        />
      </div>
    </div>
  )
}
