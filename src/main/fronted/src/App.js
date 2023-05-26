
import React from 'react';
import Home from "./Pages";

function App() {
    // const [memos, setMemos] = useState([]) // 여기 부분때문에 애먹었다 useState('')로 초기화하면안되고 []로 배열 초기화해줘야함
    //
    // useEffect(() => {
    //     axios.get('/memos')
    //         .then(response => setMemos(response.data))
    //         .catch(error => console.log(error))
    // }, []);

  return (

      <div>
        <Home></Home>

      </div>
  );
}

export default App;


