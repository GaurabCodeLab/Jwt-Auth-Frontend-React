import { Link } from "react-router-dom";
const Login = () => {
    return (
    <div className="w-50 mx-auto mt-4">
        <h1 className="text-center mb-4">Login Page</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <Link to="/registration"><div className="mt-2">Not a user click here to Registration</div></Link>
    </div>
    )
}

export default Login;