import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import{
    Galery,
    Item
} from './ImageGalery.element';

const ImageGallaryComponent = () => {
      return (
            <>  
                
                <h1 style={{cursor: "pointer",textAlign: "center",backgroundColor: "#4B59F7",color: "white",padding: "10px"}}><u>User's Wishlist</u></h1>
               <Galery>
                   <figcaption style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <desc style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</desc>
                   </figcaption> 
                   <figcaption style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <desc style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</desc>
                   </figcaption> 
                   <figcaption style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <desc style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</desc>
                   </figcaption> 
                   <figcaption style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <desc style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</desc>
                   </figcaption> 
                   <figcaption style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <desc style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</desc>
                   </figcaption> 
                   <figcaption style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <desc style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</desc>
                   </figcaption> 
                   <div style={{border: "1px #cccccc solid", padding: "4px", margin: "auto" }}>
                     <Item src="https://th.bing.com/th/id/OIP.VNaZoyWYH573mMPcOxYDOAHaE7?w=287&h=191&c=7&o=5&dpr=1.25&pid=1.7"/>
                     <br/>
                     <div style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</div>
                   </div> 
                 

               </Galery>

            </>
        )
    
}

export default ImageGallaryComponent;