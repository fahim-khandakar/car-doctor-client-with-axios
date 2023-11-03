import { Link, useLocation, useNavigate } from "react-router-dom";
import imgSignUp from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <div className=" w-1/2">
          <img src={imgSignUp} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-5 font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-warning"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center pb-5">
            Already Have An Account?
            <Link className="text-orange-500 font-bold" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
