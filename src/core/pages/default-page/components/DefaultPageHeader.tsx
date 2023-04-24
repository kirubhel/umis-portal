import { ArrowBack } from "@mui/icons-material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { Box, Grid, Typography, Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export type DefaultPageHeaderProps = {
  title: string;
  subTitle?:string;
  primaryButtonProps?: DefaultPageHeaderButtonProps;
  secondaryButtonProps?: DefaultPageHeaderButtonProps;
  backButtonLink?: string;
  backButtonTitle?: string;
  dropdownSelector?: React.ReactNode;
};

type DefaultPageHeaderButtonProps = PropsWithChildren<Omit<LoadingButtonProps, "size" | "variant">>;

export const DefaultPageHeader = (props: DefaultPageHeaderProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Box mx={1} mb={2}>
      {props.backButtonLink && props.backButtonTitle && (
        <Button
          startIcon={<ArrowBack />}
          color="inherit"
          onClick={() => {
            navigate(`${props.backButtonLink}`);
          }}
        >
          {props.backButtonTitle}
        </Button>
      )}

      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        flexDirection="row"
        alignItems="center"
        spacing={2}
        wrap="nowrap"
      >
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {props.title}
          </Typography>
          <Typography variant="subtitle1">
  {props?.subTitle}
</Typography>
        </Grid>
        <Grid item container direction="row" xs={"auto"} spacing={1}>
        {props.dropdownSelector && <Grid item>
           {props.dropdownSelector}</Grid>
 }
          {props.primaryButtonProps && (
            <Grid item>
              <LoadingButton size="large" variant="contained" {...props.primaryButtonProps}>
                {props.primaryButtonProps.children}
              </LoadingButton>
            </Grid>
          )}
          {props.secondaryButtonProps && (
            <Grid item>
              <LoadingButton size="large" variant="outlined" {...props.secondaryButtonProps}>
                {props.secondaryButtonProps.children}
              </LoadingButton>
            </Grid>
          )}
 
          </Grid>
      </Grid>
    </Box>
  );
};
