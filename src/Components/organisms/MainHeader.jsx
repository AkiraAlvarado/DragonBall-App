import MainNav from "../molecules/MainNav";
export const MainHeader = () => {
  return (
   <div className="mainHeader-container">
      <div className="mainHeader">
         <div>
            <img className="logo"src="https://www.pngall.com/wp-content/uploads/13/Dragon-Ball-Logo-PNG-File.png" alt="" />
         </div>
         <div>
            <MainNav/>
         </div>
      </div>
   </div>
  )
}


