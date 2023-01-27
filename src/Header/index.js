import {Component} from 'react'
import General from '../General'
import './index.css'

const tabs = [{
    id:1,
    name:"General Information"
},
{
    id:2,
    name:"Experiance"
},
{
    id:3,
    name:"Skills"

},
{
    id:4,
    name:"Add Project"

},
{
    id:5,
    name:"Add licences & certifications"
},
{
    id:6,
    name:"Add course"
},
{
    id:7,
    name:"Contact Info"
}]
class Header extends Component {

    state = {
        activeTab:1
    }



    changeTab = (id) => {
        this.setState({activeTab:id})
    }

    render(){
        const { activeTab} = this.state 
        
        return(
            <>
         
            <div className='header'>
                <ul className='tabs-list'>
                    {tabs.map(each => {
                        const active = (each.id === activeTab ? "tab active":"tab")
                        return(
                            <li key={each.id} className={active} onClick={() => this.changeTab(each.id)}> {each.name} </li>
                        )
                    })}
                    
                </ul>
                <hr className='line'/>
            </div>
            <General activeTab = {activeTab} changeTab ={this.changeTab}/>
            </>
        )
    }
}

export default Header