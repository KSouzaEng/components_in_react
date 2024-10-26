import { DynamicForm } from "./Componnets/DynamicForm"
import TagsInput from "./Componnets/InputTags"

function App() {


  return (
    <>
    <h1 className="text-red-500 font-bold underline flex justify-center mb-10">
       Hello world!
  </h1>
      <TagsInput />
      <DynamicForm />
    </>
  )
}

export default App
