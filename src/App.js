import './App.css';
import { useState} from 'react'
import react from 'react'
import MarkDownEdit from './markdownEdit';
import test from './test.md'
function getList(parma,callback){
  fetch(test).then(res => res.text()).then(text => {
    callback(text)
  })
  // callback('return list')
}
console.log(test)
function App() {
  const [name,setName] = useState({name:'jack',gender:1})
  const [mk,setMk] = useState('')
  // const inputEle = useRef(null)
  console.log(react)
  const setNameHandler = (text) => {
    setName({name:text})
  }
  getList('list', data => {
    setMk(data)
    console.log('list',data,name)
  })
  return (
  <div>
    <MarkDownEdit text={mk}></MarkDownEdit>
    <h1 className="app-h1">Test my App with today</h1>
    <input 
      className="test" 
      onChange={(evt)=>{ setName(name.name+evt.nativeEvent.data)}} 
      value={name.name}>  
    </input>
    <input></input>
    <button 
      onClick={() => setNameHandler('哈哈哈哈')}>Test</button>
  </div>
    )
}


export default App;
