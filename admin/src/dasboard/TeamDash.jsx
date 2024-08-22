import React, { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import AuthContext from "../context/AuthContext";

const TeamDash = () => {
  const { normalUser, admin } = useContext(AuthContext);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [problemLoader, setproblemLoader] = useState(false);
  const [problems, setProblems] = useState([]);
  const [problemsDropDown, setProblemsDropDown] = useState([{}]);
  // const [problemSelect, setProblemSelect] = useState();
  const [problemSelects, setProblemSelects] = useState(
    Array(teams.length).fill("")
  );
  const [selectTeams, setSelectTeams] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [users, setUsers] = useState([{}]);
  const [change, setChange] = useState(false);
  useEffect(() => {
    const getTeams = async () => {
      try {
        setLoading(true);

        let res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          }
        );

        let data = await res.json();
        setTeams(data);
      } catch (err) {
        alert("error " + err);
      } finally {
        setLoading(false);
      }
    };
    const getAllUsers = async () => {
      try {
        let res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/users`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          }
        );

        let data = await res.json();
        if (res.status === 200) {
          setUsers(data);
        } else if (res.status === 404) {
          alert("No users with selected food preference");
        }
      } catch (err) {
        console.log(err);
      }
    };
    const getAllProblems = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/problems`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          }
        );
        if (res.status === 200) {
          const data = await res.json();
          setProblemsDropDown(data);
        } else {
          alert("Failed to fetch problems");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTeams();
    getAllUsers();
    // getAllProblems();
  }, [emailSent, change]);

  const selectCheckedTeams = async () => {
    if (selectTeams.length === 0) {
      alert("Please select atleast one team");
      return;
    }
    let teamsToSend = {
      teams: selectTeams,
    };
    try {
      setLoading(true);
      setEmailSent(false);
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/select-teams`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(teamsToSend),
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        alert("All teams selected");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Failed " + err);
    } finally {
      setEmailSent(true);
      setLoading(false);
    }
  };

  const unSelectCheckedTeams = async () => {
    if (selectTeams.length === 0) {
      alert("Please select atleast one team");
      return;
    }
    let teamsToSend = {
      teams: selectTeams,
    };
    try {
      setLoading(true);
      setEmailSent(false);
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/unselect-teams`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(teamsToSend),
        }
      );

      if (res.status === 200) {
        alert("All teams unselected");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Failed " + err);
    } finally {
      setLoading(false);
      setEmailSent(true);
    }
  };

  const getRespectiveTeamId = async (email) => {
    try {
      setproblemLoader(true);
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/${email}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status === 200) {
        let data = await res.json();
        setProblems(data);
      } else if (res.status === 400) {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Internal Server Error");
    } finally {
      setproblemLoader(false);
    }
  };

  const getTeamDataInCSV = async () => {
    try {
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/csv`,
        {
          method: "GET",
        }
      );
      if (res.status === 200) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "teamData.csv";
        a.click();
        window.URL.revokeObjectURL(url);
        alert("Data Downloaded successfully");
      } else if (res.status === 400) {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Internal Server Error");
    }
  };

  const getUserDataInCSV = async () => {
    try {
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/get_user_csv`,
        {
          method: "GET",
        }
      );
      if (res.status === 200) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "userData.csv";
        a.click();
        window.URL.revokeObjectURL(url);
        alert("Data Downloaded successfully");
      } else if (res.status === 400) {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Internal Server Error");
    }
  };
  const handleCheckboxChange = (teamId) => {
    if (selectTeams.includes(teamId)) {
      setSelectTeams(selectTeams.filter((id) => id !== teamId));
    } else {
      setSelectTeams([...selectTeams, teamId]);
    }
  };

  const assignProblemToTeam = async (_teamId, index) => {
    const payloadData = {
      problemId: problemSelects[index],
      teamId: _teamId,
    };
    console.log(payloadData);
    try {
      let res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams/assign-problem`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(payloadData),
        }
      );
      let data = await res.json();
      if (res.status === 200) {
        alert("Problem assigned successfully");
      } else {
        alert(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setChange(!change);
      setProblemSelects([]);
    }
  };

  const removeAssignedProblem = async (_teamId) => {
    const payloadData = {
      teamId: _teamId,
    };
    try {
      let res = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/teams/remove-assigned-problem`,
        {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(payloadData),
        }
      );
      let data = await res.json();
      if (res.status === 200) {
        alert("Assigned problem removed successfully");
      } else {
        alert(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setChange(!change);
      setProblemSelects([]);
    }
  };

  const handleSelectChange = (value, index) => {
    const updatedProblemSelects = [...problemSelects];
    updatedProblemSelects[index] = value;
    setProblemSelects(updatedProblemSelects);
  };

  return (
    <>
      {!loading ? (
        <>
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ color: "#fff" }}
          >
            <div className="row d-flex justify-content-center align-items-center">
              <h3 className="my-5" style={{ color: "black" }}>
                Team Dashboard (MAJOR FIX REQUIRED 🔨)
              </h3>
            </div>
          </div>
          <div className="d-flex justify-content-space-between align-items-center my-3">
            <button className="btn btn-success mx-5" onClick={getTeamDataInCSV}>
              Get Team Data in CSV
            </button>
            <button className="btn btn-success mx-5" onClick={getUserDataInCSV}>
              Get User Data in CSV
            </button>
            <button
              className="btn btn-primary mx-5"
              onClick={selectCheckedTeams}
              disabled={!admin}
            >
              ShortList Teams
            </button>
            <button
              className="btn btn-danger mx-5"
              onClick={unSelectCheckedTeams}
              disabled={!admin}
            >
              Un-ShortList Teams
            </button>
            <h4 className="btn btn-warning">
              Total teams registered: {teams.length} <br /> Total users
              registered: {users.length}{" "}
            </h4>
          </div>
          <table className="table mx-3">
            <thead>
              <tr>
                {admin ? <th scope="col"></th> : <></>}
                <th scope="col">Sr. No</th>
                <th scope="col">Team Name</th>
                <th scope="col">Team Leader</th>
                <th scope="col">Members</th>
                <th scope="col">Total members</th>
                <th scope="col">Abstract List</th>
                {admin ? (
                  <>
                    <th scope="col">Assign a Problem</th>
                    <th scope="col">Action</th>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            </thead>

            {teams.map((team, index) => (
              <>
                {!team.isSelected ? (
                  <tbody>
                    <tr key={index}>
                      {admin ? (
                        team.selectedProblem ? (
                          <td>
                            {" "}
                            <input
                              type="checkbox"
                              disabled={!admin}
                              hidden={!admin}
                              onChange={() => handleCheckboxChange(team._id)}
                              checked={selectTeams.includes(team._id)}
                            />
                          </td>
                        ) : (
                          <>
                            <td>Please assign a problem first</td>
                          </>
                        )
                      ) : (
                        <></>
                      )}
                      <th scope="row">{index + 1}</th>
                      <td style={{ color: team.isSelected ? "green" : "red" }}>
                        {team.name}
                      </td>
                      <td>{team.leader}</td>
                      {/* <td>{team.members.slice(1).join(', ')}</td> */}
                      <td>
                        <ul>
                          {team.members.length === 1 ? (
                            <li>null</li>
                          ) : (
                            team.members.map(
                              (member, i) =>
                                i !== 0 && <li key={i}>{member}</li>
                            )
                          )}
                        </ul>
                      </td>

                      <td>{team.members.length}</td>

                      <td>
                        <button
                          type="button"
                          onClick={() => getRespectiveTeamId(team.leader)}
                          className="btn btn-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          View Abstract
                        </button>
                      </td>
                      {admin ? (
                        <>
                          <td>
                            {!team.selectedProblem ? (
                              <select
                                className="form-select"
                                value={problemSelects[index]}
                                style={{ width: "8em" }}
                                onChange={(e) =>
                                  handleSelectChange(e.target.value, index)
                                }
                                aria-label="Default select example"
                              >
                                {" "}
                                <option selected value="">
                                  Assign a problem
                                </option>
                                {problemsDropDown.map((problem, index) => (
                                  <option key={index} value={problem._id}>
                                    {problem.title}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <span>{team.selectedProblem}</span>
                            )}
                            <></>
                          </td>
                          <td>
                            {team.selectedProblem ? (
                              <button
                                className="btn btn-danger"
                                onClick={() => removeAssignedProblem(team._id)}
                              >
                                Remove
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  assignProblemToTeam(team._id, index)
                                }
                              >
                                Assign
                              </button>
                            )}
                          </td>
                        </>
                      ) : (
                        <></>
                      )}
                    </tr>
                  </tbody>
                ) : (
                  <></>
                )}

                <div
                  key={index + 3}
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div
                          className="d-flex"
                          style={{ wordBreak: "break-word" }}
                        >
                          {problemLoader ? (
                            "Fetching... Problems"
                          ) : (
                            <ul>
                              {problems.map((prob, indx) => (
                                <>
                                  <li key={indx} className="my-2">
                                    <b>Title: {prob.problemTitle}</b> <br></br>{" "}
                                    <b>Preference: {prob.problemPreference} </b>{" "}
                                    <br></br> <b>Abstract</b> : -{" "}
                                    {prob.problemAbstract} <hr />{" "}
                                  </li>
                                </>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </table>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TeamDash;
