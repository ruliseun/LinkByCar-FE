import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen"
    >
      <Sidebar />
      <div className="flex flex-1  justify-between py-10 px-20 border">
        <h2 className="text-blackText font-semibold text-3xl">Dashboard</h2>
        <Link
          to={"/edit"}
          className="border border-primary self-start py-2 px-4 rounded-md hover:bg-primary hover:text-gray-200 transition-all duration-200 active:opacity-60"
        >
          Edit Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default Dashboard;
