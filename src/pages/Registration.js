import { Link } from "react-router-dom";

const Registration = () => {
    return (
    <div className="w-50 mx-auto mt-4">
        <h1 className="text-center mb-4">Registration Page</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <Link to="/"><div className="mt-2">Alraedy a user click here to Login</div></Link>
    </div>
    )
}

export default Registration;