const NavAvatar = () => {
  return <>
    <button className="relative rounded-full overflow-hidden h-10 w-10">
      <img alt="avatar" src="/avatar-dummy.jpeg" className="w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-primary-main-color mix-blend-screen"></div>
    </button>
  </>
}
 
export default NavAvatar;