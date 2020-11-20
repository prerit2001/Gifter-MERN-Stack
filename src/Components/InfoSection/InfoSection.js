
import React,{useState} from 'react';
import { Container, Button } from '../../Styled-Global';
import Modal from 'react-modal';
import {FaWindowClose} from 'react-icons/fa';


import {
  InfoSec,
  ForgetPass,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Cross,
  Input,
  Heading1,
  Button1,
  Account,
  FullName,
  Age,
  Input1
} from './InfoSection.element';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 


function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [isPreviewShown, setPreviewShown] = useState(0);
  const [ForgetPassword, setForgetPassword] = useState(0);
  const [otp, setotp] = useState(0);
  const [blank, setblank] = useState(0);


  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  function handlePreview(e){
    e.preventDefault();

    setPreviewShown(isPreviewShown===0 ? 1: 0); // Here we change state
    setForgetPassword(0);

 }

 function handlePreview2(e){
  e.preventDefault();

    setForgetPassword(ForgetPassword===0 ? 1: 0); // Here we change state
    setblank(blank===0 ? 1: 0);
}

function OTP(e){
  e.preventDefault();

  if(otp===1){
    setotp(otp===0 ? 1:0)
    closeModal();
  }

    setotp(otp===0 ? 1: 0); // Here we change state
}
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {/* <Link to='/login'>
              
                 
                </Link> */}
                <Button big fontBig primary={primary} onClick={openModal}>
                    {buttonLabel}
                  </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>


      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
       
         <h2 ref={_subtitle => (subtitle = _subtitle)} > </h2>
         <Cross><FaWindowClose onClick={closeModal} /></Cross>
        
         { blank===0 && isPreviewShown===0 && 
         <>
           <Heading1>Sign In</Heading1>
           <form>
         <Input type="email" placeholder="📓 Username" name="username" required/><br/>
         <Input type="password" placeholder="🔑 Password" name="password" required/>
         
         <ForgetPass onClick={handlePreview2}>Forget Your Password ?</ForgetPass>
         <Button1 type="submit" >Login</Button1>
         
         <Account onClick={handlePreview}>Don't Have Account ? Sign Up Here 😊</Account>
         </form>
          </>
         }

         { blank===0 && isPreviewShown===1 && 
          <>
            <Heading1>Sign Up</Heading1>
            <form>
            <FullName type="text" placeholder="👨 Full Name" required></FullName>
            <FullName type="text" placeholder="🤔 Moto" required></FullName>
            <br/>
            <Age type="tel" id="phone" placeholder="📲 Phone Number" name="phone" pattern="[0-9]{10}" required></Age>
            <Age type="number" placeholder="👨 Age" pattern="[0-9]{2}" required></Age><br/>
            <Input1 type="email" placeholder="📓 Username" name="username" required/>
            <Input1 type="password" placeholder="🔑 Password" name="password" required/><br/>
            <Button1 type="submit" >Register</Button1>
            <Account onClick={handlePreview}>Already Have Account ? Login Here😊</Account>
            </form>
          </>
         }

         {
          otp===0 && blank===1 && ForgetPassword===1  &&
           <>
           <Heading1>Forgot</Heading1>
           <Heading1>Password?</Heading1>
           <form>
            <Input type="email" placeholder="📓 Username" name="username" required/><br/>
            <Input type="number" placeholder="👨 Age" pattern="[0-9]{2}" required/><br/>
            <Button1 type="submit" onClick={OTP}>Request OTP</Button1>
            <Account onClick={handlePreview2}>Go Back 😊</Account>
            </form>
           </> 
         }

         {
           otp==1 && 
           
           <>
           <Heading1>OTP Sent !</Heading1>
           <Heading1>Check Mail?</Heading1>
            <form>
              <Input type="number" placeholder="Enter OTP" pattern="[0-9]{6}" required/><br/>
              <Button1 type="submit" onClick={OTP}>Submit Request</Button1>
              <Account onClick={OTP}>Cancel 😊</Account>
            </form>
           </>
         }
        

         

        </Modal>
    </>
  );
}

export default InfoSection;