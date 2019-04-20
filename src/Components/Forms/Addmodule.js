import React from 'react';


class Addmodule extends React.Component{
    state={
        // id:null,
        modulename:null,
        userId:null,
        projectId:null
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    // this.props.adddefect(this.state);
    fetch("http://localhost:8080/addmodule",{
			method:'POST',
			headers:{
				'Accept': 'application/json,text/plain,*/*',
				'Content-type':'application/json'

			},
			body:JSON.stringify(this.state)
		})



}
    render(){
        return(
    <div className="card-body">
      <div className="col-md-12">
        <div className="tile">
          <h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">A</font>dd Module!!</b></font></h1>
          <br />
          <div className="tile-body">
					<div class="container">
					<form onSubmit={this.handleSubmit}>
                    {/* <div className="form-group">
						<label htmlFor="control-label">Module ID:</label>
						<input type="text" className="form-control" id="id" placeholder="01" onChange={this.handleChange}/>
					</div> */}
                    <div className="form-group">
						<label htmlFor="control-label">Module Name:</label>
						<input type="text" className="form-control" id="modulename" placeholder="Module-01" onChange={this.handleChange}/>
					</div>
                    <div className="form-group">
						<label htmlFor="control-label">User ID:</label>
						<input type="text" className="form-control" id="userId" placeholder="001" onChange={this.handleChange}/>
					</div>
                    <div className="form-group">
						<label htmlFor="control-label">Project Id:</label>
						<input type="text" className="form-control" id="projectId" placeholder="00001" onChange={this.handleChange}/>
					</div>
                    <div className="col-submit">
						<button className="submitbtn">Add Module</button>
					</div>

                    </form>	
            </div>
        </div>
    </div>
</div>
</div>

        )
    }
}
export default Addmodule;