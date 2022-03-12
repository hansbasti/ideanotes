import React from "react"

export default function Form (props){

    
    return (
        <div className="form--wrapper">
            <form  className="form--container" onSubmit={props.saveIdea}>
                <input 
                    type="text"
                    placeholder="Write title of your idea here..."
                    className="title--form"
                    name="formTitle"
                    onChange={props.handleChange}
                    value={props.formTitle} 
                />
                <textarea 
                    placeholder="Write the contents of your idea here..."
                    className="body--form" 
                    name="formContent"
                    rows="20"
                    onChange={props.handleChange}
                    value={props.formContent}  
                />
                <button className="save--idea">Create idea!</button> 
                <div className="lower--buttons">
                    <button onClick={props.updateIdea} className="save--idea">Update Idea</button>
                    <button onClick={props.deleteIdea} className="save--idea">Delete Idea</button>   
                </div> 
                 
            </form>
        </div>
        
    )
}