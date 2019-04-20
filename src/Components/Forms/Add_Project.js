import React, { Component } from 'react'

 class Add_Project extends Component {
    state = {
        // pid: null ,
        projectName:null
}
handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value
    });
};
handleSubmit =(e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8080/saveproject",{
    method:"POST",
    headers : {
        'Accept' : 'Application/json,text/plain,*/*',
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(this.state)
})

};
    render() {
        return (
            <div className="card-body">
                <div className="col-md-12">
                    <div className="tile">
                        <h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">P</font>rojects!!</b></font></h1>
                        <br />
                        <div className="tile-body">
                            <div class="container">
                                <form onSubmit={this.handleSubmit}>

                                    {/* <div className="form-group">
                                        <label htmlFor="control-label"> ID:</label>
                                        <input type="text" className="form-control" id="pid" placeholder="0001" onChange={this.handleChange} />
                                    </div> */}

                                    <div className="form-group">
                                        <label htmlFor="control-label">Project Name:</label>
                                        <input type="text" className="form-control" id="projectName" placeholder="0001" onChange={this.handleChange} />
                                    </div>

                                    <div className="col-submit">
										<button className="submitbtn">Add Project</button>
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

export default Add_Project
