// formHelper.js

export const handleFormSubmit = async (e, usersToAdd, teamName, setSubmitText, setSubmitting, setUsersToAdd, setTeamName, toast) => {
    e.preventDefault();
    setSubmitText("Validating");
    setSubmitting(true);
    try {
        for (const user of usersToAdd) {
            if (
                user.phoneNo.length !== 10 ||
                !['6', '7', '8', '9'].includes(user.phoneNo[0])
            ) {
                toast.error('Please enter a valid Phone number');
                return;
            }
            if (user.pincode.length !== 6) {
                toast.error("Please enter a valid pincode");
                return;
            }
        }

        const addData = {
            usersToAdd,
            leaderEmail: usersToAdd[0].email,
            name: teamName,
        };

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
                phoneNo: '',
                gender: '',
                city: '',
                pincode: '',
                college: '',
                degree: '',
                dept: '',
                year: ''
            }]);
            setTeamName('');
        } else {
            const data = await res.json();
            toast.error(`${data.message}`);
        } 
    } catch (err) {
        console.log("Error " + err);
    } finally {
        setSubmitText("Submit");
        setSubmitting(false);
    }
};


export const isAnyFieldFilled = (index, usersToAdd) => {
    const user = usersToAdd[index];
    if (!user) {
        return false;
    } else {
        return Object.values(user).some((val) => val !== '');
    }
};