import './App.css';
import { useState} from 'react'
import react from 'react'
function getList(parma,callback){
  callback('return list')
}

function App() {
  const [name,setName] = useState({name:'jack',gender:1})
  // const inputEle = useRef(null)
  console.log(react)
  const setNameHandler = (text) => {
    setName({name:text})
  }
  getList('list', data => {
    console.log('list',data,name)
  })
  return (
  <div>
    <h1 className="app-h1">test11{name.name}</h1>
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
