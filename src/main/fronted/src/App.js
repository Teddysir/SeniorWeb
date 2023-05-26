
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Home from "./Pages";

function App() {
  const [memos, setMemos] = useState([]) // 여기 부분때문에 애먹었다 useState('')로 초기화하면안되고 []로 배열 초기화해줘야함

  useEffect(() => {
    axios.get('/memos')
        .then(response => setMemos(response.data))
        .catch(error => console.log(error))
  }, []);

  return (

      <div>
        <Home></Home>
{/*//             {data.map(memo => (*/}
{/*//                 <div key={memo.id}>*/}
{/*//                   <p>modifiedAt: {memo.modifiedAt}</p>*/}
{/*//                   <p>createdAt: {memo.createdAt}</p>*/}
{/*//                   <p>id: {memo.id}</p>*/}
{/*//                   <p>Name: {memo.name}</p>*/}
{/*//                   <p>Content: {memo.content}</p>*/}
{/*//                 </div>*/}
      </div>
  );
}

export default App;


