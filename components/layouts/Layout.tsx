import { Box } from "@mui/material";
import Head from "next/head";
import { FC, ReactElement } from "react";
import { Navbar, Sidebar } from "../ui";

interface LayoutI {
  title?:string;
  children:ReactElement|ReactElement[];
}

export const Layout:FC<LayoutI> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{ title }</title>
      </Head>

      <Navbar />
      <Sidebar />
      
      <Box sx={{ padding:'10px 20px' }}>
        { children }
      </Box>
    </Box>
  )
}
