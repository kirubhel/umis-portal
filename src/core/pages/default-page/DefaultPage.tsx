import { Box, Paper } from "@mui/material";
import { PropsWithChildren } from "react";
import { DefaultPageHeader, DefaultPageHeaderProps } from "./components/DefaultPageHeader";

type DefaultPageProps = {
  narrow?: boolean;
} & DefaultPageHeaderProps;

export const DefaultPage = (props: PropsWithChildren<DefaultPageProps>): JSX.Element => {
  return (
    <>
      <Box
        {...(props.narrow && {
          alignSelf: "center",
          width: "500px",
        })}
      >
        <DefaultPageHeader {...props} />
        <Paper
          component="div"
          sx={{ minWidth: "500px" }}
          {...(props.narrow && {
            style: {
              padding: 25,
            },
          })}
        >
          {props.children}
        </Paper>
      </Box>
    </>
  );
};
