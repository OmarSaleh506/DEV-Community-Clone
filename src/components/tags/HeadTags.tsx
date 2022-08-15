import { FiSearch } from "react-icons/fi";
export default function HeadTags() {
  return (
    <>
        <div className="strong-h1"><h1><strong>Top tags</strong></h1></div>
    <div className="head-tags">
        <div className="search-tag">
            <input type="text" placeholder="Search for tag"/>
            <FiSearch className="tag-sear" size={20}/>
        </div>
        <div className="follow">Following tags</div>
    </div>
    </>
  )
}
