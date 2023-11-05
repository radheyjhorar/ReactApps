import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ProfileInformation from "./profile-information/ProfileInformation";
import ManageAddresses from "./manage-addresses/ManageAddresses";
import PANCardInformation from "./pan-card-information/PANCardInformation";
import MyWishlist from "./my-wishlist/MyWishlist";

const UserProfile = () => {
  return (
    <div>
      <Box>
        <Grid container px={8} spacing={2}>
          <Grid item sm={3}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                width: "100%",
                p: 1.5,
                mb: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "3.5rem",
                  height: "3.5rem",
                }}
              ></Avatar>

              <Box pl={1.5}>
                <Box>
                  <Typography>Hello,</Typography>
                </Box>
                <Typography variant="h6" component={"p"}>
                  User Name
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                width: "100%",
              }}
            >
              <Box width={"100%"}>
                <Box display={"flex"} alignItems={"center"} p={2.5}>
                  <ViewListIcon
                    color="primary"
                    sx={{
                      fontSize: "1.8rem",
                    }}
                  />

                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    color={"#888"}
                    pl={1.5}
                  >
                    My Orders
                  </Typography>

                  <KeyboardArrowRightIcon
                    sx={{
                      color: "#888",
                      fontSize: "1.8rem",
                      ml: "auto",
                    }}
                  />
                </Box>
              </Box>

              <Divider />

              <Box width={"100%"} pb={2}>
                <Box display={"flex"} alignItems={"center"} p={2.5}>
                  <PersonIcon
                    color="primary"
                    sx={{
                      fontSize: "1.8rem",
                    }}
                  />

                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    color={"#888"}
                    pl={1.5}
                  >
                    Account Settings
                  </Typography>
                </Box>

                <Box>
                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        Profile Information
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        Manage Addresses
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        PAN Card Information
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider />

              <Box width={"100%"} pb={2}>
                <Box display={"flex"} alignItems={"center"} p={2.5}>
                  <AccountBalanceWalletIcon
                    color="primary"
                    sx={{
                      fontSize: "1.8rem",
                    }}
                  />

                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    color={"#888"}
                    pl={1.5}
                  >
                    Payments
                  </Typography>
                </Box>

                <Box>
                  <Box pl={7}>
                    <Box
                      p={1.2}
                      display={"flex"}
                      alignItems={"center"}
                      position={"relative"}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        Gift Cards
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#388e3c",
                          position: "absolute",
                          right: "1.5rem",
                        }}
                      >
                        $0
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        Saved UPI
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        Saved Cards
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider />

              <Box width={"100%"} pb={2}>
                <Box display={"flex"} alignItems={"center"} p={2.5}>
                  <FolderSharedIcon
                    color="primary"
                    sx={{
                      fontSize: "1.8rem",
                    }}
                  />

                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    color={"#888"}
                    pl={1.5}
                  >
                    My Stuff
                  </Typography>
                </Box>

                <Box>
                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        My Coupons
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        My Reviews & Ratings
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        All Notifications
                      </Typography>
                    </Box>
                  </Box>

                  <Box pl={7}>
                    <Box p={1.2}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: "500",
                          color: "#555",
                        }}
                      >
                        My Wishlist
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider />

              <Box width={"100%"}>
                <Box display={"flex"} alignItems={"center"} p={2.5}>
                  <PowerSettingsNewIcon
                    color="primary"
                    sx={{
                      fontSize: "1.8rem",
                    }}
                  />

                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"1.2rem"}
                    fontWeight={"500"}
                    color={"#888"}
                    pl={1.5}
                  >
                    Logout
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={9}>
            <Box sx={{ backgroundColor: "#fff" }}>
              <MyWishlist />
              <Box py={3} px={4}>
                  {/* <ProfileInformation /> */}
                  {/* <ManageAddresses /> */}
                  {/* <PANCardInformation /> */}
                  
              </Box>

              <Box>
                <Box>
                  <img
                    width={"100%"}
                    height={"auto"}
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
                    alt="banner"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserProfile;
