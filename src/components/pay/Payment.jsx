import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./pay.css";
import {
  AlertBox,
  Container,
  Input,
  InputBox,
  Instruction,
  Label,
  Pay,
  Wrapper,
} from "./style";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPurchase } from "../../redux/purchase";
import { changeProperty } from "../../redux/properties";

const PaymentForm = ({ goods }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("geen");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const l = useSelector(store=>store.language.value)

  console.log(goods);

  const AddtoPurchases = () => {
    name && email && address && dispatch(addPurchase(goods));
  };
  const EffectProperty = () => {
    name && email && address && dispatch(changeProperty("purchase"));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Perform Stripe payment processing here
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Handle successful payment
      console.log("Payment method created:", paymentMethod);
      alert("Payment method created:");
    }
  };

  const InputValues = (e) => {
    e.target.name == "name"
      ? setName(e.target.value)
      : e.target.name == "email"
      ? setEmail(e.target.value)
      : setAddress(e.target.value);
  };
  const CheckValues = () => {
    name && email && address ? setColor("green") : setColor("red");
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <>
      <Wrapper className="center">
        <Container className="column-center">
          <Instruction>
            {l == "ENG"
              ? "Fill Out The Form"
              : l == "UZB"
              ? "Anketani To'ldiring"
              : "Заполните форму"}
          </Instruction>
          {/* <form onSubmit={handleSubmit}> */}
          <InputBox id="pay-div" className="column-center">
            <Input
              name="name"
              onChange={InputValues}
              id="pay-input"
              type="text"
            />
            <Label id="pay-label">
              {l == "ENG" ? "Name" : l == "UZB" ? "Ism" : "Имя"}
            </Label>
          </InputBox>
          <InputBox id="pay-div" className="column-center">
            <Input
              name="email"
              onChange={InputValues}
              id="pay-input"
              type="email"
            />
            <Label id="pay-label">
              {l == "RUS" ? "Электронная почта" : "Email"}
            </Label>
          </InputBox>
          <InputBox id="pay-div" className="column-center">
            <Input
              name="address"
              onChange={InputValues}
              id="pay-input"
              type="text"
            />
            <Label id="pay-label">
              {l == "ENG"
                ? "Full Address, including flat number"
                : l == "UZB"
                ? "To'liq Manzil, Honadon Raqami"
                : "Полный адрес, номер квартиры"}
            </Label>
          </InputBox>
          <CardElement id="cardelement" />
          <Pay
            onClick={() => {
              CheckValues();
              AddtoPurchases();
              EffectProperty();
            }}
            type="submit"
            disabled={!stripe}
          >
            {l == "ENG" ? "Pay" : l == "UZB" ? "To'lamoq" : "Платить"}
          </Pay>
          {/* </form> */}
          {show && (
            <AlertBox color={color}>
              {name && email && address
                ? "Successfully Transfered"
                : "Fill out every blank"}
            </AlertBox>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default PaymentForm;
