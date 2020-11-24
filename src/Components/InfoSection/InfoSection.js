
import React,{useState} from 'react';
import { Container, Button } from '../../Styled-Global';
import Modal from 'react-modal';
import {FaWindowClose} from 'react-icons/fa';
import axios from 'axios';
import {Link} from 'react-router-dom';


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
  Input1,
  Prof
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
  const [profile,setProfile] = useState(false);
  const [name,setname] = useState('Folks');


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

  const [UName,UsetName] = useState('');
  const [UMoto,UsetMoto] = useState('');
  const [UPhone,UsetPhone] = useState('');
  const [UAge,UsetAge] = useState('');
  const [UEmail,UsetEmail] = useState('');
  const [UPassword,UsetPassword] = useState('');

function Register(e){
  e.preventDefault();

    console.log("Register");
    const Name = UName;
    const Email = UEmail;
    const Password = UPassword;
    const Age = UAge;
    const Phone = UPhone;
    const Moto = UMoto;

    const signpupdata = {
      Name : Name,
      Moto : Moto,
      Phone : Phone,
      Age : Age,
      Email: Email,
      Password : Password
    }

    axios.post('http://localhost:3001/api/signup',signpupdata)
    .then(function(responce){
      console.log(responce);
      setProfile(true);
      setblank(1);
      setname(Name);
    })
    .catch(function(error){
      console.log(error);
    });
} 

  const [IEmail,IsetEmail] = useState('');
  const [IPassword,IsetPassword] = useState('');

  function Login(e){
    e.preventDefault();

    console.log("Login");
    const Email = IEmail;
    const Password = IPassword;

    const loginformdata = {
      Email : Email,
      Password: Password
    }

    axios.post('http://localhost:3001/api/signin',loginformdata)
    .then(function(responce){
      console.log(responce);
      setProfile(true);
      setblank(1);
      setname(responce.data.user.Name);
    })
    .catch(function(error){
      console.log(error);
      alert('🙊 Login Failed : Invalid Credential 🙊');
    });

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
         <Input type="email" placeholder="📓 Email" onChange={event => IsetEmail(event.target.value)} required/><br/>
         <Input type="password" placeholder="🔑 Password" onChange={event => IsetPassword(event.target.value)} required/>
         
         <ForgetPass onClick={handlePreview2}>Forget Your Password ?</ForgetPass>
         <Button1 type="submit" onClick={Login}>Login</Button1>
         
         <Account onClick={handlePreview}>Don't Have Account ? Sign Up Here 😊</Account>
         </form>
          </>
         }

         { blank===0 && isPreviewShown===1 && 
          <>
            <Heading1>Sign Up</Heading1>
            <form >
            <FullName type="text" placeholder="👨 Full Name" onChange={event => UsetName(event.target.value)} required></FullName>
            <FullName type="text" placeholder="🤔 Moto" onChange={event => UsetMoto(event.target.value)} required></FullName>
            <br/>
            <Age type="tel" id="phone" placeholder="📲 Phone Number" name="phone" pattern="[0-9]{10}"  onChange={event => UsetPhone(event.target.value)} required></Age>
            <Age type="number" placeholder="👨 Age" pattern="[0-9]{2}" onChange={event => UsetAge(event.target.value)} required></Age><br/>
            <Input1 type="email" placeholder="📓 Email" name="email" onChange={event => UsetEmail(event.target.value)} required/>
            <Input1 type="password" placeholder="🔑 Password" name="password" onChange={event => UsetPassword(event.target.value)} required/><br/>
            <Button1 type="submit" onClick={Register}>Register</Button1>
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
            <Input type="email" placeholder="📓 Email" name="email" required/><br/>
            <Input type="number" placeholder="👨 Age" pattern="[0-9]{2}" required/><br/>
            <Button1 type="submit" onClick={OTP}>Request OTP</Button1>
            <Account onClick={handlePreview2}>Go Back 😊</Account>
            </form>
           </> 
         }

         {
           otp===1 && 
           
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

         {
           blank===1 && profile && 
           <>
           <Heading1>😎</Heading1>
           <Heading1>Welcome</Heading1>
           <Heading1>{name}</Heading1>
           <Button><Prof to="/sign-up">Go To Your Profile Section</Prof></Button>
           </>
         }
        

         

        </Modal>
    </>
  );
}

export default InfoSection;