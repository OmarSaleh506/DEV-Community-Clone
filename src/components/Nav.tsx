/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiSearch } from "react-icons/fi";
export default function Nav() {
  return (
    <div className="header">
      <div className="nav-bar">
        <div> <img  className="dev-img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" /></div>
        <form>
          <div className="search-input">
            <input className="input-on-search" type="text" placeholder="Search..."/>
            <FiSearch className="search-icon"/>
          </div>
        </form>
        <div className="Login-create">
          <a href="login" className="login-box">Log in</a>
          <a className="create-account" href="signup">Create account</a>
        </div>
      </div>
    </div>
  )
}
