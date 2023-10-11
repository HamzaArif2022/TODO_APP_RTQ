import { Provider } from "react-redux"
import { store } from "./Components/Store/Store"
import ListPosts from "./Components/ListPosts"


function App() {


  return (
    <Provider store={store} >
    <ListPosts/>
    </Provider>
  )
}

export default App
