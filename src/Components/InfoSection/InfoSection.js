
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
  Account
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
  const [isPreviewShown, setPreviewShown] = useState(true);

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

    setPreviewShown(isPreviewShown ? false: true); // Here we change state
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
        
         { isPreviewShown && 
         <>
           <Heading1>Sign In</Heading1>
         <Input type="email" placeholder="📓 Username 　　　　　　　　　　　　　　　  　　👨" name="username"/>
         <Input type="password" placeholder="🔑 Password 　　　　　　　　　    　　　　 　　　👀" name="password"/>
         
         <ForgetPass>Forget Your Password ?</ForgetPass>
         <Button1 type="submit" >Login</Button1>
         
         <Account onClick={handlePreview}>Don't Have Account ? Sign Up Here 😊</Account>
          </>
         }

         { !isPreviewShown && 
          <>
            <Heading1>Sign Up</Heading1>
            
            <Account onClick={handlePreview}>Already Have Account ? Login Here😊</Account>
          </>
         }
        

         

        </Modal>
    </>
  );
}

export default InfoSection;