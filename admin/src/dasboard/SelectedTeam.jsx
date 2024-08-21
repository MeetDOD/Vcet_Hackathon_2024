import React, { useEffect, useState, useContext } from 'react';
import Loading from './Loading';
import AuthContext from '../context/AuthContext'

const SelectedTeam = () => {
    const {normalUser,admin} = useContext(AuthContext)
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const [problemLoader, setproblemLoader] = useState(false);
    const [problems, setProblems] = useState([]);
    const [problemsDropDown, setProblemsDropDown] = useState([{}]);
    const [problemSelect, setProblemSelect] = useState("");
    const [users, setUsers] = useState([{}]);
    const [change,setChange] = useState(false);
    useEffect(() => {
        const getTeams = async () => {
            try {
                setLoading(true);

                let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/get-selected-teams`, {
                    method: "GET",
                    headers: { 'content-type': 'application/json' }
                });

                let data = await res.json();
                setTeams(data);
            } catch (err) {
                alert("error " + err);
            } finally {
                setLoading(false);
            }
        };
        const getAllUsers = async () => {
            try{
                let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users`,{
                    method: "GET",
                    headers: { 'content-type': 'application/json' },
                });

                let data = await res.json();
                if(res.status === 200){
                  setUsers(data)
                }else if(res.status === 404){
                  alert("No users with selected food preference")
                }
            }catch(err){
                console.log(err)
            }
        }
        const getAllProblems = async() => {
            try{
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/problems`,{
                    method: "GET",
                    headers: { 'content-type': 'application/json' },
                });
                if(res.status === 200){
                    const data = await res.json();
                    setProblemsDropDown(data)
                }else{
                    alert("Failed to fetch problems");
                }
            }catch(e){
                console.log(e)
            }
        }
        getTeams();
        getAllUsers();
        getAllProblems();

    }, [change]);

   
   

    const getRespectiveTeamId = async (email) => {
        try {
            setproblemLoader(true)
            let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/${email}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            if (res.status === 200) {
                let data = await res.json();
                setProblems(data);

            } else if (res.status === 400) {
                alert("Something went wrong");
            }
        } catch (err) {
            alert("Internal Server Error")
        } finally {
            setproblemLoader(false);
        }
    }

        const disqualifyTeam = async (teamId) => {
            const payloadData = {
                teamId: teamId
            }
            try{
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/disqualify-team`,{
                    method: "PATCH",
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(payloadData)
                    
                });
                const data = await res.json();
                if(res.status === 200){
                    alert("Team removed successfully")
                }
            }catch(e){
                console.log(e)
                alert("Something went wrong")
            }finally{
                setChange(!change)
            }
        }
      
      
    
    return (
        <>
            {!loading  ? (
                <>
                    <div className='container d-flex justify-content-center align-items-center' style={{color: "#fff"}}>

                        <div className='row d-flex justify-content-center align-items-center'>
                            <h3 className='my-5' style={{color: "black"}}>Selected Teams Dashboard</h3>

                        </div>

                    </div>
                    <div className='d-flex justify-content-space-between align-items-center my-3'>

                    <h4 className='btn btn-warning'>Total teams Selected: {teams.length} </h4>
            
                    </div>
                            <table className="table mx-3">
                        <thead>
                            <tr>
                                
                                <th scope="col">Sr. No</th>
                                <th scope="col">Team Name</th>
                                <th scope="col">Team Leader</th>
                                <th scope="col">Members</th>
                                <th scope='col'>Total members</th>
                                <th scope='col'>Assigned Problem</th>
                                {admin?<th scope='col'>Action</th>:<></>}
                                
                            </tr>
                        </thead>

                        {teams.map((team, index) => (
                            <>
                                {team.isSelected?(
                                    <tbody>
                                    
                                    <tr key={index}>
                                        
                                        <th scope="row">{index + 1}</th>
                                        <td style={{color: team.isSelected?"green":"red"}}>{team.name}</td>
                                        <td>{team.leader.email}</td>
                                        {/* <td>{team.members.slice(1).join(', ')}</td> */}
                                        <td>
                                            <ul>
                                               
                                                {team.members.length === 1?<li>null</li>:(
                                                    team.members.map((member, i) => (
                                                        i !== 0 && <li key={i}>{member.email}</li>
                                                    ))
                                                )}
                                              
                                            </ul>
                                        </td>

                                        <td>
                                            {team.members.length}
                                        </td>


                                        <td><button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            View
                                        </button>

                                        </td>
                                        {admin?<td><button type="button" className="btn btn-danger"  onClick={() => disqualifyTeam(team._id)}>
                                            Remove
                                        </button></td>:<></>}
                                        
                                       

                                    </tr>
                                </tbody>
                                ):(
                                    <></>
                                )}

                                <div key={index + 3} className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" style={{ backgroundColor: "white" }}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Assigned Problem</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body" style={{ wordBreak: 'break-word' }}>
                                                <h5>Title: {team.selectedProblem.name}</h5> 
                                                <br/>
                                                <p><b>Abstract:</b> {team.selectedProblem.abstract}</p>
                                                
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>

                        ))}

                    </table>
                </>
            ) : (<Loading />)}




        </>
    );
};

export default SelectedTeam;