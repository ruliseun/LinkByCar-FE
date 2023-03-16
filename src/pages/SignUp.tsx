import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/api";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      username: "",
      phone_no: "",
      gender: "male",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      name: Yup.string()
        .max(20, "Username too long!")
        .required("Full Name is required"),
      username: Yup.string()
        .max(20, "Username too long!")
        .min(2, "Username too short!")
        .required("Full Name is required"),
      phone_no: Yup.string()
        .matches(
          /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
          "Invalid phone number"
        )
        .required("Phone Number is required"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      signUp(values, navigate, setLoading);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex"
    >
      <div className="w-1/2 bg-primary flex flex-col items-center justify-center">
        <img src="/images/logo.svg" alt="" className="w-96" />
      </div>
      <div className="bg-secondary w-1/2 flex flex-col items-center justify-center py-10">
        <h2 className="text-5xl font-semibold text-textColor mb-10">Sign Up</h2>
        <div className="mb-12">
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
          {/* Name */}

          <div className="pb-4">
            <label htmlFor="name" className="block pb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Name"
              className="border-2 border-gray-500 w-full rounded-md p-2 focus:outline-teal-500 focus:ring-teal-500"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.name && formik.errors.name && formik.errors.name}
            </p>
          </div>

          {/* Phone Number */}

          <div className="pb-4">
            <label htmlFor="phone_no" className="block pb-2 text-sm">
              Phone Number{" "}
            </label>
            <input
              type="text"
              name="phone_no"
              value={formik.values.phone_no}
              onChange={formik.handleChange}
              placeholder="Phone Number"
              className="border-2 border-gray-500 w-full rounded-md p-2 focus:outline-teal-500 focus:ring-teal-500"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.phone_no &&
                formik.errors.phone_no &&
                formik.errors.phone_no}
            </p>
          </div>

          {/* Username */}

          <div className="pb-4">
            <label htmlFor="username" className="block pb-2 text-sm">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Username"
              className="border-2 border-gray-500 w-full rounded-md p-2 focus:outline-teal-500 focus:ring-teal-500"
              onBlur={formik.handleBlur}
            />
            <p className="text-red-500 text-xs mt-1">
              {formik.touched.username &&
                formik.errors.username &&
                formik.errors.username}
            </p>
          </div>

          {/* Email */}

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

          {/* Password */}

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

          {/* Gender */}

          <div className="pb-4">
            <label htmlFor="gender" className="block pb-2 text-sm">
              Gender
            </label>

            <select
              name="gender"
              className="border-2 border-gray-500 w-full rounded-md p-2 focus:outline-teal-500 focus:ring-teal-500"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>

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
            {loading ? <BeatLoader color="#f4fafa" /> : "Sign Up"}
          </button>
        </form>

        <p className="mb-2">
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
