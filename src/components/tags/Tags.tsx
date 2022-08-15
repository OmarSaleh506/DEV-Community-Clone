import { tags } from "../../data/DataTags";
import { Tag } from "./Tag";


export default function Tags() {
  const Tags = tags.map((tags) => <Tag tag={tags} />)
  return (
    <div>{Tags}</div>
  )
}
