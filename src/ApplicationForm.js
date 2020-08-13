import React from 'react'
import axios from './config/axios'


class ApplicationForm extends React.Component
{
constructor()
{
    super()
    this.state={
        fName: '',
        email: '',
        number: '',
        aFJob: '',
        experience: '',
        techSkills: ''
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        name:this.state.fName,
        email:this.state.email,
        phone:this.state.number,
        skillls:this.state.techSkills,
        jobTitle:this.state.aFJob,
        experience:this.state.experience
}
    console.log(formData)
    axios.post('/users/application-form', formData)
    .then(response=>{
        if(response.data.hasOwnProperty('errors'))
        {
            alert(response.data.message)
        }
        else{
            alert('your application has been submitted')
            this.setState({
                fName: '',
                email:'',
                number:'',
                aFJob:'',
                experience:'',
                techSkills:''
            })
        }
        console.log('response', response.data)
    })
    .catch(err=>{
        console.log('error', err)
    })
}
render()
{
return(
    <div>
        <h2>Apply For job</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='fName'>Full Name</label>
            <input
                type='text'
                id='fName'
                name='fName'
                value={this.state.fName}
                onChange={this.handleChange}/>
              <br/><hr/>

        <label htmlFor='email'>Email Address</label>
        <input
            type='text'
            id='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='example@email.com'/> 
            <br/><hr/>

            <label htmlFor='number'>Contact Number</label>
            <input
                type='number'
                id='number'
                name='number'
                value={this.state.number}
                onChange={this.handleChange}
                placeholder='+91 9647336767'/>
                <br/><hr/>

                <label htmlFor='aFJob'>Applying For job</label>
                <select value={this.state.aFJob} name='aFJob' onChange={this.handleChange}>
                <option>---Select----</option>
                <option value='Front-End Developer'> Front End Developer</option>
                <option value="Node.Js Developer"> Node.Js Developer</option>
                <option value='Mean-Stack Developer'> Mean Stack Developer</option>
                <option value='Full-Stack Developer'> Full Stack Developer</option>
                </select><br/><hr/>
           
            
             
                <label htmlFor='experience'>Experience</label>
                <input
                    type='number'
                    id='experience'
                    name='experience'
                    value={this.state.experience}
                    onChange={this.handleChange}
                    placeholder='Experience(2years , 3 years'/>
                    <br/><hr/>


                
                <label htmlFor='techSkills'>TechSkills</label>
                <textarea
                    id='techSkills'
                    name='techSkills'
                    value={this.state.techSkills}
                    onChange={this.handleChange}
                    placeholder='Tech Skills'/>
                    <br/><hr/>
                    <input type='submit' value='Send Application'/>



               </form>
            </div>
        )
    }
}
export default ApplicationForm