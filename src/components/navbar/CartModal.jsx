import {
  Modal,
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
  Fade,
  TablePagination,
  TableFooter,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartModal.css";
import {
  decreamentCartApi,
  increamentCartApi,
  removeFromCartApi,
} from "../../reduxSlices/cartSlices";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
import { useNavigate } from "react-router";

const CartModal = ({ open, handleClose }) => {
  const [tablePage, setTablePage] = useState(0);
  const rowsPerPage = 3;
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  // const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
  const displayTableItems = products.slice(
    tablePage * rowsPerPage,
    tablePage * rowsPerPage + rowsPerPage
  );

  const handleConfirmOpen = (item) => {
    setSelectedItem(item);
    setConfirmOpen(true);
  };
  const handleConfirmClose = () => {
    setConfirmOpen(false);
    setSelectedItem(null);
  };
  const handleConfirmDelete = async () => {
    if (selectedItem) {
      dispatch(removeFromCartApi(selectedItem.courseId._id));

      handleConfirmClose();
    }
  };
  // const handleCheckout = async () => {

  //   await stripePromise;
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   const res = await axios.post(
  //     `${import.meta.env.VITE_BACKEND_URL}/checkout`,
  //     { cartItems: products },
  //     { headers: { Authorization: `Bearer ${token}` } }
  //   );
  //   window.location.href = res.data.url;
  // };
  const handleCheckout = () => {
    if (products.length > 0) {
      navigate("/payment");
    }
  };
  const totalQty = products.reduce((total, item) => {
    total += item.qty;
    return total;
  }, 0);
  const grandTotal = products.reduce((total, item) => {
    total += item.courseId.discountedPrice * item.qty;
    return total;
  }, 0);

  return (
    <>
      {/* Main Cart Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            maxHeight: "80vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 3,
            overflow: "auto",
            p: 3,
          }}
        >
          <div className="cart-header">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", fontSize: "2rem" }}
            >
              Your Cart is Ready
            </Typography>
            <IconButton onClick={handleClose}>
              <CancelIcon fontSize="large" />
            </IconButton>
          </div>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "black" }}>
                  {["Image", "Name", "Price", "Total", "Qty", "Actions"].map(
                    (head) => (
                      <TableCell
                        key={head}
                        sx={{
                          color: "white",
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        {head}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {products.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No Items In the Cart
                    </TableCell>
                  </TableRow>
                ) : (
                  displayTableItems.map((item, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "row-even" : "row-odd"}
                    >
                      <TableCell
                        sx={{
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        <img
                          src={`${import.meta.env.VITE_BACKEND_URL}/${
                            item.courseId.imgUrl
                          }`}
                          className="cart-img"
                          alt=""
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        {item.courseId.title}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        &#8377;{item.courseId.discountedPrice}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        &#8377;{item.courseId.discountedPrice * item.qty}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        <div className="qty-buttons">
                          <Button
                            onClick={() =>
                              dispatch(decreamentCartApi(item.courseId._id))
                            }
                          >
                            <RemoveCircleIcon fontSize="large" />
                          </Button>
                          {item.qty}
                          <Button
                            onClick={() =>
                              dispatch(increamentCartApi(item.courseId._id))
                            }
                          >
                            <AddCircleIcon fontSize="large" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                        }}
                        align="center"
                      >
                        <IconButton onClick={() => handleConfirmOpen(item)}>
                          <DeleteIcon fontSize="large" color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                    }}
                    colSpan={4}
                  />
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    Total Qty
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    {totalQty}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                    }}
                    colSpan={4}
                  />
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    Grand Total
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: { xs: "2rem", sm: "1rem", md: "1rem" },
                    }}
                  >
                    &#8377;{grandTotal}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={7}>
                    <button
                      type="button"
                      disabled={products.length < 0}
                      onClick={handleCheckout}
                      className="w-full p-3 bg-[#f99106] text-white text-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Check out
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    sx={{
                      "& .MuiTablePagination-toolbar": {
                        fontSize: {
                          xs: "1.2rem",
                          sm: "0.9rem",
                          md: "1rem",
                        },
                      },
                      "& .MuiTablePagination-actions": {
                        "& .MuiIconButton-root": {
                          fontSize: { xs: "2rem", sm: "1.2rem" },
                        },
                      },
                      "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                        {
                          fontSize: {
                            xs: "1.2rem",
                            sm: "0.9rem",
                            md: "1rem",
                          },
                        },
                    }}
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={tablePage}
                    onPageChange={(e, value) => setTablePage(value)}
                    rowsPerPageOptions={[]}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        open={confirmOpen}
        onClose={handleConfirmClose}
        closeAfterTransition
      >
        <Fade in={confirmOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 2,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              Are you sure you want to remove this item?
            </Typography>
            <div className="confirm-btns">
              <Button
                variant="contained"
                color="error"
                onClick={handleConfirmDelete}
              >
                Yes
              </Button>
              <Button variant="outlined" onClick={handleConfirmClose}>
                No
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CartModal;
