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
      //   setUsersToAdd([
      //     {
      //       fname: "",
      //       lname: "",
      //       email: "",
      //       phoneNo: "",
      //       gender: "",
      //       city: "",
      //       pincode: "",
      //       college: "",
      //       degree: "",
      //       dept: "",
      //       year: "",
      //     },
      //   ]);
      //   setTeamName("");
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
