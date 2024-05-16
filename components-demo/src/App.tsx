
import './App.css'
import Person from "./components/Person/Person";
import {useState} from "react";

interface IPerson{
    name: string;
    age: number;
}
function App() {
    const [people,setPeople] = useState<IPerson[]>([
        {name: "John", age: 30},
        {name: "Jan", age: 20},
    ]);
const changeName = () => {
    const copyPeople = [...people];
    copyPeople[0].name = "ilzat";
    copyPeople[1].name = "Jan";
    setPeople(copyPeople);

}
  return (
      <>
       <Person name={people[0].name} age={people[0].age} />
          <Person name={people[1].name} age={people[1].age}/>
          <button onClick={changeName}>changeNameForFirstPerson</button>
      </>
  )
}

export default App
