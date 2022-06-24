const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const Job = require("../models/Job.model");
const Employer = require("../models/Employer.model");

router.post("/employer/signup", (req, res) => {
  const { password, email } = req.body;
  console.log(req.body);
  if (!email) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide your username." });
  }

  // if (password.length < 8) {
  //   return res.status(400).json({
  //     errorMessage: "Your password needs to be at least 8 characters long.",
  //   });
  // }

  //   ! This use case is using a regular expression to control for special characters and min length
  /*
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (!regex.test(password)) {
    return res.status(400).json( {
      errorMessage:
        "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
  }
  */

  // Search the database for a user with the username submitted in the form
  Employer.findOne({ email }).then((found) => {
    // If the user is found, send the message username is taken
    if (found) {
      return res.status(400).json({ errorMessage: "Username already taken." });
    }

    // if user is not found, create a new user - start with hashing the password
    return (
      bcrypt
        .genSalt(saltRounds)
        .then((salt) => bcrypt.hash(password, salt))
        .then((hashedPassword) => {
          // Create a user and save it in the database
          return Employer.create({
            email,

            password: hashedPassword,
          });
        })
        // .then((user) => {
        //   Session.create({
        //     user: user._id,
        //     createdAt: Date.now(),
        //   }).then((session) => {
        //     res.status(201).json({ user, accessToken: session._id });
        //   });
        // })
        .catch((error) => {
          if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ errorMessage: error.message });
          }
          if (error.code === 11000) {
            return res.status(400).json({
              errorMessage:
                "Username need to be unique. The username you chose is already in use.",
            });
          }
          return res.status(500).json({ errorMessage: error.message });
        })
    );
  });
});

//<<<<<<<<<<<<<<<<<<L O G I N >>>>>>>>>>>>>>>>>

// router.get("/employer/login", (req, res) => res.render("auth/login"))
// router.post("/login", async(req, res, next) => {
//   const { email, password } = req.body
//   if (email === "" || password === "") {
//     res.render("auth/login", {
//       errorMessage: "Please enter both, email and password to login.",
//     })
//     return
//   }
//   const user = await User.findOne({ email })
//       if (!user?.email) {
//         res.render("auth/login", { errorMessage: "Email is not registered. Try with other email." })
//         return
//       }
//       else if (bcryptjs.compareSync(password, user.passwordHash)) {
//         //******* SAVE THE USER IN THE SESSION ********//
//         req.session.currentUser = user
//   res.redirect('/userProfile')
// } else {
//         // if the two passwords DON"T match, render the login form again
//         // and send the error message to the user
//         res.render('auth/login', { errorMessage: 'Incorrect password.' })
//       }
//     })
// router.get("/userProfile", async (req, res) => {
//   const currentUser = req.session.currentUser;
//   let allBooks = await Book.find()
//   const userBooks = {
//     currentUser,
//     allBooks
//   }

router.post("/employer/login", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide your username." });
  }

  // Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  // if (password.length < 8) {
  //   return res.status(400).json({
  //     errorMessage: "Your password needs to be at least 8 characters long.",
  //   });
  // }

  // Search the database for a user with the username submitted in the form
  Employer.findOne({ email })
    .then((user) => {
      // If the user isn't found, send the message that user provided wrong credentials
      if (!user) {
        return res.status(400).json({ errorMessage: "Wrong credential find." });
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res
            .status(400)
            .json({ errorMessage: "Wrong credentials bycryt." });
        }
        // Session.create({ user: user._id, createdAt: Date.now() }).then(
        //   (session) => {
        //     return res.json({ user, accessToken: session._id });
        //   }
        // );
      });
    })

    .catch((err) => {
      next(err);
      // return res.status(500).render("login", { errorMessage: err.message });
    });
});

router.delete("/employer/logout", (req, res) => {
  Session.findByIdAndDelete(req.headers.authorization)
    .then(() => {
      res.status(200).json({ message: "User was logged out" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    });
});

router.post("/postjob", async (req, res) => {
  try {
    const { title, description, location, price } = req.body;
    const newJob = { title, description, location, price: Number(price) };
    const createdJob = await Job.create(newJob);
    console.log(createdJob);
    res.status(200).json(createdJob);
  } catch {
    console.log("Unable to create job");
  }
});
router.get("/jobs", async (req, res) => {
  try {
    const jobOffers = await Job.find();
    console.log(jobOffers);
  } catch {
    console.log("No job offer found");
  }
});

module.exports = router;
