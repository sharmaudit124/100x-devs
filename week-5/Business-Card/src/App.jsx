import './App.css'
import Card from './components/Card'

function App() {
  const personDetails = {
    personName: "Udit Sharma",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa ullam, facere iste nam quis, animi nulla consequatur cupiditate numquam cum fugiat accusamus qui adipisci repudiandae consectetur alias molestiae dolores.",
    interests: [
      "Code",
      "Springboot",
      "Guitar"
    ],
    socialHandles: [
      {
        handleName: "LinkedIn",
        handleLink: "https://linkedIn.com/any"
      },
      {
        handleName: "Youtube",
        handleLink: "https://youtue.com/any"
      },
      {
        handleName: "Instagram",
        handleLink: "https://instagram.com/any"
      },
      {
        handleName: "Twitter",
        handleLink: "https://instagram.com/any"
      }
    ]

  }
  return (
    <>
      <Card details={personDetails} />
    </>
  )
}

export default App
