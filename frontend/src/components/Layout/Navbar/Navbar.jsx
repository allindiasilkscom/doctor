import Navmenu from "./Navmenu"
import Topbar from "./Topbar"


const navbar = () => {
  return (
    <>
    <div className="navbar-container">
        <div className="row">
            <div className="col-md-3">
                Image
            </div>
            <div className="col-md-9">
                <div className="">
                    <Topbar/>
                </div>
                <div className="">
                    <Navmenu/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default navbar