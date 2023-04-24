import { Box, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";

interface LoadingIndicatorProps {
  size?: number;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  size = 80,
}: LoadingIndicatorProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <CircularProgress size={size} thickness={5} />
      <Typography variant="h6" fontWeight="bold">
        LOADING...
      </Typography>
    </Box>
  );
};

export default LoadingIndicator;

export const LoadingPage = (): JSX.Element => {
  return (
    <Box sx={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <LoadingIndicator />
      </Box>
    </Box>
  );
};
