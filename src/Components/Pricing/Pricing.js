import React from "react";
import { Button } from "./../../Styled-Global";
import { IoMdPricetags } from "react-icons/io";
import { ImGift, ImConnection } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.element";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoMdPricetags />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$00.00</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature>Gifting Services</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Started</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <ImGift />
                </PricingCardIcon>
                <PricingCardPlan>Gift means Gifter</PricingCardPlan>
                <PricingCardCost>🎁🎁</PricingCardCost>
                <PricingCardLength>Gifting Services</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Get Started</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <ImConnection />
                </PricingCardIcon>
                <PricingCardPlan>Connect With Us</PricingCardPlan>
                <PricingCardCost>✌✊✌</PricingCardCost>
                <PricingCardLength>Request</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Anyone can Connect</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature> 24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Request</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
