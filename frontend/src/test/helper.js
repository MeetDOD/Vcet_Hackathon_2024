// formHelper.js
export const checkGender = (gender, name, index, toast) => {
  if (index == 0 && gender == "default") {
    toast.error(`Leader gender`);
    return true;
  }

  if (name && gender == "default" && index != 0) {
    toast.error("jdaljfjd memver");
    return true;
  }
};
export const handleFormSubmit = async (
  e,
  usersToAdd,
  teamName,
  setSubmitText,
  setSubmitting,
  setUsersToAdd,
  setTeamName,
  toast
) => {
  e.preventDefault();
  setSubmitText("Validating");
  setSubmitting(true);
  try {
    let i = 0;
    for (const user of usersToAdd) {
      console.log(user);
      if (Object.keys(user).length < 12) {
        usersToAdd.splice(i, 1); // Remove the user
        continue;
      } 
      if (
        user.phoneNo?.length !== 10 ||
        !["6", "7", "8", "9"].includes(user.phoneNo[0])
      ) {
        toast.error(
          `Please enter a valid Phone number for ${
            i === 0 ? " team leader " : `Teammate ${i}`
          }`
        );
        return;
      }
      if (user.pincode?.length !== 6) {
        toast.error(
          `Please enter a valid pincode for ${
            i === 0 ? " team leader " : `Teammate ${i}`
          }`
        );
        return;
      }

      const githubUrlRegex = /^https:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+(\/[A-Za-z0-9_-]+)?\/?$/;

      if (!user.gitHubUrl || !githubUrlRegex.test(user.gitHubUrl)) {
        toast.error(
          `Please enter a valid GitHub URL for ${
            i === 0 ? "team leader" : `Teammate ${i}`
          }`
        );
        return;
      }


      if (!user.gender) {
        toast.error(
          `Please enter a gender for ${
            i === 0 ? " team leader " : `Teammate ${i}`
          } `
        );
        return;
      }

      const flag = checkGender(user?.gender, user?.fname, i, toast);
      if (flag) return;

      if (!user.year) {
        toast.error(
          `Please enter a year for ${
            i === 0 ? " team leader " : `Teammate ${i}`
          } `
        );
        return;
      }

      if (!user.dept) {
        toast.error(
          `Please enter a year for ${
            i === 0 ? " team leader " : `Teammate ${i}`
          } `
        );
        return;
      }

      i++;
    }

    const addData = {
      usersToAdd,
      leaderEmail: usersToAdd[0].email,
      name: teamName,
    };

    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/register`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(addData),
      }
    );

    const data = await res.json();
    console.log(data);
    console.log(res.status);

    if (res.status === 201) {
      toast.success(
        `"You have successfully registered! Please check your email at ${usersToAdd[0].email} for further instructions."`
      );
        setUsersToAdd([
          {
            fname: "",
            lname: "",
            email: "",
            phoneNo: "",
            gender: "",
            city: "",
            pincode: "",
            college: "",
            degree: "",
            dept: "",
            year: "",
          },
        ]);
        setTeamName("");
    } else {
      console.log(toast);
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
    const flag = Object.values(user).some((val) => val !== "");
    return flag;
  }
};


export const fillTestFormData = (teamL) => {

  const usersToAdd = [];

  alert(teamL)

  const generateRandomString = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const generateRandomNumber = (length) => {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const generateRandomEmail = () => {
    return `${generateRandomString(5)}@gmail.com`;
  };

  const generateRandomPhoneNo = () => {
    return `9${generateRandomNumber(9)}`;
  };

  const generateRandomPincode = () => {
    return generateRandomNumber(6);
  };

  const generateRandomGender = () => {
    const availableGender = ["male", "female"];
    return availableGender[Math.floor(Math.random() * availableGender.length)];
  };

  const generateRandomYear = () => {
    const availableYear = ["FE", "SE", "TE", "BE"];
    return availableYear[Math.floor(Math.random() * availableYear.length)];
  };

  const generateRandomDept = () => {
    const availableDept = ["IT", "COMP", "EXTC", "ETRX"];
    return availableDept[Math.floor(Math.random() * availableDept.length)];
  };

  const generateRandomCollege = () => {
    const availableCollege = ["VJTI", "SPIT", "VESIT", "DJ"];
    return availableCollege[Math.floor(Math.random() * availableCollege.length)];
  };

  const generateRandomDegree = () => {
    const availableDegree = ["B.Tech", "M.Tech", "B.E", "M.E"];
    return availableDegree[Math.floor(Math.random() * availableDegree.length)];
  };

  const generateRandomCity = () => {
    const availableCity = ["Mumbai", "Pune", "Nashik", "Nagpur"];
    return availableCity[Math.floor(Math.random() * availableCity.length)];
  };

  const generateRandomGitHubUrl = () => {
    const username = generateRandomString(8); // Increased length for more realistic GitHub usernames
    return `https://github.com/${username}`;
  };

  const fillRandomData = () => {
    return {
      fname: generateRandomString(5),
      lname: generateRandomString(5),
      email: generateRandomEmail(),
      phoneNo: generateRandomPhoneNo(),
      gender: generateRandomGender(),
      city: generateRandomCity(),
      pincode: generateRandomPincode(),
      college: generateRandomCollege(),
      degree: generateRandomDegree(),
      dept: generateRandomDept(),
      year: generateRandomYear(),
      gitHubUrl: generateRandomGitHubUrl(),
    };
  };

  console.log(teamL)

  for (let i = 0; i < teamL; i++) {
    const randomData = fillRandomData();
    usersToAdd.push(randomData);
  }

  console.log(usersToAdd);



  return usersToAdd;
};
