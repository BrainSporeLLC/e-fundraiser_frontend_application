import React from "react";
import FormComponent from "../components/Form";
import LabelWithInput from "../components/LabelWithInput";
import Button from "../components/Button";
import TempDonationImage from "../assets/images/young-volunteers-red-tshirts-work-distribution-point_259150-57360.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Donate = ({ onChange, onClick }) => {
  const donations = [
    { id: 100000, value: 10000 },
    { id: 15000, value: 15000 },
    {id:25000, value: 25000},
    {id: 50000, value: 50000},
    {id: 100000, value: 100000},
    {id: 500000, value: 500000},
  ];
  return (
    <div className="donate">
      <div>
        <div className="header">
          <span className="header__top"></span>
          <span className="header__bottom">
            Donation lorem something... Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Itaque perferendis magnam aut, obcaecati inventore
            fuga odit explicabo natus aliquam fugit eligendi assumenda sit iure
            quos quam alias cum esse provident?
          </span>
          <img src={TempDonationImage} alt="image of of donation made" />
        </div>
        <div className="body">
          <div className="donations">
            {donations.map(({id, value}) => {
              return (
                <div className="values_card">
                  <Button key={id}>KES.{value}</Button>
                </div>
              );
            })}
          </div>
          <FormComponent method="POST">
              <LabelWithInput
                type="number"
                id="amount"
                name="amount"
                onChange={onChange}
              >
                Other?
              </LabelWithInput>
              <div className="form-group">
                <Button type="submit" onClick={onClick}>
                  donate now
                </Button>
              </div>
            </FormComponent>
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
