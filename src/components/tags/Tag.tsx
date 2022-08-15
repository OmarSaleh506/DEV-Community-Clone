import { ITags } from "../../data/DataTags";
interface TagProps {
  tag: ITags
}
export  function Tag({tag}: TagProps) {
  return (
    <div className="tag">
      
        <div className="flex-tag">
          <div className="color"></div>
          <h3 className="tit">{tag.title}</h3>
          <p>{tag.description}</p>
          <div className="btn-follow">Follow</div>
        </div>
        <div className="flex-tag">
        <div className="color"></div>
          <h3 className="tit">{tag.title}</h3>
          <p>{tag.description}</p>
          <div className="btn-follow">Follow</div>
        </div>
        <div className="flex-tag">
        <div className="color"></div>
          <h3 className="tit">{tag.title}</h3>
          <p>{tag.description}</p>
          <div className="btn-follow">Follow</div>
        </div>
      
    </div>
  )
}
