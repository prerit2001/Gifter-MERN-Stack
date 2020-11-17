import React from 'react';
import { Button } from '../../Styled-Global';
import { FooterContainer,FooterSubHeading,FooterSubscription,FooterSubText,Form,FormInput,SocialMedia,SocialLogo,SocialMediaWrap,SocialIcon,WebsiteRights} from './Footer.element';


const Footer = () => {
    return (
        <>
          <FooterContainer>
              <FooterSubscription>
                  <FooterSubHeading>
                      Get Bang The Subscribe Button Below To
                    Recieve Our Latest Updates and Trends. 
                  </FooterSubHeading>
                  <FooterSubText>
                      You Can Unsubscribe At Any Time.
                  </FooterSubText>
                  <Form>
                      <FormInput name='email' placeholder='You Email Here' type='email' />
                          <Button fontBig>Subscribe</Button>
                  </Form>
              </FooterSubscription>
              <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>GIFTER © 2020</WebsiteRights>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        GIFTER
                    </SocialLogo>
                </SocialMediaWrap>
            </SocialMedia>
          </FooterContainer>

        </>
    )
}

export default Footer
