import React, { useState, useEffect } from 'react';
import './Form.css'
import Header from '../Components/Navbar/Header'
import { toast, ToastContainer } from 'react-toastify'
const Registration = () => {


    let [errorText, setErrorText] = useState("");
    let [errorTextPin, setErrorTextPin] = useState("");
    let [error, setError] = useState(true);
    let [errorAbstarct, setErrorAbstract] = useState(true);

    let [submitText, setSubmitText] = useState("Submit")
    let [submitting, setSubmitting] = useState(false)


    const [problems, setProblems] = useState([]);
    const [problemPreference, setProblemPreference] = useState([
        { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
        { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
        { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
        { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
        { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
    ]);
    const handleProblemChange = (index, field, value) => {
        // if (value.length < 30) {
        //     setErrorAbstract(true)
        // } else if (value.length > 400) {
        //     setErrorAbstract(true)
        // } else {
        //     setErrorAbstract(false)
        // }
        console.log(import.meta.env.VITE_BACKEND_URL)

        if (index === 0 && field == 'abstract') {
            setAbsLength1(value.length)
            console.log(abs1)
        } else if (index === 1 && field == 'abstract') {
            setAbsLength2(value.length)
        } else if (index === 2 && field == 'abstract') {
            setAbsLength3(value.length)
        } else if (index === 3 && field == 'abstract') {
            setAbsLength4(value.length)
        } else if (index === 4 && field == 'abstract') {
            setAbsLength5(value.length)
        }
        const updatedProblemPreference = [...problemPreference];
        updatedProblemPreference[index][field] = value;
        setProblemPreference(updatedProblemPreference);
        updatedProblemPreference[index].preferenceNumber = parseInt(index + 1);
        setProblemPreference(updatedProblemPreference);
    };

    const [usersToAdd, setUsersToAdd] = useState([
        {
            fname: '',
            lname: '',
            email: '',
            phoneNo: 0,
            gender: '',
            city: '',
            state: '',
            pincode: 0,
            college: '',
            dept: '',
            year: '',
            degree: ''
        },
    ]);

    const handleUserChange = (index, field, value) => {

        if (index > 0) {
            console.log(index, value.length)
            if (value.length !== 0) {
                setErr(true)
            } else {
                setErr(false)
            }
            // setErr(isAnyFieldFilled(index))
            // console.log(err)
        }

        if (field === "phoneNo") {
            if (value.length < 10 || value.length > 10) {
                setError(true)
                setErrorText("Phone no. should be of only 10 digits")

            } else {
                setError(false)
                setErrorText("")
            }

        }
        if (field === "pincode") {
            if (value.length < 6 || value.length > 6) {
                setError(true)
                setErrorTextPin("Pincode no. should be of only 6 digits")

            } else {

                setErrorTextPin("")
            }
        }
        if (field !== "college") {
            value = value.trim()
        }
        const updatedUsers = [...usersToAdd];
        updatedUsers[index] = {
            ...updatedUsers[index],
            [field]: value,
        };
        setUsersToAdd(updatedUsers);
    };

    const [teamName, setTeamName] = useState("");

    useEffect(() => {
        const fetchProblems = async () => {
            try {


                let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/problems`, {
                    method: "GET",
                    headers: { "content-type": "application/json" },
                });
                let data = await res.json();
                setProblems(data);
            } catch (err) {
                console.log("Failed to fetch problems " + err);
            } finally {

            }
        };


        fetchProblems();
    }, []);

    const handleProblemSelect = (index, value) => {
        const updatedProblemPreference = [...problemPreference];
        const selectedProblemIds = updatedProblemPreference.map(pref => pref.problems);

        if (value === '') {
            updatedProblemPreference[index].problems = '';
        } else if (!selectedProblemIds.includes(value)) {
            updatedProblemPreference[index].problems = value;
        }


        setProblemPreference(updatedProblemPreference);
    };

    let [abs1, setAbsLength1] = useState(0)
    let [abs2, setAbsLength2] = useState(0)
    let [abs3, setAbsLength3] = useState(0)
    let [abs4, setAbsLength4] = useState(0)
    let [abs5, setAbsLength5] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hello")
        setSubmitText("Validating");
        setSubmitting(true);
        try {
            for (const user of usersToAdd) {
                console.log(user)
                if (
                    (user.phoneNo.length != 10)
                    ||
                    (user.phoneNo[0] != '6' &&
                        user.phoneNo[0] != '7' &&
                        user.phoneNo[0] != '8' &&
                        user.phoneNo[0] != '9')
                ) {
                    console.log(user.phoneNo[0] !== '6', user.phoneNo[0] !== 6, user.phoneNo.length)
                    toast.error('Please enter valid Phone number')
                    return
                }
                if (user.pincode.length !== 6) {
                    toast.error("Please enter valid pincode")
                    return
                }
            }

            console.log(abs1)
            let errorAbsTemp = true;
            if (
                (abs1 < 30 || abs1 > 400) ||
                (abs2 < 30 || abs2 > 400) ||
                (abs3 < 30 || abs3 > 400) ||
                (abs4 < 30 || abs4 > 400) ||
                (abs5 < 30 || abs5 > 400)) {
                setErrorAbstract(true);
                errorAbsTemp = true;
            }
            else {
                setErrorAbstract(false)
                errorAbsTemp = false;
            }


            const addData = {
                usersToAdd,
                leaderEmail: usersToAdd[0].email,
                name: teamName,
                problemPreference,

            }
            console.log(addData)

            if (errorAbsTemp) {
                toast.error('Please provide abstract min 30 and max 400 characters')
                return
            }


            let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/register`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(addData)
            });


            if (res.status === 201) {
                toast.success(`"You have successfully registered! Please check your email at ${usersToAdd[0].email} for further instructions."`);
                setUsersToAdd([{
                    fname: '',
                    lname: '',
                    email: '',
                    phoneNo: 0,
                    gender: '',
                    city: '',
                    pincode: 0,
                    college: '',
                    degree: '',
                    dept: '',
                    year: ''

                }]);
                setTeamName('');
                setProblemPreference([
                    { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
                    { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
                    { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
                    { problems: '', abstract: '', preferenceNumber: 0, techStack: '' },
                    { problems: '', abstract: '', preferenceNumber: 0, techStack: '' }
                ]);
            } else if (res.status === 400) {
                const data = await res.json()
                toast.error(`${data.message}`)
            } else if (res.status === 405) {
                const data = await res.json()
                toast.error(`${data.message}`)
            } else {
                toast.error("Something went wrong")
            }
        } catch (err) {
            console.log("Error " + err)
        } finally {
            setSubmitText("Submit");
            setSubmitting(false)
        }

    };
    let [err, setErr] = useState(false)

    function isAnyFieldFilled(index) {


        const user = usersToAdd[index];
        if (!user) {
            return false
        } else {
            let dec = user.fname !== '' || user.fname.length !== 0 ||
                user.lname !== '' || user.lname.length !== 0 ||
                user.city !== '' || user.city.length !== 0 ||
                user.phoneNo !== '' || user.phoneNo.length !== 0 ||
                user.college !== '' || user.college.length !== 0 ||
                user.dept !== '' || user.dept.length !== 0 ||
                user.email !== '' || user.email.length !== 0 ||
                user.gender !== '' || user.gender.length !== 0 ||
                user.state !== '' || user.state.length !== 0 ||
                user.pincode !== '' || user.pincode.length !== 0

            if (dec) {
                return true
            } else {
                return false
            }
        }

    }
    return (
        <>
            <div>
                <Header />
                <ToastContainer />

                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="glitch-wrapper mb-3">
                        <h1 className="glitch" data-text="Registration">Registration</h1>
                    </div>
                    <form className="form-main-container marginal mt-5" onSubmit={handleSubmit}>

                        <h3 className="form-h3">Team Details</h3>
                        <div className="form-main-container form-grid">

                            <div className="form-main-container formMeet">
                                <div className=" form-grid">
                                    <div className="mx-5">
                                        <div className=" form-grid-note">
                                            <label className="form-heading text-center" for="id_team_name">
                                                Note
                                            </label>
                                            <div className='container form-control text-dark' style={{ backgroundColor: '#08b2aa' }}>
                                                <ol class="list-group">
                                                    <label>👉 No Special Characters are Allowed in College Name.</label>
                                                    <label>👉 Avoid selecting the input field within the member form for individuals you do not wish to include.</label>
                                                    <label>👉 Ensure that phone numbers and email addresses are unique, with no duplicates permitted.</label>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-leader-container">
                                <div className="details-container form-grid">
                                    <label className="form-heading" for="id_team_name">
                                        Team Name
                                        <span style={{ "color": "tomato" }}> *</span>
                                    </label>
                                    {/* Team Name */}
                                    <input type="text" className="form-control" id="id_team_name" name="team_name" placeholder="Team Name"
                                        data-error="Please enter your name" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />

                                    <label className="form-heading" for="id_team_name">
                                        Team Leader
                                        <span style={{ "color": "tomato" }}> *</span>
                                    </label>
                                    {/* Team Leader Name */}
                                    <input type="text" className="form-control" pattern="[A-Za-z]+" id="id_team_leader_name" name="to_name"
                                        placeholder="First Name" value={usersToAdd[0]?.fname || ''} onInput={(e) => handleUserChange(0, 'fname', e.target.value)} data-error="Please enter your First name" required />

                                    <input type="text" className="form-control" pattern="[A-Za-z]+" id="id_team_leader_name" name="to_name"
                                        placeholder="Last Name" value={usersToAdd[0]?.lname || ''} onChange={(e) => handleUserChange(0, 'lname', e.target.value)} data-error="Please enter your Last name" required />

                                    {/* Team Leader Email id */}
                                    <input type="email" className="form-control email-input" id="id_team_leader_email" name="to_email"
                                        placeholder="Email (All notifications will be sent to this mail.)" value={usersToAdd[0]?.email || ''} onChange={(e) => handleUserChange(0, 'email', e.target.value)} data-error="Please enter your Email" required />
                                    {/* Team Leader Phone  */}
                                    <input type="number" maxLength="10" pattern="^[6-9]\d{9}$" className="form-control half-form tel-input" id="id_team_leader_tel_number"
                                        name="team_leader_tel_number" value={usersToAdd[0]?.phoneNo || ''} onChange={(e) => handleUserChange(0, 'phoneNo', e.target.value)} placeholder="Phone Number" data-error="Please enter your team name"
                                        required />

                                    {/* Team Leader Gender */}
                                    <select className="form-control half-form"
                                        value={usersToAdd[0]?.gender || ''} onChange={(e) => handleUserChange(0, 'gender', e.target.value)}
                                        name="team_leader_gender" id="id_team_leader_gender">
                                        <option className="form-control" disabled hidden value="">Gender</option>
                                        <option className="form-control" value="male">Male</option>
                                        <option className="form-control" value="female">Female</option>
                                    </select>

                                    {/* Team leader college name */}
                                    <input type="text" className="form-control" id="id_team_leader_college_name" name="team_leader_college_name"
                                        placeholder="College Name" pattern="^[A-Za-z]+( [A-Za-z]+)*$" value={usersToAdd[0]?.college || ''} onChange={(e) => handleUserChange(0, 'college', e.target.value)} data-error="Please enter your College name" required />


                                    {/* Team Leader Degree, Dept. , Year */}
                                    <input type="text" className="form-control  half-form tel-input" list={`degree5`} pattern="^[A-Za-z.]+( [A-Za-z.]+)*$"
                                        required={err} name="team_leader_tel_number" value={usersToAdd[0]?.degree || ''} onChange={(e) => handleUserChange(0, 'degree', e.target.value)} placeholder="Degree" data-error="Please enter your team name"
                                    />
                                    <datalist id={`degree5`}>
                                        <option value="B.E" >Bachelor of Engineering</option>
                                        <option value="B.Tech" >Bachelor of Technology</option>
                                        <option value="B.Sc" >Bachelor of Science</option>
                                        <option value="BCA" >Bachelor of Computer Application</option>
                                    </datalist>

                                    <select className="form-control half-form"
                                        value={usersToAdd[0]?.year || ''} onChange={(e) => handleUserChange(0, 'year', e.target.value)}
                                        name="team_leader_gender" id="id_team_leader_gender">
                                        <option className="form-control" disabled hidden value="">Year</option>
                                        <option className="form-control" value="FE">First Year</option>
                                        <option className="form-control" value="SE">Second Year</option>
                                        <option className="form-control" value="TE">Third Year</option>
                                        <option className="form-control" value="BE">Fourth Year</option>
                                    </select>

                                    <input type="text" pattern='^[A-Za-z\s]+$' list='department09' className="form-control half-form" id="id_team_leader_college_name" name="team_leader_college_name"
                                        placeholder="Department" value={usersToAdd[0]?.dept || ''} onChange={(e) => handleUserChange(0, 'dept', e.target.value)} data-error="Please enter your Department name" required />
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
                                    <input type="number" maxLength={6} pattern="[0-9]{6}" className="form-control half-form tel-input" id="id_team_leader_tel_number"
                                        name="team_leader_tel_number" value={usersToAdd[0]?.pincode || ''} onChange={(e) => handleUserChange(0, 'pincode', e.target.value)} placeholder="Pin Code" data-error="Please enter your Pincode name"
                                        required />

                                    {/* Team Leader City name*/}
                                    <input type="text"
                                        value={usersToAdd[0]?.city || ''}
                                        onChange={(e) => handleUserChange(0, 'city', e.target.value)} pattern="^[A-Za-z\s]+$"
                                        placeholder="City " className="form-control half-form  " name="city_name" id="city_name" required />
                                    {/* Team Leader State*/}
                                    <input type="text"
                                        value={usersToAdd[0]?.state || ''} pattern="^[A-Za-z\s]+$"
                                        onChange={(e) => handleUserChange(0, 'state', e.target.value)}
                                        placeholder="State " className="form-control half-form " name="state_name" id="state_name" required />

                                </div>
                            </div>
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className={`team-member${index + 1}-container`}>
                                    <div className="details-container form-grid">
                                        <label className="form-heading" for="id_teammate1_name">
                                            Teammate {_}
                                        </label>

                                        {/* Member Name */}
                                        <input type="text" pattern="[A-Za-z]+" className="form-control" id="id_team_leader_name" name="to_name"
                                            placeholder="First Name" value={usersToAdd[index + 1]?.fname || ''} onInput={(e) => handleUserChange(index + 1, 'fname', e.target.value)} required={isAnyFieldFilled(index + 1)} data-error="Please enter your First name" />
                                        <input type="text" pattern="[A-Za-z]+" className="form-control" id="id_team_leader_name" name="to_name"
                                            required={isAnyFieldFilled(index + 1)} placeholder="Last Name" value={usersToAdd[index + 1]?.lname || ''} onInput={(e) => handleUserChange(index + 1, 'lname', e.target.value)} data-error="Please enter your Last name" />


                                        {/* Member Email */}
                                        <input type="email" className="form-control email-input" id="id_team_leader_email" name="to_email"
                                            required={isAnyFieldFilled(index + 1)} placeholder="Email" value={usersToAdd[index + 1]?.email || ''} onInput={(e) => handleUserChange(index + 1, 'email', e.target.value)} data-error="Please enter your Email" />



                                        {/* Member Phone */}
                                        <input type="number" maxLength="10" pattern="^[6-9]\d{9}$" className="form-control half-form tel-input" id="id_team_leader_tel_number"
                                            required={isAnyFieldFilled(index + 1)} name="team_leader_tel_number" value={usersToAdd[index + 1]?.phoneNo || ''} onInput={(e) => handleUserChange(index + 1, 'phoneNo', e.target.value)} placeholder="Phone Number" data-error="Please enter your Phone Number"
                                        />

                                        <select className="form-control half-form"
                                            value={usersToAdd[index + 1]?.gender || ''} onInput={(e) => handleUserChange(index + 1, 'gender', e.target.value)}
                                            required={isAnyFieldFilled(index + 1)}
                                            name="team_leader_gender" id="id_team_leader_gender">
                                            <option className="form-control" disabled hidden value="">Gender</option>
                                            <option className="form-control" value="male">Male</option>
                                            <option className="form-control" value="female">Female</option>
                                        </select>

                                        {/* Member College */}
                                        <input type="text" pattern="^[A-Za-z]+( [A-Za-z]+)*$" className="form-control" id="id_team_leader_college_name" name="team_leader_college_name"
                                            required={isAnyFieldFilled(index + 1)} placeholder="College Name" value={usersToAdd[index + 1]?.college || ''} onInput={(e) => handleUserChange(index + 1, 'college', e.target.value)} data-error="Please enter your College name" />

                                        {/* Member Degree, Dept., Year */}
                                        <input type="text" className="form-control half-form" list={`degree${index}`}
                                            required={isAnyFieldFilled(index + 1)} name="team_leader_tel_number" pattern="^[A-Za-z.]+( [A-Za-z.]+)*$" value={usersToAdd[index + 1]?.degree || ''} onInput={(e) => handleUserChange(index + 1, 'degree', e.target.value)} placeholder="Degree" data-error="Please enter your Degree"
                                        />
                                        <datalist id={`degree${index}`}>
                                            <option value="B.E" >Bachelor of Engineering</option>
                                            <option value="B.Tech" >Bachelor of Technology</option>
                                            <option value="B.Sc" >Bachelor of Science</option>
                                            <option value="BCA" >Bachelor of Computer Application</option>
                                        </datalist>
                                        <select className="form-control half-form"
                                            value={usersToAdd[index + 1]?.year || ''} onChange={(e) => handleUserChange(index + 1, 'year', e.target.value)}
                                            name="team_leader_gender" id="id_team_leader_gender">
                                            <option className="form-control" disabled hidden value="">Year</option>
                                            <option className="form-control" value="FE">First Year</option>
                                            <option className="form-control" value="SE">Second Year</option>
                                            <option className="form-control" value="TE">Third Year</option>
                                            <option className="form-control" value="BE">Fourth Year</option>
                                        </select>


                                        <input type="text" list={`browsers${index}`} pattern='^[A-Za-z\s]+$' className="form-control half-form" id="id_team_leader_college_name" name="team_leader_college_name"
                                            required={isAnyFieldFilled(index + 1)} placeholder="Department" value={usersToAdd[index + 1]?.dept || ''} onInput={(e) => handleUserChange(index + 1, 'dept', e.target.value)} data-error="Please enter your Department name" />
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
                                        <input type="number" maxLength="6" pattern="[0-9]{6}" className="form-control half-form tel-input" id="id_team_leader_tel_number"
                                            required={isAnyFieldFilled(index + 1)} name="team_leader_tel_number" value={usersToAdd[index + 1]?.pincode || ''} onInput={(e) => handleUserChange(index + 1, 'pincode', e.target.value)} placeholder="Pin Code" data-error="Please enter your Pincode number"
                                        />


                                        <input type="text"
                                            pattern='^[A-Za-z\s]+$'
                                            required={isAnyFieldFilled(index + 1)}
                                            value={usersToAdd[index + 1]?.city || ''}
                                            onInput={(e) => handleUserChange(index + 1, 'city', e.target.value)}
                                            placeholder="City " className="form-control half-form  " name="city_name" id="city_name" />
                                        <input type="text"
                                            pattern='^[A-Za-z\s]+$'
                                            required={isAnyFieldFilled(index + 1)}
                                            value={usersToAdd[index + 1]?.state || ''}
                                            onInput={(e) => handleUserChange(index + 1, 'state', e.target.value)}
                                            placeholder="State " className="form-control half-form " name="state_name" id="state_name" />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <hr className="form-hr" /><br />

                        <h3 className="form-h3">Problem Statement Selection</h3>
                        <div className="problem-statement-container form-grid">
                            {problemPreference.map((problem, index) => (
                                <div key={index} className={`problem${index + 1}-container blur-container form-grid`}>
                                    <div className="form-heading">
                                        Problem {index + 1}
                                    </div><br />
                                    <select className="form-control" required value={problem.problems} onChange={(e) => handleProblemSelect(index, e.target.value)} aria-label="Default select example">
                                        <option disabled hidden value="">Select a problem</option>
                                        {problems.map((item) => (
                                            <option key={item._id} value={item._id} disabled={problemPreference.some(pref => pref.problems === item._id && pref !== problem)}>
                                                {item.title}
                                            </option>

                                        ))}
                                    </select>
                                    <textarea
                                        className="form-control" name="" id="" cols="" rows="" placeholder='Abstract' value={problem.abstract} onChange={(e) => handleProblemChange(index, 'abstract', e.target.value)} required>
                                    </textarea>

                                    {index === 0 ? (<h6 className='abslength' style={{ color: abs1 > 400 ? "red" : "#08b2aa" }}>{abs1}/400</h6>) : index == 1 ? (<h6 style={{ color: abs2 > 400 ? "red" : "#08b2aa" }} className='abslength'>{abs2}/400</h6>) : index == 2 ? (<h6 style={{ color: abs3 > 400 ? "red" : "#08b2aa" }} className='abslength'>{abs3}/400</h6>) : index == 3 ? (<h6 style={{ color: abs4 > 400 ? "red" : "#08b2aa" }} className='abslength'>{abs4}/400</h6>) : index == 4 ? (<h6 style={{ color: abs5 > 400 ? "red" : "#08b2aa" }} className='abslength'>{abs5}/400</h6>) : <></>}


                                    <input type="text" className="form-control" id="id_team_leader_name" name="to_name"
                                        value={problem.techStack} onChange={(e) => handleProblemChange(index, 'techStack', e.target.value)}
                                        placeholder="Technology Stack" data-error="Please enter your First name" required />

                                </div>
                            ))}

                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button disabled={submitting} className={`btn btn-brand text-light px-5 my-5`} style={{ fontSize: "20px" }} type="submit">
                                <span className={`d-flex justify-content-center align-items-center `}>
                                    {submitText} &nbsp;
                                    <span style={{ display: submitting ? "" : "none" }} class="loader">
                                        <span class="loader-wheel"></span>
                                    </span>

                                </span>
                            </button>
                        </div>
                    </form>
                    {/* <Design /> */}
                </div>
            </div>
        </>
    )
}

export default Registration
