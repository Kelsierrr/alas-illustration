// app/(components)/FadeIn.jsx
"use client";
import { useEffect, useState } from "react";
import styles from "../(styles)/fadein.module.css";
export default function FadeIn({ children }){
  const [show,setShow]=useState(false);
  useEffect(()=>setShow(true),[]);
  return <div className={show?styles.in:styles.base}>{children}</div>;
}
