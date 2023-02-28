import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MainNavbar } from "../components/ui/navbar/main-navbar";

export function Home() {
  return (
    <>
      <MainNavbar isLandingPage />
      <main>
        <Grid2 container>
          <Grid2 md={6} flex>
            <Box px={3} py={2}>
              <Typography variant="h1" textAlign="left">
                Now Everybody Knows Where The Money Is Going
              </Typography>
            </Box>
          </Grid2>
          <Grid2 md={6}>
            <Box p={3}>
              <img src="https://i.imgur.com/gtvwdRh.png" />
            </Box>
          </Grid2>
        </Grid2>
      </main>
    </>
  );
}
