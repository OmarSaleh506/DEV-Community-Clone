import { FcHome, FcIdea, FcAbout, FcContacts } from "react-icons/fc";
import { RiFileList3Fill } from "react-icons/ri";
import { FaMicrophoneAlt, FaTags } from "react-icons/fa";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsBook, BsFillEmojiSmileUpsideDownFill} from "react-icons/bs";
import { AiTwotoneShopping, AiOutlineHeart } from "react-icons/ai";
export default function Liftbar() {
  return (
    <div className="side-bar">
        <div className="side-icon"><FcHome size={20}/><a href="/">Home</a></div>
        <div className="side-icon"><FaMicrophoneAlt /><a href="podcast">Podcasts</a></div>
        <div className="side-icon"><GoDeviceCameraVideo size={20}/><a href="videos">Videos</a></div>
        <div className="side-icon"><FaTags size={20}/><a href="tag">Tags</a></div>
        <div className="side-icon"><RiFileList3Fill size={20}/><a href="/">Listings</a></div>
        <div className="side-icon"><FcIdea  size={20}/><a href="0">FAQ</a></div>
        <div className="side-icon"><AiTwotoneShopping size={20}/><a href="/">Forem Shop</a></div>
        <div className="side-icon"><AiOutlineHeart size={20}/><a href="/">Sponsors</a></div>
        <div className="side-icon"><FcAbout size={20}/><a href="/">About</a></div>
        <div className="side-icon"><FcContacts size={20}/><a href="/">Contact</a></div>
        <div className="side-icon"><BsBook size={20}/><a href="/">Guides</a></div>
        <div className="side-icon"><BsFillEmojiSmileUpsideDownFill size={20}/><a href="/">Software</a></div>
    </div>
  )
}
