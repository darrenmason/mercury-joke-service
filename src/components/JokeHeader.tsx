import { Button, Link } from '@mui/material'
import React from 'react'

interface HeaderProps {
  handleSubmit: () => void
}

const JokeHeader: React.FC<HeaderProps> = ({ handleSubmit }) => {
  return (
    <header className="flex items-center justify-between h-40">
      <Button
        className="bg-green capitalize rounded-full pt-5 pb-5 pl-7 pr-7 text-base"
        variant="contained"
        onClick={handleSubmit}
      >
        Get A New Random Joke
      </Button>
      <Link
        target="_blank"
        rel="noopener"
        href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
      >
        View API Docs
      </Link>
    </header>
  )
}

export default JokeHeader
