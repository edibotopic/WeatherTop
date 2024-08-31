import { userStore } from '../models/user-store.js';

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  async show(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
      const viewData = {
        title: "Show Current User Details:", 
        user: loggedInUser,
      }
      response.render("show-current-user", viewData);
  }, 

  async edit(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
      const viewData = {
        title: "Edit Current User Details:", 
        user: loggedInUser,
      }
      response.render("edit-current-user", viewData);
  }, 

  async update(request, response) {
    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
    const id = request.params.id;
    await userStore.updateCurrentUser(id, updatedUser); 
    response.redirect("/");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },
};
