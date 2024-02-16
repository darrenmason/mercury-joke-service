import { Button } from '@mui/material'

interface JokeProps {
  data: {
    joke: string
    punchLine: string
  }
  handleToggle: () => void
  showPunchline: boolean
}

export default function Joke({ showPunchline, handleToggle, data }: JokeProps) {
  return (
    <div className="flex-col">
      <div className="relative flex justify-start p-10 text-2xl">
        <div className="z-10 pl-7">{data.joke}</div>
        <div className="-z-1 text-gray -bottom-14 left-0 absolute text-[384px]">
          &ldquo;
        </div>
      </div>
      <Button
        className="flex m-auto bg-blue capitalize rounded-full mt-10 mb-10 pt-5 pb-5 pl-7 pr-7 text-base"
        variant="contained"
        onClick={handleToggle}
      >
        {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
      </Button>
      {showPunchline && (
        <div className="relative flex justify-end p-10 text-2xl">
          <div className="z-10 pr-7">{data.punchLine}</div>
          <div className="-z-1 text-gray -bottom-14 right-0 absolute text-[384px]">
            &rdquo;
          </div>
        </div>
      )}
    </div>
  )
}
