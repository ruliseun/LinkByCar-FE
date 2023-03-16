import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  password: string;
  name: string;
  username: string;
  phone_no: string;
  gender: string;
}

export const signUp = async (
  formData: SignUpData,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void
) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/users/register`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await res.json();

    if (data.status === "success") {
      setLoading(false);
      toast.success(data.message);
      navigate("/login");
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  } catch (err: any) {
    toast.error("An unknown error has occurred");
    throw new Error(err);
  }
};

export const signIn = async (
  formData: SignInData,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void
) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/users/login`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await res.json();

    if (data.status === "success") {
      setLoading(false);
      localStorage.setItem("token", JSON.stringify(data.user.accessToken));
      toast.success(data.message);
      navigate("/");
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  } catch (err: any) {
    setLoading(false);
    toast.error("An unknown error has occurred");
    throw err;
  }
};
