import React from "react";
import { Backdrop } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC = () => {
  return (
    <Backdrop open>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <CircularProgress />
      </div>
    </Backdrop>
  );
};

export default Loading;
