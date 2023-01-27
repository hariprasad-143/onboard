import  { Component } from 'react'
import './index.css'

const experience = [{
    id:1,
   name :"Company Name"
},
{
    id:2,
    name:"Position"
},
{
    id:3,
    name:"Date of joining - Date of Resign"
},
{
    id:4,
    name:"Work Description"
},
{
    id:5,
    name:"Used Skills"
}]



const addProject = [{
    id:1,
   name:"Project Title"
},{
    id:2,
    name:"Project Url"
},{
    id:3,
    name:"Project Description"
},
{
    id:4,
    name:"Project Duration"
}]

const addCertificates  = [{
    id:1,
    name:"Name"
},
{
    id:2,
    name:"Issuing Organisation"
},{
    id:3,
    name :"Certification Link"
},{
    id:4,
    name:"Issue Date"
}]

const addCourse = [{
    id:1,
    name :"Name"
},{
    id:2,
    name:"Issuing Organisation"
}]

const contactInfo = [{
    id:1,
    name:"Email"
},{
    id:2,
    name:"Phone"
},{
    id:3,
    name:"Skype ID"
}]

class General extends Component {

    state = {
        fullname:'',
        headline:'',
        nameError:false,
        headlineError:false
    }


    onChangeFullName = (event) => {
        this.setState(prevState => {
            if (event.target.value === ""){
                return({nameError:!prevState.nameError,fullname:event.target.value})
            }
            return ({fullname:event.target.value,nameError:false})
        })
    }

    onChangeHeadline = (event) => {
        this.setState(prevState => {
            if (event.target.value === ""){
                return ({headline:event.target.value,headlineError:!prevState.headlineError})
            }
            return ({headline:event.target.value,headlineError:false})
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const {fullname,headline} = this.state
        const {changeTab} = this.props
        console.log(changeTab)
        const activeTab = this.props.activeTab
        if (headline !== "" && fullname !== ""){
            changeTab(activeTab+1)
        }
        else{
            this.setState(prevState => ({nameError:!prevState.nameError,headlineError:!prevState.headlineError}))
            console.log("error is occured")
        }
    }

    RenderInputText = (props) => {
        const {details} = props
        const placeholderName = `type ${details.name}`
        return(
            <li>
                <div className='input-container'>
                    <label for="name"  className='label-input'>{details.name}</label>
                    <input type="text" id="name" className='input-element' placeholder={placeholderName} />
                </div>
            </li>

        )
    }

    renderGeneralInformation = () => {
        const {nameError,headlineError} = this.state
        
        return(
            <div>
                <ul className='list-inputs'>
                <li>
                    <div className='input-container'>
                        <label for="name"  className='label-input'>Full Name</label> 
                        <input type="text" value ={this.state.fullname}id="name" className='input-element' placeholder="Type Full name" onChange={this.onChangeFullName}/>
                    </div>
                    {nameError && (<p className='error-msg'>this is required</p>)}
                </li>
                <li>
                    <div className='input-container'>
                        <label for="name"  className='label-input'>Head line</label> 
                        <input type="text" id="name" value ={this.state.headline} className='input-element' placeholder="Type Head line" onChange={this.onChangeHeadline}/>
                    </div>
                    {headlineError && (<p className='error-msg'>this is required</p>)}
                </li>
                </ul>
            </div>
        )
    }

    renderExperince = () => (
        <div>
            <ul className='list-inputs'>
            {experience.map(each => (
                <this.RenderInputText key={each.id} details = {each}/>
            ))}
            </ul>
        </div>
    )

    renderSkills = () => (
        <div>
            <div className='input-container'>
                    <label for="name"  className='label-input'>Skills Name</label>
                    <input type="text" id="name" className='input-element' placeholder="Enter Skills" />
                </div>
                <div className='input-container'>
                    <label for="name"  className='label-input'>Experience</label>
                    <input type="number" id="name" className='input-element' placeholder="Years of Experience" />
                </div>
        </div>
    )

    renderAddProjects = () => (
        <div>
            <ul className='list-inputs'>
            {addProject.map(each => (
                <this.RenderInputText key={each.id} details = {each}/>
            ))}
            </ul>
        </div>
    )

    renderAddCertifications = () => (
        <div>
            <ul className='list-inputs'>
            {addCertificates.map(each => (
                <this.RenderInputText key={each.id} details = {each}/>
            ))}
            </ul>
        </div>
    )

    renderAddCourse = () => (
        <div>
            <ul className='list-inputs'>
            {addCourse.map(each => (
                <this.RenderInputText key={each.id} details = {each}/>
            ))}
            </ul>
        </div>
    )

    renderContact = () => (
        <div>
            <ul className='list-inputs'>
            {contactInfo.map(each => (
                <this.RenderInputText key={each.id} details = {each}/>
            ))}
            </ul>
        </div>
    )
    
    
    renderForm = () => {
        const activeTab = this.props.activeTab
        switch (activeTab) {
            case 1:
                return this.renderGeneralInformation()
            case 2:
                return this.renderExperince()
            case 3:
                return this.renderSkills()
            case 4:
                return this.renderAddProjects()
            case 5:
                return this.renderAddCertifications()
            case 6:
                return this.renderAddCourse()
            case 7:
                return this.renderContact()
            default:
                return <></>
        }
    }



    render(){
        return(
            <form className='form-container' type="submit" onSubmit={this.onSubmitForm} >
                {this.renderForm()}
                <div >
                    <button type='submit' className='save-btn' onSubmit={this.onSubmitForm}>Save Changes</button>
                    <button type='button' className='cancel-btn'>Cancel</button>                    
                </div>

            </form>
        )
    }
}

export default General