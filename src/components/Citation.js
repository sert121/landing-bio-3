import * as React from 'react';
import "./Citation.css"

export default function Citation() {
  const itemData = [

    { id:"78",
      title:"Scratching the itch with cryo-EM",
    authors:" Maharana J, Sarma P and Shukla AK",
    journal:"Nature Chemical Biology",
    year:"2022 (in press)"},
        { id:"78",
      title:"Scratching the itch with cryo-EM",
    authors:" Maharana J, Sarma P and Shukla AK",
    journal:"Nature Chemical Biology",
    year:"2022 (in press)"},
        { id:"78",
      title:"Scratching the itch with cryo-EM",
    authors:" Maharana J, Sarma P and Shukla AK",
    journal:"Nature Chemical Biology",
    year:"2022 (in press)"},
        { id:"78",
      title:"Scratching the itch with cryo-EM",
    authors:" Maharana J, Sarma P and Shukla AK",
    journal:"Nature Chemical Biology",
    year:"2022 (in press)"},
        { id:"78",
      title:"Scratching the itch with cryo-EM",
    authors:" Maharana J, Sarma P and Shukla AK",
    journal:"Nature Chemical Biology",
    year:"2022 (in press)"}
  ]
  return (
    <div className="flex-container">
      { itemData.map((item)=>
      <div className="cite-row">
      {item.id}. <span id="title">   {item.title}, {item.authors}.</span> <span id="journal">{item.journal}</span>, <span id="year">{item.year}</span>  
      </div>
      
      
      )

      }


                    
      
  </div>
  );
}

