import './App.css'
import JokeHeader from './components/JokeHeader'
import Joke from './components/Joke'
import { useApi } from './hooks/useApi'
import { useState } from 'react'

interface ApiData {
  joke: string
  punchLine: string
}

function App() {
  const { data, isLoading, error, callApi } = useApi<ApiData>(
    'https://mwks-joke-service.azurewebsites.net/api/joke/random',
    { method: 'GET' }
  )
  const [showPunchline, setShowPunchline] = useState<boolean>(false)

  const handleSubmit = async () => {
    setShowPunchline(false)
    await callApi()
  }

  const handleToggle = () => {
    setShowPunchline((prevShowPunchline) => !prevShowPunchline)
  }

  return (
    <>
      <JokeHeader handleSubmit={handleSubmit} />
      <hr className="solid text-silver mb-10" />

      {isLoading && (
        <p className="uppercase text-slate font-bold p-20">
          Loading your joke...
        </p>
      )}
      {error && (
        <p className="uppercase text-red font-bold p-20">
          There was an error loading your joke.
        </p>
      )}
      {data && (
        <Joke
          handleToggle={handleToggle}
          data={data}
          showPunchline={showPunchline}
        />
      )}
    </>
  )
}

export default App
