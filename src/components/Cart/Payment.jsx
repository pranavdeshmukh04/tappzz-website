import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
// import { useCreateOrderMutation } from "../../services/appApi";
import { useNavigate } from "react-router";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Payment = ({ key }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();
  const { cartItems } = useSelector((state) => state.cart);
  const shipping = useSelector((state) => state.shipping);
  const { shipingInfo } = shipping;
  const shippingInfo = shipingInfo[0];
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  console.log(order);
  // const order = {
  //   shippingInfo: {
  //     address: "dasfdsa",
  //     city: "dasfdsa",
  //     state: "dasfdsa",
  //     country: "dasfdsa",
  //     pinCode: 55454,
  //     phoneNo: 323232,
  //   },
  //   orderItems: [
  //     {
  //       name: "JAcker",
  //       price: 1.2,
  //       quantity: 1,
  //       image: "https://i.ibb.co/SmqvJSf/pngfind-com-shoe-png-17335.png",
  //       product: "637a6a8c8aaff34908340db5",
  //     },
  //   ],
  // };
  // const call = async () => {
  //   try {
  //     const res = await fetch("/api/v1/order/new", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(order),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   call();
  // }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    // createOrder({ order });
    navigate("/order-success");
  };

  return (
    <Fragment>
      <CheckoutSteps activeStep={2} />
      <MDBContainer fluid className="py-5 gradient-custom">
        <MDBRow className="d-flex justify-content-center py-5">
          <MDBCol md="7" lg="5" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <MDBRow className="d-flex align-items-center">
                  <MDBCol size="9">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      placeholder="1234 5678 9012 3457"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <MDBInput
                      label="Cardholder's Name"
                      id="form2"
                      type="text"
                      placeholder="Cardholder's Name"
                    />
                  </MDBCol>

                  <MDBCol size="6">
                    <MDBInput
                      label="Expiration"
                      id="form2"
                      type="text"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="CVV"
                      id="form2"
                      type="text"
                      placeholder="&#9679;&#9679;&#9679;"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBBtn
                      color="info"
                      rounded
                      size="lg"
                      onClick={submitHandler}
                    >
                      <ArrowForwardIcon />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};

export default Payment;
