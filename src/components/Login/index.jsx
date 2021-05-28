import React from 'react'
import { post } from '../../http';


class Login extends React.Component
{
    state ={
        email:"",
        password:""
    }

    handleSubmit = async(e) =>{
        e.preventDefault();
        
        var formdata = new FormData();
        formdata.append("email", this.state.email);
        formdata.append("password", this.state.password);
        const res=await post("/sessions",formdata);
        console.log(res.user.name)
        const name = res.user.name
        const token = res.user.token
        localStorage.setItem("name",name);
        localStorage.setItem("token",token);
        this.props.history.push("/");
        console.log(res)
    }

    handleChange = (e) =>{
        const name =e.target.name;
        const value = e.target.value;
        this.setState({[name]:value})

    }
    render(){
        return(
            <div style={{margin:"20px 30px 30px 30px"}}>
                <h2>Please enter your login credentials</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="">email</label>
                    <input type="text" name="email" id="" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                    <label htmlFor="">password</label>
                    <input type="password" name="password" id="" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div><button>Login</button></div>
                </form>
            </div>
        )
    }
}


export default Login;