import { useState, useEffect } from "react";
import { getAvatar } from "@/lib/generatorAvatar";
import DefaultAvatar from "../assets/dafault-avatar.svg";

export default function Avatar() {
  const [img, setImg] = useState(DefaultAvatar);

  useEffect(() => {
    const avatar: string | null = localStorage.getItem("avatar");

    if (avatar === null) {
      localStorage.setItem("avatar", getAvatar());
    }

    if (avatar !== null) {
      setImg(avatar);
    }
  }, []);

  return <img src={img} width={200} height={200} alt="Avatar" />;
}
