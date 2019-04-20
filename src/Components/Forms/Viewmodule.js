import React from 'react';

export default class Viewmodule extends React.Component{
    state={
        modules:[],
    };

    componentDidMount(){
        this.getPost();

    }

    getPost(){
        fetch("http://localhost:3000/addmodules")
        .then((res)=> (res.json()))
        .then((data)=>{
            // console.log(data);
            this.setState({ modules: data});
        })
        
    }
    render(){
        return(

     <div className="card mb-3">
    
        <div className="card-header">
        <h1><font face="Lucida Handwriting "><b><font size={15} color="#16CFE1">M</font>odules</b></font></h1>
          </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
               <tr>
                  <th>Module Id</th>
                  <th>Module Name</th>
                  <th>User Id</th>
                  <th>Project ID</th>
                </tr>          
                </thead>
                <tbody id="addmodules">
                    {this.state.modules.map(e => (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.modulename}</td>
                        <td>{e.userid}</td>
                        <td>{e.projectid}</td>
                    </tr>
                    ))}      
                </tbody>
            </table>
          </div>
        </div>
    </div>

    

        );
    }

}

