import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MainNavbar } from "../components/ui/navbar/main-navbar";

export function Home() {
  return (
    <>
      <MainNavbar isLandingPage />
      <main>
        <Grid2 container>
          <Grid2 xs={12} md={6} flex>
            <Box
              px={3}
              sx={{
                minHeight: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                textAlign="left"
                sx={{
                  fontSize: {
                    xs: "3rem",
                  },
                }}
              >
                Now Everybody Knows Where The Money Is Going
              </Typography>
            </Box>
          </Grid2>
          <Grid2 md={6} xs={12}>
            <Box maxWidth="100%" py={3}>
              <img
                style={{
                  maxWidth: "100%",
                }}
                src="https://i.imgur.com/gtvwdRh.png"
              />
            </Box>
          </Grid2>
        </Grid2>
      </main>
    </>
  );
}
