import React from 'react';


export default class View_defect extends React.Component {

  state = {
    AddDefect : [],
};
componentDidMount(){
    this.getPost();
   
}

getPost() {
    fetch ("http://localhost:8080/getAllProject")
    .then((res) => (res.json()))
    .then((data) => {
        console.log(data);
        this.setState ({AddDefect:data});
    })
}

render(){
    return(


<div className="card mb-3">
        <div className="card-header">
          <i className="fas fa-table" />
          Data Table Example</div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr>
                  <th htmlFor="control-label">Defect Id</th>
                  <th>Defect Type</th>
                  <th>Defect Description</th>
                  <th>Module</th>
                  <th>Severity</th>
                  <th> Priority</th>
                  <th>Status</th>
                  <th>Assigned Pesrson</th>
                  <th>Entered Date</th>
                  <th>Entered By</th>
                  <th>Fixed Date</th>
                  <th>Fixed By</th>
                  <th>Available In</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody id="addDefect">
              </tbody>
            </table>
          </div>
        </div>
      </div>

        
    );
}
}
