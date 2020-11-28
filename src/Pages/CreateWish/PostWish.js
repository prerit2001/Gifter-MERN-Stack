import React from 'react'
import './Postwish.css'


export const PostWish = () => {
    return (
        <div>
            <h1 style={{cursor: "pointer",backgroundColor: "#4B59F7",color: "white",padding: "10px"}}><u>Add Your Wishlist</u></h1>
            <div class="container1">
                <form >
                <div class="row">
                    <div class="col-25">
                    <label for="fname">Short Title</label>
                    </div>
                    <div class="col-75">
                    <input className="ttext" type="text" name="shorttitle" pattern="{20}" placeholder="Less than 20 characters" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="lname">Heading</label>
                    </div>
                    <div class="col-75">
                    <input className="ttext" type="text" id="lname" name="lastname" placeholder="Less than 20 character" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="lname">Priority</label>
                    </div>
                    <div class="col-75">
                    <input className="nnumber" type="number" id="lname" name="lastname" placeholder="Lesser the number, Higher the priority" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="country">Select Wish Categories</label>
                    </div>
                    <div class="col-75">
                    <select id="country" name="country">
                      
                        <option value="australia">Electronics</option>
                        <option value="canada">TV and Appliances</option>
                        <option value="usa">Man Wearing</option>
                        <option value="usa">Women Wearing</option>
                        <option value="usa">Baby & Kids</option>
                        <option value="usa">Home and Furnitures</option>
                        <option value="usa">Sports</option>
                        <option value="usa">Others</option>

                    </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="subject">Subject To Wish</label>
                    </div>
                    <div class="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "200px"}}></textarea>
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="Submit" className="ssubmit" />
                </div>
                </form>
            </div>
        </div>
    )
}





// import React from 'react';
// import Modal from 'react-modal';
// import {FaWindowClose} from 'react-icons/fa';
// import {
//     Cross
// } from './../../Components/InfoSection/InfoSection.element'


// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   };
   


// export const PostWish = () => {
//     var subtitle;
//     const [modalIsOpen,setIsOpen] = React.useState(true);

//     function openModal() {
//         setIsOpen(true);
//     }
    
//     function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//     }
    
//     function closeModal(){
//         setIsOpen(false);
//     }
    
//     return (
//         <>
//              <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
       
//          <h2 ref={_subtitle => (subtitle = _subtitle)} > </h2>
//          <Cross><FaWindowClose onClick={closeModal} /></Cross>
        
         

//         </Modal>
//         </>
//     )
// }
