import React from "react"
import './form.css'

function Form() {
    const [formData, setFormData] = React.useState(
        {
            name: "",
            email: "",
            yearsclimbed: "",
            dropdown: "",
            experience: "",
            indoorbouldering: false,
            indoorlead: false,
            sports: false,
            trad: false,
        }
    )

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleOnClick() {
        alert("This is not a real form")
    }

    return (
        <div>
            <div className="title-box">
                <h1 id="title">Climbing survey form</h1>
                <p id="description">Looking at climbing habits </p>
            </div>
            <div className="form">
                <form id="survey-form">
                    <div className="survey-div survey-div-1"> 
                        <label id="name-label" htmlFor="name">Name:</label>
                        <input 
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                        <label id="email-label" htmlFor="email">Email Address:</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email address"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <hr></hr>
                    <div className="survey-div survey-div-2"> 
                        <label id="number-label" htmlFor="number">How many years have you climbed? </label>
                        <input 
                            id="number"
                            name="yearsclimbed"
                            type="number"
                            placeholder="0"
                            onChange={handleChange}
                            value={formData.yearsclimbed}
                        />
                    

                    <label id="daysclimbed" htmlFor="dropdown">How many days of the week do you climb? </label>
                    <select 
                        id="dropdown"
                        value={formData.dropdown}
                        name="daysclimbed"
                    >
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                        <option value="five">Five</option>
                        <option value="six">Six</option>
                        <option value="seven">Seven</option>
                    </select>
                    </div>
                    <hr></hr>
                    <div className="survey-div survey-div-3">
                    <label id="experience-label">What grade do you climb at? </label>
                        <div className="survey-radio">
                            <input 
                                type="radio"
                                id="experience"
                                name="experience"
                                value="v0 to v2"
                                checked={formData.experience === "v0 to v2"}
                                onChange={handleChange}
                            />
                            <label htmlFor="experience">v0 to v2 </label>
                        </div>
                        <div className="survey-radio">
                            <input 
                                type="radio"
                                id="experience"
                                name="experience"
                                value="v3 to v4"
                                checked={formData.experience === "v3 to v4"}
                                onChange={handleChange}
                            />
                            <label htmlFor="experience">v3 to v4 </label>
                        </div>
                        <div className="survey-radio">
                            <input 
                                type="radio"
                                id="experience"
                                name="experience"
                                value="v5 to v6"
                                checked={formData.experience === "v5 to v6"}
                                onChange={handleChange}
                            />
                            <label htmlFor="experience">v5 to v6 </label>
                        </div>
                        <div className="survey-radio">
                            <input 
                                type="radio"
                                id="experience"
                                name="experience"
                                value="v6+"
                                checked={formData.experience === "v6+"}
                                onChange={handleChange}
                            />
                            <label htmlFor="experience">v6+ </label>
                        </div>
                    </div>
                    <div className="survey-div survey-div-4">
                        <p>What sort of climbing do you do? </p>
                        <div className="checkbox-box">
                            <input 
                                type="checkbox" 
                                id="indoorbouldering" 
                                checked={formData.indoorbouldering}
                                onChange={handleChange}
                                name="indoorbouldering"
                            />
                            <label htmlFor="indoorbouldering"> Indoor bouldering</label>
                        </div>
                        <div className="checkbox-box">
                            <input 
                                type="checkbox" 
                                id="indoorlead" 
                                checked={formData.indoorlead}
                                onChange={handleChange}
                                name="indoorlead"
                            />
                            <label htmlFor="indoorlead"> Indoor lead</label>
                        </div>
                        <div className="checkbox-box">
                            <input 
                                type="checkbox" 
                                id="sports" 
                                checked={formData.sports}
                                onChange={handleChange}
                                name="sports"
                            />
                            <label htmlFor="sports"> Outdoor sports</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="trad" 
                                checked={formData.trad}
                                onChange={handleChange}
                                name="trad"
                            />
                            <label htmlFor="trad"> Outdoor trad</label>
                            </div>
                    </div>
                    <hr></hr>
                    <div className="survey-div survey-div-5">
                        <label htmlFor="comments">In a few words, explain why you like climbing </label>
                        <input 
                            type="textarea" 
                            id="comments" 
                            checked={formData.comments}
                            onChange={handleChange}
                            name="comments"
                        />
                    </div>
                    <button id="submit" onClick={handleOnClick}>Submit</button>
                </form>
                
            </div>
        </div>
    )
};

export default Form;