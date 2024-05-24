import { useEffect } from "react";
import Swal from "sweetalert2";

export const SweetAlert = () => {
  let alert = () => {
    Swal.fire({
      title: "Read Me!",
      text: "Responsive website / Optimize Code / closely match the design, layout, animation, and functionality / React JS & Routing or Vanilla JS / bootstrap/font-awesome/google font / console free error",
      p: "hiiiii",

      icon: "success",
    });
  };

  return useEffect(() => {
    alert();
  }, []);
};
