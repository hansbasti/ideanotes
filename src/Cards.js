import React from "react"

export default function Cards (props){

    const newCardArray = props.ideaNotes.map (cardItems => {
        const styles = {
            boxShadow: props.currentID===cardItems.id?"-5px 10px 10px #4d4c4c":"-5px 10px 10px #888888",
            backgroundColor:props.currentID===cardItems.id?"rgb(75, 75, 136)":"rgb(243, 238, 238)",
            color:props.currentID===cardItems.id?"white":"black"
        }
        const titleStyles= {
            backgroundColor:props.currentID===cardItems.id?"rgb(243, 238, 238)":"rgb(75, 75, 136)",
            color:props.currentID===cardItems.id?"black":"white"
        }
        return (
            <div style={styles} className="card--ideas" key={cardItems.id} onClick={()=>props.selectCurrentID(cardItems.id)}>
                <h1 style={titleStyles} className="card--title">{cardItems.cardTitle}</h1>
                <p>{cardItems.cardContent}</p>
            </div>
        )
    })
    return (
        <div className="idea--container">
            {newCardArray}
        </div>
    )
}