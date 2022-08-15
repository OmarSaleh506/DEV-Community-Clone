import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { BsChat } from "react-icons/bs";
import { RiFileList3Fill, RiHashtag } from "react-icons/ri";
export default function Profile() {
  return (
    <>
    <div className="black"></div>
    <div className="profile">
      <img className="img-git" src="https://github.com/github.png?size=460" alt="" />
      <div className="edit-profile">Edit profile</div>
      <div className="info-center">
         <h1><strong>OmarSaleh506</strong></h1>
         <p>404 bio not found</p>
         <div className="flex-info">
          <FaBirthdayCake size={20}/>
          <p>Joined 2022 july 29</p>
          <FaGithub className="git-info" size={20}/>
         </div>
      </div>
    </div>
    <div className="mor-info-content">
      <div className="mor-info">
        <BsChat size={30}/>
        <p>0 posts published</p>
      </div>
      <div className="mor-info">
        <RiFileList3Fill size={30}/>
        <p>0 comments written</p>
      </div>
      <div className="mor-info">
        <RiHashtag size={30}/>
        <p>13 tags followed</p>
      </div>
    </div>
    </>
  )
}
