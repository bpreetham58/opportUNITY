import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#205781] to-[#F6F8D5] text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to opportUNITY</h1>
      <p className="text-lg text-center max-w-2xl">
        Empowering individuals with disabilities by providing personalized job recommendations.
      </p>
      
      <div className="mt-8 flex space-x-4">
        <Link to="/login">
          <button className="bg-[#4F959D] px-6 py-3 rounded-lg text-white font-semibold transition duration-300 hover:bg-[#76b5a9] hover:scale-105">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-[#4F959D] px-6 py-3 rounded-lg text-white font-semibold transition duration-300 hover:bg-[#76b5a9] hover:scale-105">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
