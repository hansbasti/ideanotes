import React from "react"
import Header from "./Header"
import Form from "./Form"
import Cards from "./Cards"
import Footer from "./Footer"
export default function App (){
    const [formContent, setFormContent]=React.useState ({
        formTitle:"",
        formContent:""
    })
    const [ideaNotes, setIdeaNotes] = React.useState(JSON.parse(localStorage.getItem("ideaNotes")) || [])
    React.useEffect (()=> {
        localStorage.setItem("ideaNotes", JSON.stringify(ideaNotes))
    }, [ideaNotes])

    const [currentID, setCurrentID] = React.useState ("") 
    
    function selectCurrentID (id){
        setCurrentID(prevCurrentID => {
            return prevCurrentID=id
        })
        const index = ideaNotes.findIndex (x => x.id ===id)
        console.log("index is " + index)
        setFormContent(currentForm => {
            return {
                ...currentForm,
                formTitle:id ? ideaNotes[index].cardTitle:"not the current form",
                formContent:id? ideaNotes[index].cardContent:"not the current form"
            }
        })
    }
    
    function handleChange(event){
        setFormContent (prevFormContent => {
            const {name, value} = event.target
            return {
                ...prevFormContent,
                [name]:value
            }        
        })    
    }

    function deleteIdea (event){
        event.preventDefault()
        setIdeaNotes(oldIdea => oldIdea.filter(idea => idea.id !==currentID))
        console.log("deleted")
    }

    function updateIdea(event){
        event.preventDefault()
        setIdeaNotes(oldNotes => {
            const newArray = []
            for (let i=0; i < oldNotes.length; i++){
                const oldNote = oldNotes[i]
                if (oldNote.id === currentID){
                    newArray.unshift ({
                        ...oldNote, 
                        cardTitle:formContent.formTitle,
                        cardContent:formContent.formContent
                    })
                }else {
                    newArray.push (oldNote)
                }
            }
            return newArray
        })
        setFormContent (prevFormContent => {
            
            return {
                ...prevFormContent,
                formTitle:"",
                formContent:""
            }    
        })
    }
    function saveIdea(event){
        event.preventDefault()
        setIdeaNotes (prevIdeaNotes => {
            return [...prevIdeaNotes, {
                id: prevIdeaNotes.length += 1,
                cardTitle:formContent.formTitle,
                cardContent:formContent.formContent
                
            }]
        })
        
        setFormContent (prevFormContent => {   
            return {
                ...prevFormContent,
                formTitle:"",
                formContent:""
            } 
        })
    }

    console.log(ideaNotes)
    console.log (currentID)

    return (
        <div>
            <Header />
            
            <div className="content--container">
                <Form 
                    {...formContent}
                    handleChange={handleChange}
                    saveIdea={saveIdea}
                    updateIdea={updateIdea}
                    deleteIdea={deleteIdea}
                />
                <div className="card--container">
                    <Cards
                        id={ideaNotes.id}
                        ideaNotes={ideaNotes}
                        {...formContent}
                        selectCurrentID={selectCurrentID}
                        currentID={currentID}
                        // color={color}
                    />
                </div>   
            </div>
            <Footer />
        </div>
    )
}