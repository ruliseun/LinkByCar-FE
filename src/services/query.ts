import { useQuery, useMutation } from "react-query";
import { NavigateFunction } from "react-router-dom";
import { signIn, signUp } from "./api";

// export const useSignUp = (navigate: NavigateFunction) => {
//   const mutation = useMutation((params) => signUp(params), {
//     onSuccess: (data) => {},
//     onError: (error) => {},
//   });

//   return mutation;
// };

// export const useSignIn = (navigate: NavigateFunction) => {
//   const mutation = useMutation((params) => signIn(params), {
//     onSuccess: (data) => {
//       navigate("/dashboard");
//     },
//     onError: (error) => {},
//   });

//   return mutation;
// };
