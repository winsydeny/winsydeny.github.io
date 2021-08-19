
import Markdown from "react-markdown"
export default function MarkDownEdit(props){
  return (
    <Markdown>{props.text}</Markdown>
  )
}