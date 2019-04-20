import React from 'react';

class Add_defect extends React.Component {
	state = {
		// ID: null,
		// defectId:null,
		defecttype: null,
		defectdescription:null,
		moduleId:null,
		severity: null,
		piriority:null,
		status: null,
		assignedperson: null,
		enterddate: null,
		enteredby: null,
		fixeddate: null,
		fixedby: null,
		availablein: null,
		comments: null
}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		// this.props.adddefect(this.state);
		fetch("http://localhost:8080/saveDefect", {
			method: 'POST',
			headers: {
				'Accept': 'application/json,text/plain,*/*',
				'Content-type': 'application/json'

			},
			body: JSON.stringify(this.state)
		})


	};

	render() {
		return (
			<div className="card-body">
				<div className="col-md-12">
					<div className="tile">
						<h1><font face="Lucida Handwriting "><b><font size={24} color="#16CFE1">D</font>efect Tracker!!</b></font></h1>
						
						<div className="tile-body">
							<div class="container">
								<form onSubmit={this.handleSubmit}>
							
								<div className="form-row">
									{/* <div className="form-group">	
										<label htmlFor="control-label">Defect Id:</label>
										<input type="text" className="form-control" id="defectId" placeholder="001" onChange={this.handleChange} />
									</div> */}

									
										<div className="col">
											<label className="control-label"> Defect Type</label>
											<select id="defecttype" className="form-control" 
											onChange={this.handleChange}>
											<option>Select </option>
												<option>UI</option>
												<option>Functionality</option>
												<option>Enhancement</option>
												<option>Performance</option>
											</select>
										</div>
										
									</div>

									
									<div className="form-row">
									<div className="col">
										<label htmlFor="control-label">Defect Description:</label>
										<textarea type="text" className="form-control" id="defectdescription" placeholder="Defect Description" onChange={this.handleChange} />
									</div>
									</div>

									<div className="form-row">
									<div className="form-group">
										<label htmlFor="control-label">Module </label>
										<select id="moduleId" className="form-control" onChange={this.handleChange}>
												<option>Select</option>
												<option>Moldule 1</option>
												<option>Module 2</option>
												<option>Module 3</option>
												<option>Module 4</option>
											</select>
											</div>
									
								

											<div className="col">
												<label className="control-label">Severity:</label>
												<select id="severity" className="form-control" onChange={this.handleChange}>
													<option selected>Select </option>
													<option>High</option>
													<option>Medium</option>
													<option>Law</option>
												</select>
											</div>
										
								
								
										<div className="col">
											<label className="control-label">Piriority:</label>
											<select id="piriority" className="form-control" onChange={this.handleChange}>
												<option selected>Select</option>
												<option>High</option>
												<option>Medium</option>
												<option>Law</option>
											</select>
										</div>
										</div>

									
									<div className="form-row">
									<div className="form-group">
									<label className="control-label">Status</label>
											<select id="status" className="form-control" onChange={this.handleChange}>
												<option selected>Select Your Status</option>
												<option>New</option>
												<option>Open</option>
												<option>Fixed</option>
												<option>Closed</option>
												<option>Reopened</option>
												<option>Defered</option>
											</select>
										</div>
							
							<div className = "col">
										<label htmlFor="control-label">Assigned Person</label>
										<input
											type="text"
											className="form-control"
											id="assignedperson"
											placeholder="Assigned Person"
											onChange={this.handleChange}
										/>
									</div>
									</div>

								<div className="form-row">									
									<div className="form-group">
									<label htmlFor="control-label">Entered Date:</label>
									<input
												type="date"
												className="form-control"
												id="enterddate"
												onChange={this.handleChange}
											/>
									</div>
									
										<div className="col">
										<label htmlFor="control-label">Entered By:</label>
										<input type="text" className="form-control" id="enteredby" placeholder="Enterd by" onChange={this.handleChange} />
										
										</div>
									</div>
								
								<div className="form-row">
										<div className="control-label">
											<label htmlFor="fixeddate">Fixed Date:</label>
											<input
												type="date"
												className="form-control"
												id="fixeddate"
												onChange={this.handleChange}
											/>
										</div>
										<div className="col">
										<label htmlFor="control-label">Fixed By</label>
										<input
											type="text"
											className="form-control"
											id="fixedby"
											placeholder="fixedby"
											onChange={this.handleChange}
										/>
									</div>
										</div>

										<div className="form-group">
											<label className="control-label">availablein</label>
											<input
												type="text"
												className="form-control"
												id="availablein"
												placeholder="availablein"
												onChange={this.handleChange}
											/>
									</div>
									<div className="form-group">
										<label htmlFor="control-label">Comments:</label>
										<textarea type="text" className="form-control" id="comments" placeholder="comments" onChange={this.handleChange} />
									</div>

									<div className="col-submit">
										<button className="submitbtn">Add Defect</button>
									</div>
								</form>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Add_defect;
