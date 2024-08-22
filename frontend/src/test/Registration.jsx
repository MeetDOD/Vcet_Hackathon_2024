import React, { useState, useEffect } from "react";
import "./Form.css";
import { toast, ToastContainer } from "react-toastify";
import { handleFormSubmit, isAnyFieldFilled } from "./helper";
const Registration = () => {
  const [teamName, setTeamName] = useState("");
  let [submitText, setSubmitText] = useState("Submit");
  let [submitting, setSubmitting] = useState(false);

  const [usersToAdd, setUsersToAdd] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      phoneNo: 0,
      gender: "",
      city: "",
      state: "",
      pincode: 0,
      college: "",
      dept: "",
      year: "",
      degree: "",
      gitHubUrl: "",
    },
  ]);

  const handleUserChange = (index, field, value) => {
    if (field !== "college") {
      value = value.trim();
    }

    const updatedUsers = [...usersToAdd];
    updatedUsers[index] = {
      ...updatedUsers[index],
      [field]: value,
    };
    setUsersToAdd(updatedUsers);
  };

  const checkIfAnyFieldIsFilled = (index) => {
    return isAnyFieldFilled(index, usersToAdd);
  };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <ToastContainer />
        <div>
          <br />
          <br />
          <div className="glitch-wrapper mb-3">
            <h1 className="glitch" data-text="Registration">
              Registration
            </h1>
          </div>
          <form
            className="form-main-container marginal mt-5"
            onSubmit={(e) =>
              handleFormSubmit(
                e,
                usersToAdd,
                teamName,
                setSubmitText,
                setSubmitting,
                setUsersToAdd,
                setTeamName,
                toast
              )
            }
          >
            <h3 className="form-h3">Team Details</h3>
            <div className="form-main-container form-grid">
              <div className="form-main-container formMeet">
                <div className=" form-grid">
                  <div className="mx-5">
                    <div className=" form-grid-note">
                      <label
                        className="form-heading text-center"
                        htmlFor="id_team_name"
                      >
                        Note
                      </label>
                      <div
                        className="container form-control text-dark font-montserrat"
                        style={{ backgroundColor: "#f5af64", color: 'black' }}
                      >
                        <ol className="list-group">
                          <label>
                            ✏️ No Special Characters are Allowed in College
                            Name.
                          </label>
                          <br />
                          <label>
                            ✏️ Avoid selecting the input field within the member
                            form for individuals you do not wish to include.
                          </label>
                          <br />
                          <label>
                            ✏️ Ensure that phone numbers and email addresses are
                            unique, with no duplicates permitted.
                          </label>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-leader-container">
                <div className="details-container form-grid">
                  <label className="form-heading" htmlFor="id_team_name">
                    Team Name
                    <span style={{ color: "tomato" }}> *</span>
                  </label>
                  {/* Team Name */}
                  <input
                    type="text"
                    className="form-control"
                    id="id_team_name"
                    name="team_name"
                    placeholder="Team Name"
                    data-error="Please enter your name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />

                  <label className="form-heading" htmlFor="id_team_name">
                    Team Leader
                    <span style={{ color: "tomato" }}> *</span>
                  </label>
                  {/* Team Leader Name */}
                  <input
                    type="text"
                    className="form-control"
                    pattern="[A-Za-z]+"
                    id="id_team_leader_name"
                    name="to_name"
                    placeholder="First Name"
                    value={usersToAdd[0]?.fname || ""}
                    onInput={(e) =>
                      handleUserChange(0, "fname", e.target.value)
                    }
                    data-error="Please enter your First name"
                    required
                  />

                  <input
                    type="text"
                    className="form-control"
                    pattern="[A-Za-z]+"
                    id="id_team_leader_name"
                    name="to_name"
                    placeholder="Last Name"
                    value={usersToAdd[0]?.lname || ""}
                    onChange={(e) =>
                      handleUserChange(0, "lname", e.target.value)
                    }
                    data-error="Please enter your Last name"
                    required
                  />

                  {/* Team Leader Email id */}
                  <input
                    type="email"
                    className="form-control email-input"
                    id="id_team_leader_email"
                    name="to_email"
                    placeholder="Email (All notifications will be sent to this mail.)"
                    value={usersToAdd[0]?.email || ""}
                    onChange={(e) =>
                      handleUserChange(0, "email", e.target.value)
                    }
                    data-error="Please enter your Email"
                    required
                  />

                  {/* Team Leader Github */}

                  <input
                    type="text"
                    className="form-control email-input"
                    id="id_team_leader_email"
                    name="to_email"
                    placeholder="Github Profile URL"
                    value={usersToAdd[0]?.gitHubUrl || ""}
                    onChange={(e) =>
                      handleUserChange(0, "gitHubUrl", e.target.value)
                    }
                    data-error="Please enter your Github url"
                    required
                  />
                  {/* Team Leader Phone  */}
                  <input
                    type="number"
                    maxLength="10"
                    pattern="^[6-9]\d{9}$"
                    className="form-control half-form tel-input"
                    id="id_team_leader_tel_number"
                    name="team_leader_tel_number"
                    value={usersToAdd[0]?.phoneNo || ""}
                    onChange={(e) =>
                      handleUserChange(0, "phoneNo", e.target.value)
                    }
                    placeholder="Phone Number"
                    data-error="Please enter your team name"
                    required
                  />

                  {/* Team Leader Gender */}
                  <select
                    className="form-control half-form"
                    value={usersToAdd[0]?.gender || ""}
                    onChange={(e) =>
                      handleUserChange(0, "gender", e.target.value)
                    }
                    name="team_leader_gender"
                    id="id_team_leader_gender"
                  >
                    <option className="form-control" disabled hidden value="">
                      Gender
                    </option>
                    <option className="form-control" value="male">
                      Male
                    </option>
                    <option className="form-control" value="female">
                      Female
                    </option>
                  </select>

                  {/* Team leader college name */}
                  <input
                    type="text"
                    className="form-control"
                    id="id_team_leader_college_name"
                    name="team_leader_college_name"
                    placeholder="College Name"
                    pattern="^[A-Za-z]+( [A-Za-z]+)*$"
                    value={usersToAdd[0]?.college || ""}
                    onChange={(e) =>
                      handleUserChange(0, "college", e.target.value)
                    }
                    data-error="Please enter your College name"
                    required
                  />

                  {/* Team Leader Degree, Dept. , Year */}
                  <input
                    type="text"
                    className="form-control  half-form tel-input"
                    list={`degree5`}
                    pattern="^[A-Za-z.]+( [A-Za-z.]+)*$"
                    name="team_leader_tel_number"
                    value={usersToAdd[0]?.degree || ""}
                    onChange={(e) =>
                      handleUserChange(0, "degree", e.target.value)
                    }
                    placeholder="Degree"
                    data-error="Please enter your team name"
                  />
                  <datalist id={`degree5`}>
                    <option value="B.E">Bachelor of Engineering</option>
                    <option value="B.Tech">Bachelor of Technology</option>
                    <option value="B.Sc">Bachelor of Science</option>
                    <option value="BCA">
                      Bachelor of Computer Application
                    </option>
                  </datalist>

                  <select
                    className="form-control half-form"
                    value={usersToAdd[0]?.year || ""}
                    onChange={(e) =>
                      handleUserChange(0, "year", e.target.value)
                    }
                    name="team_leader_gender"
                    id="id_team_leader_gender"
                  >
                    <option className="form-control" value="">
                      Year
                    </option>
                    <option className="form-control" value="FE">
                      First Year
                    </option>
                    <option className="form-control" value="SE">
                      Second Year
                    </option>
                    <option className="form-control" value="TE">
                      Third Year
                    </option>
                    <option className="form-control" value="BE">
                      Fourth Year
                    </option>
                  </select>

                  <input
                    type="text"
                    pattern="^[A-Za-z\s]+$"
                    list="department09"
                    className="form-control half-form"
                    id="id_team_leader_college_name"
                    name="team_leader_college_name"
                    placeholder="Department"
                    value={usersToAdd[0]?.dept || ""}
                    onChange={(e) =>
                      handleUserChange(0, "dept", e.target.value)
                    }
                    data-error="Please enter your Department name"
                    required
                  />
                  <datalist id={`department09`}>
                    <option value="Computer Engineering" />
                    <option value="Information Technology" />
                    <option value="Computer Engineering and Data Science" />
                    <option value="Artificial Intelligence and Data Science" />
                    <option value="Mechanical Engineering" />
                    <option value="Electronics and Telecommunication Engineering" />
                    <option value="Instrumentation engineering" />
                    <option value="Civil Engineering" />
                  </datalist>
                  {/* Team Leader address pincode  */}
                  <input
                    type="number"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    className="form-control half-form tel-input"
                    id="id_team_leader_tel_number"
                    name="team_leader_tel_number"
                    value={usersToAdd[0]?.pincode || ""}
                    onChange={(e) =>
                      handleUserChange(0, "pincode", e.target.value)
                    }
                    placeholder="Pin Code"
                    data-error="Please enter your Pincode name"
                    required
                  />

                  {/* Team Leader City name*/}
                  <input
                    type="text"
                    value={usersToAdd[0]?.city || ""}
                    onChange={(e) =>
                      handleUserChange(0, "city", e.target.value)
                    }
                    pattern="^[A-Za-z\s]+$"
                    placeholder="City "
                    className="form-control half-form  "
                    name="city_name"
                    id="city_name"
                    required
                  />
                  {/* Team Leader State*/}
                  <input
                    type="text"
                    value={usersToAdd[0]?.state || ""}
                    pattern="^[A-Za-z\s]+$"
                    onChange={(e) =>
                      handleUserChange(0, "state", e.target.value)
                    }
                    placeholder="State "
                    className="form-control half-form "
                    name="state_name"
                    id="state_name"
                    required
                  />
                </div>
              </div>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className={`team-member${_}-container`}>
                  <div className="details-container form-grid">
                    <label className="form-heading" htmlFor="id_teammate1_name">
                      Teammate {_}
                    </label>

                    {/* Member Name */}
                    <input
                      type="text"
                      pattern="[A-Za-z]+"
                      className="form-control"
                      id="id_team_leader_name"
                      name="to_name"
                      placeholder="First Name"
                      value={usersToAdd[_]?.fname || ""}
                      onInput={(e) =>
                        handleUserChange(_, "fname", e.target.value)
                      }
                      required={checkIfAnyFieldIsFilled(_)}
                      data-error="Please enter your First name"
                    />
                    <input
                      type="text"
                      pattern="[A-Za-z]+"
                      className="form-control"
                      id="id_team_leader_name"
                      name="to_name"
                      required={checkIfAnyFieldIsFilled(_)}
                      placeholder="Last Name"
                      value={usersToAdd[_]?.lname || ""}
                      onInput={(e) =>
                        handleUserChange(_, "lname", e.target.value)
                      }
                      data-error="Please enter your Last name"
                    />

                    {/* Member Email */}
                    <input
                      type="email"
                      className="form-control email-input"
                      id="id_team_leader_email"
                      name="to_email"
                      required={checkIfAnyFieldIsFilled(_)}
                      placeholder="Email"
                      value={usersToAdd[_]?.email || ""}
                      onInput={(e) =>
                        handleUserChange(_, "email", e.target.value)
                      }
                      data-error="Please enter your Email"
                    />

                    {/* github */}

                    <input
                      type="text"
                      className="form-control email-input"
                      id="id_team_leader_email"
                      name="to_email"
                      placeholder="Github Profile URL"
                      value={usersToAdd[_]?.gitHubUrl || ""}
                      onChange={(e) =>
                        handleUserChange(_, "gitHubUrl", e.target.value)
                      }
                      data-error="Please enter your Github url"
                      required={checkIfAnyFieldIsFilled(_)}
                    />

                    {/* Member Phone */}
                    <input
                      type="number"
                      maxLength="10"
                      pattern="^[6-9]\d{9}$"
                      className="form-control half-form tel-input"
                      id="id_team_leader_tel_number"
                      required={checkIfAnyFieldIsFilled(_)}
                      name="team_leader_tel_number"
                      value={usersToAdd[_]?.phoneNo || ""}
                      onInput={(e) =>
                        handleUserChange(_, "phoneNo", e.target.value)
                      }
                      placeholder="Phone Number"
                      data-error="Please enter your Phone Number"
                    />

                    <select
                      className="form-control half-form"
                      value={usersToAdd[_]?.gender || ""}
                      onInput={(e) =>
                        handleUserChange(_, "gender", e.target.value)
                      }
                      required={checkIfAnyFieldIsFilled(_)}
                      name="team_leader_gender"
                      id="id_team_leader_gender"
                    >
                      <option className="form-control" value="">
                        Gender
                      </option>
                      <option className="form-control" value="male">
                        Male
                      </option>
                      <option className="form-control" value="female">
                        Female
                      </option>
                    </select>

                    {/* Member College */}
                    <input
                      type="text"
                      pattern="^[A-Za-z]+( [A-Za-z]+)*$"
                      className="form-control"
                      id="id_team_leader_college_name"
                      name="team_leader_college_name"
                      required={checkIfAnyFieldIsFilled(_)}
                      placeholder="College Name"
                      value={usersToAdd[_]?.college || ""}
                      onInput={(e) =>
                        handleUserChange(_, "college", e.target.value)
                      }
                      data-error="Please enter your College name"
                    />

                    {/* Member Degree, Dept., Year */}
                    <input
                      type="text"
                      className="form-control half-form"
                      list={`degree${index}`}
                      required={checkIfAnyFieldIsFilled(_)}
                      name="team_leader_tel_number"
                      pattern="^[A-Za-z.]+( [A-Za-z.]+)*$"
                      value={usersToAdd[_]?.degree || ""}
                      onInput={(e) =>
                        handleUserChange(_, "degree", e.target.value)
                      }
                      placeholder="Degree"
                      data-error="Please enter your Degree"
                    />
                    <datalist id={`degree${index}`}>
                      <option value="B.E">Bachelor of Engineering</option>
                      <option value="B.Tech">Bachelor of Technology</option>
                      <option value="B.Sc">Bachelor of Science</option>
                      <option value="BCA">
                        Bachelor of Computer Application
                      </option>
                    </datalist>
                    <select
                      className="form-control half-form"
                      value={usersToAdd[_]?.year || ""}
                      onChange={(e) =>
                        handleUserChange(_, "year", e.target.value)
                      }
                      name="team_leader_gender"
                      id="id_team_leader_gender"
                    >
                      <option className="form-control" value="">
                        Year
                      </option>
                      <option className="form-control" value="FE">
                        First Year
                      </option>
                      <option className="form-control" value="SE">
                        Second Year
                      </option>
                      <option className="form-control" value="TE">
                        Third Year
                      </option>
                      <option className="form-control" value="BE">
                        Fourth Year
                      </option>
                    </select>

                    <input
                      type="text"
                      list={`browsers${index}`}
                      pattern="^[A-Za-z\s]+$"
                      className="form-control half-form"
                      id="id_team_leader_college_name"
                      name="team_leader_college_name"
                      required={checkIfAnyFieldIsFilled(_)}
                      placeholder="Department"
                      value={usersToAdd[_]?.dept || ""}
                      onInput={(e) =>
                        handleUserChange(_, "dept", e.target.value)
                      }
                      data-error="Please enter your Department name"
                    />
                    <datalist id={`browsers${index}`}>
                      <option value="Computer Engineering" />
                      <option value="Information Technology" />
                      <option value="Computer Engineering & Data Science" />
                      <option value="Artificial Intelligence & Data Science" />
                      <option value="Mechanical Engineering" />
                      <option value="Electronics and Telecommunication Engineering" />
                      <option value="instrumentation engineering" />
                      <option value="Civil Engineering" />
                    </datalist>

                    {/* Member address pincode */}
                    <input
                      type="number"
                      maxLength="6"
                      pattern="[0-9]{6}"
                      className="form-control half-form tel-input"
                      id="id_team_leader_tel_number"
                      required={checkIfAnyFieldIsFilled(_)}
                      name="team_leader_tel_number"
                      value={usersToAdd[_]?.pincode || ""}
                      onInput={(e) =>
                        handleUserChange(_, "pincode", e.target.value)
                      }
                      placeholder="Pin Code"
                      data-error="Please enter your Pincode number"
                    />

                    <input
                      type="text"
                      pattern="^[A-Za-z\s]+$"
                      required={checkIfAnyFieldIsFilled(_)}
                      value={usersToAdd[_]?.city || ""}
                      onInput={(e) =>
                        handleUserChange(_, "city", e.target.value)
                      }
                      placeholder="City "
                      className="form-control half-form  "
                      name="city_name"
                      id="city_name"
                    />
                    <input
                      type="text"
                      pattern="^[A-Za-z\s]+$"
                      required={checkIfAnyFieldIsFilled(_)}
                      value={usersToAdd[_]?.state || ""}
                      onInput={(e) =>
                        handleUserChange(_, "state", e.target.value)
                      }
                      placeholder="State "
                      className="form-control half-form "
                      name="state_name"
                      id="state_name"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              {/* <button
                disabled={submitting}
                className={`btn btn-brand text-light px-5 my-5`}
                style={{ fontSize: "20px", backgroundColor: "green" }}
                type="submit"
              >
                <span
                  className={`d-flex justify-content-center align-items-center `}
                >
                  {submitText} &nbsp;
                  <span
                    style={{ display: submitting ? "" : "none" }}
                    className="loader"
                  >
                    <span className="loader-wheel"></span>
                  </span>
                </span>
              </button> */}
              <button className="relative my-10 py-3 px-8 md:px-10 lg:px-14 rounded-lg font-medium text-base bg-gradient-to-b from-customOrange to-customPurpleDark text-white shadow-[0px_0px_12px_#8c45ff] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
                Submit
              </button>
            </div>
          </form>
          {/* <Design /> */}
        </div>
      </div>
    </>
  );
};

export default Registration;
