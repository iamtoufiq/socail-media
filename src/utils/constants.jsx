export const filterConstants = {
  trending: "trending",
  userPost: "user-posts",
  recent: "recent",
};

export const statusConstants = {
  idle: "idle",
  loading: "loading",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

export const cloudinaryLink =
  "https://api.cloudinary.com/v1_1/dyxrawxzh/image/upload";

export const toastConstants = {
  signupSuccess: "SignUp Successful",
  loginAfterSignup: "Login with your new account",
  signupFailed: "SignUp failed",
  loginSuccess: "Login Successful",
  loginFailed: `Login Failed`,
  postSuccess: "New Post Created",
  postFailed: "New Post Failed",
  draftSuccess: "Added to Drafts",
  draftFailed: "Add to Draft Failed",
  deleteSuccess: "Post Deleted",
  deleteFailed: "Post delete Failed",
  editSuccess: "Post edited",
  editFailed: "Post edit Failed",
  profileSuccess: "Profile edited",
  profileFailed: "Profile edit Failed",
  logout: "You are logged out",
  commentSuccess: "Comment Added",
  commentFailed: "Comment not added",
  archiveSuccess: "Post archived",
  archiveFailed: "Post archive failed",
  unArchiveSuccess: "Post un-archived",
  addTag: "Tag added",
  removeTag: "Tag removed",
  commentWarn: "Empty comment could not be posted",
};

export const toufiqLoginCredentials = {
  email: "imtouifq2@gmail.com",
  password: "1234567",
};
//tanayLoginCredentials
export const tanayLoginCredentials = {
  email: "ta@gmail.com",
  password: "123456",
};

export const initialSignUpInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  acceptTC: false,
};

export const titleConstants = {
  loginPage: "Login/Signup",
  bookmarkPage: "Your Bookmarked Posts",
  errorPage: "Page not Found",
  explorePage: "Explore CommuniShare",
  feedPage: "Your Feed",
  profilePage: "Your Profile page",
};

export const loginPageTabList = [
  {
    key: "login",
    tab: "Login",
  },
  {
    key: "signup",
    tab: "Sign Up",
  },
];

export const toastProps = {
  hideProgressBar: true,
  autoClose: 3500,
  position: "top-center",
  closeOnClick: true,
};

export const initialLoginInput = { email: "", password: "" };
