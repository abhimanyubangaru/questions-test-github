import React from 'react'
import DormsList from './DormsList'


const AboutDorms = () => {
  return (
    <div>
          {/*List of dorms as prototype*/}
          {DormsList.map((dorm,index) => (
            <ul> <li>{dorm}</li></ul>

          ))}
  </div>
  )
}

export default AboutDorms
