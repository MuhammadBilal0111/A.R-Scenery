import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SEO from "../components/SEO";

function PageNotFound() {
  return (
    <div className="min-h-screen w-full max-w-8xl mx-auto flex flex-col justify-center items-center p-5 gap-5">
      <SEO
        title="Page Not Found | A.R. Landscape"
        description="Oops! The page you're looking for doesn't exist. Explore A.R. Landscape for expert landscaping services."
      />
      <div className="w-80">
        <img
          className="RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G w-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
          alt="404 Not Found"
        ></img>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold font-serif md:text-6xl text-4xl text-green-900">
          404 Not Found
        </h1>
        <p className="md:text-2xl text-lg dark:text-whitetext-gray-800">
          Whoops! That page doesn't exist
        </p>
        <Link to="/">
          <Button variant="contained">Back to the Home Page</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
