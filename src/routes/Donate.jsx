import React from "react";
import FormComponent from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Button from "../components/Button";
import TempDonationImage from "../assets/images/young-volunteers-red-tshirts-work-distribution-point_259150-57360.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Donate = ({ onChange, onClick }) => {
  const donations = [10000, 15000, 25000, 50000, 100000, 500000];
  return (
    <div className="donate">
      <div>
        <div className="header">
          <span className="header__top"></span>
          <img src={TempDonationImage} alt="image of of donation made" />
          <span className="header__bottom">Donation lorem something...</span>
        </div>
        <div className="body">
          <div className="donation-desc">
            <h2>Donation title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              praesentium quis eaque. Iusto sint qui nam esse molestias, veniam
              a nisi ad odit laboriosam officia. Nisi, iste? Voluptatum, odio
              rerum.
            </p>
          </div>
          <div className="donations">
            {donations.map(donation =>{
              return (
                <div>
                  <span>KES.{donation}</span>
                </div>
              )
            })}
            <FormComponent method="POST">
              <h2>Make donations now</h2>
              <LabelWithInput
                type="number"
                id="amount"
                name="amount"
                onChange={onChange}
              >
                Enter amount to donate
              </LabelWithInput>
              <div className="form-group">
                <Button type="submit" onClick={onClick}>
                  donate now
                </Button>
              </div>
            </FormComponent>
          </div>
        </div>
        <div className="footer"></div>
      </div>
      {/* <FormComponent method="POST">
        <h2>Make donations now</h2>
        <LabelWithInput
          type="number"
          id="amount"
          name="amount"
          onChange={onChange}
        >
          Enter amount to donate
        </LabelWithInput> */}
        {/* <LabelWithInput
          type="text"
          id="lastName"
          name="lastName"
          onChange={onChange}
        >
          Last name
        </LabelWithInput>
        <LabelWithInput
          type="email"
          id="email"
          name="email"
          placeholder="e.g. someone@example.com"
          onChange={onChange}
        >
          Email
        </LabelWithInput>
        <LabelWithInput
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        >
          Password
        </LabelWithInput>

        <LabelWithInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
        >
          Confrim password
        </LabelWithInput> */}
        {/* <div className="form-group">
          <Button type="submit" onClick={onClick}>
            donate now
          </Button>
        </div>
      </FormComponent> */}
      {/* <fieldset>
        <legend>or</legend>
        <Button>
          <FaGoogle width={50} hanging={50} />
          Create account with Google
        </Button>
        <Button>
          <FaFacebookF width={50} height={50} />
          Create account with Facebook
        </Button>
      </fieldset> */}
    </div>
  );
};

export default Donate;
