import styled from 'styled-components';

export const FullPage = styled.div`
    background-color: white;
    display: flex;

    @media screen and (max-width: 950px) {
        width: 100%;    
    }
`

export const Full = styled.div`
    width: 100%;
    background-color: white;
    text-align: center;
    margin: auto;
    position : static;

    @media screen and (max-width:  950px) {
        width: 100%;
       
  }
`


export const Full2 = styled.div`
        width: 600px;
        overflow-x: hidden;
        overflow-y: scroll;
        text-align: center;
        padding: 20px;
        width: 100%;
       -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
       ::-webkit-scrollbar {
        display: none;
       }
       

    @media screen and (max-width:  950px) {
        width: 100%;
       
  }
`

export const SemiFull = styled.div`

    text-align: center;
    background: black ;
    overflow-x: hidden;
    overflow-y: auto;
    
    
`


export const Something = styled.div`

`

export const ProfileImg = styled.img`
    border-radius: 50%;
    height: 300px;
    width: 300px;
    border: 1px solid;
    cursor: pointer;
    margin-top: 10px;
`

export const NameDisplay = styled.button`
    background: #4B59F7;
    color: white;
    font-size: 3rem;
`
export const NameDisplay1 = styled.div`
    background: black;
    color: #4B59F7;
    font-size: 2.5rem;
    margin: auto;
`
export const Moto = styled.button`
    background: black;
    color: white;
    font-size: 1.5rem;
    margin: 10px;
`


export const FollowBox = styled.div`
    background: black;
    color: white;
    padding: 20px;
`

export const Followers = styled.button`
    background: #4B59F7;
    color: white;
    padding: 15px;
    border-radius: 20%;
    font-size: 1rem;
    cursor: pointer;
    margin-left: 2%;
    @media screen and (max-width:  950px) {
        width: 60%; 
        margin: 0;    
    }
`

export const Wishes = styled.button`
    background: #4B59F7;
    color: white;
    padding: 15px;
    border-radius: 20%;
    font-size: 1rem;
    cursor: pointer;
    margin-left: 25%;
    @media screen and (max-width:  950px) {
        width: 60%;   
        margin: 0;  
    }
`

export const Following = styled.button`
   background: #4B59F7;
    color: white;
    padding: 15px;
    border-radius: 20%;
    font-size: 1rem;
    cursor: pointer;
    margin-right: 2%;
    margin-left: 25%;
    @media screen and (max-width:  950px) {
        width: 60%;     
        margin: 0;
    }
`

export const Hr1 = styled.hr`
    border-top: 10px dotted black;
`

export const Hr2 = styled.hr`
    border: 5px solid #4B59F7;
    border-radius: 5px;
`
export const PicChange = styled.button`
    background: white;
    color: black;
    padding: 15px;
    border-radius: 20%;
    font-size: 1rem;
    cursor: pointer;
    
    @media screen and (max-width:  950px) {
        width: 60%;     
    }
`

export const ChatLeft = styled.div`
    position: fixed;
    right: 0px;
    width: 20%;
    background-color: black;
    text-align: center;
    border-left: 4px solid #4B59F7;
    border-right: 4px solid #4B59F7;
    border-top: 4px solid #4B59F7;
    overflow-y:scroll;
    top: 85px;
    bottom:0;
    -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
       ::-webkit-scrollbar {
        display: none;
       }
       
    
    @media screen and (max-width:  950px) {
        width: 0%;     
    }
    /* position: fixed;
    left: 0px;
    width: 20%;
    background-color: white;
    text-align: center;
    border: 4px solid Red;
    
    @media screen and (max-width:  950px) {
        width: 0%;     
    } */
`
export const ChatRight = styled.div`
    position: fixed;
    left: 0px;
    width: 20%;
    background-color: black;
    text-align: center;
    border-right: 4px solid #4B59F7;
    border-top: 4px solid #4B59F7;
    border-left: 4px solid #4B59F7;

    overflow-y:scroll;
    top: 85px;
    bottom:0;
    -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
       ::-webkit-scrollbar {
        display: none;
       }
       
    
    @media screen and (max-width:  950px) {
        width: 0%;     
    }
    /* position: fixed;
    left: 0px;
    width: 20%;
    background-color: white;
    text-align: center;
    border: 4px solid Red;
    
    @media screen and (max-width:  950px) {
        width: 0%;     
    } */
`

export const MainScreen = styled.div`
   overflow-x: hidden;
        overflow-y: scroll;
        text-align: center;
        margin-right: 20%;
        margin-left: 20%;
       -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
       ::-webkit-scrollbar {
        display: none;
       }
       

    @media screen and (max-width:  950px) {
        margin-left: 0%;
       margin-right: 0%;
  }
`