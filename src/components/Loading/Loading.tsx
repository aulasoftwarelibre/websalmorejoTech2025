import React from 'react'
import './Loading.css'
import tomate from '../../sprites/tomatito1.svg'

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <img src={tomate} alt="Loading..." className="loading-sprite" />
    </div>
  )
}

export default Loading
