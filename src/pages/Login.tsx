import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/api";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      signIn(values, navigate, setLoading);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex h-screen"
    >
      <div className="w-1/2 bg-primary flex flex-col items-center justify-center">
        <img src="/images/logo.svg" alt="" className="w-96" />
      </div>
      <div className="bg-secondary w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold text-textColor mb-10">Sign In</h2>
        <div className="mb-8">
          <p className="text-primary text-3xl text-center">One Platform.</p>
          <p className="text-primary text-3xl">
            Endless possibility for mobility
          </p>
        </div>

        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-1/2 mb-8"
        >
          <div className="pb-4">
            <label htmlFor="email" className="block pb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              className="border-2 border-gray-500 w-full rounded-md p-2 focus:outline-teal-500 focus:ring-teal-500"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.email &&
                formik.errors.email &&
                formik.errors.email}
            </p>
          </div>

          <div className="pb-4">
            <label htmlFor="password" className="block pb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-2 border-gray-500 w-full rounded-md p-2 focus:outline-teal-500 focus:ring-teal-500"
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password}
            </p>
          </div>

          <button
            type="submit"
            className="bg-primary font-semibold text-sm text-white py-3 mt-6 rounded-lg"
          >
            {loading ? (
              <BeatLoader size={"0.7rem"} color="#f4fafa" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
