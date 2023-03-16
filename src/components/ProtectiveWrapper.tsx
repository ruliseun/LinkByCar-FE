import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ProtectiveWrapper = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  return <div>{children}</div>;
};

export default ProtectiveWrapper;
