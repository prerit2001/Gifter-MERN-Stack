import React, { useState } from "react";
import "./Postwish.css";
import { toast } from "react-toastify";

import axios from "axios";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

export const PostWish = () => {
  const [title, settitle] = useState("");
  const [heading, setheading] = useState("");
  const [image, setimage] = useState("");
  const [priority, setpriority] = useState("");
  const [something, setsomething] = useState("");
  const [categories, setcategories] = useState("");
  const [butt, setbutt] = useState(true);
  // const [url,seturl] = useState('');
  var url = "";

  function PostData(e) {
    e.preventDefault();

    setbutt(false);

    // console.log(title, heading, priority, something, categories);
    setbutt(false);

    if (title.length === 0 || title.length > 20) {
      toast.error(
        "Title Coloumn Error : Should be non-empty less than 20 characters",
        { position: toast.POSITION.TOP_CENTER }
      );
      setbutt(true);
      return;
    }
    if (heading.length === 0 || heading.length > 20) {
      toast.error(
        "Price Coloumn Error : Should be non-empty less than 20 characters",
        { position: toast.POSITION.TOP_CENTER }
      );
      setbutt(true);
      return;
    }
    if (priority <= 0) {
      toast.error("Priority Coloumn Error : Should be greater than 0", {
        position: toast.POSITION.TOP_CENTER,
      });
      setbutt(true);
      return;
    }
    if (something.length === 0 || something.length > 20) {
      toast.error("Subject Coloumn Error : Should be non-empty", {
        position: toast.POSITION.TOP_CENTER,
      });
      setbutt(true);
      return;
    }

    const fileType = image["type"];
    const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validImageTypes.includes(fileType)) {
      // alert('invalid image format');
      toast.error("Invalid Image Type, Retry ?", {
        position: toast.POSITION.TOP_CENTER,
      });
      setbutt(true);
      return;
    }

    var fileSize = image["size"];
    if (fileSize > 1000000) {
      //  alert('Photo Size Exceeds , Size must be less than 500Kb');
      toast.error("Photo Size Exceeds , Size must be less than 1MB", {
        position: toast.POSITION.TOP_CENTER,
      });
      setbutt(true);
      return;
    }

    setbutt(false);

    toast.info("Image Uploading ! Plese Wait !", {
      position: toast.POSITION.TOP_CENTER,
    });

    //  console.log(postwishdata.postedBy)
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gifter");
    data.append("cloud_name", "prerit-cloud");
    async function API() {
      const responce = await fetch(
        "https://api.cloudinary.com/v1_1/prerit-cloud/image/upload",
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success("Image Upload Sucessful ! Wait a Moment !", {
            position: toast.POSITION.TOP_CENTER,
          });
          url = data.url;
          // console.log(url);
        })
        .catch((err) => {
          // console.log(err);
          toast.error("Image Upload Failed , Retry? ", {
            position: toast.POSITION.TOP_CENTER,
          });
          setbutt(true);
          return;
        });

      function AXIOS(responce) {
        const postwishdata = {
          Title: title,
          Heading: heading,
          Priority: priority,
          Pic: url,
          Category: categories,
          Subject: something,
          postedBy: JSON.parse(localStorage.getItem("UserData"))._id,
        };

        // console.log(url);
        axios
          .post(
            "https://node-backend-gifter.herokuapp.com/api/postdata",
            postwishdata
          )
          .then(function (responce) {
            //  console.log(responce);
            toast.success("Added Sucessful", {
              position: toast.POSITION.TOP_CENTER,
            });
            setbutt(true);
            window.location.reload();
          })
          .catch(function (error) {
            //  console.log(error);
            toast.error(error, { position: toast.POSITION.TOP_CENTER });
            setbutt(true);
          });
      }

      AXIOS(responce);
    }

    API();
  }

  return (
    <div>
      <h1
        style={{
          cursor: "pointer",
          backgroundColor: "#4B59F7",
          color: "white",
          padding: "10px",
        }}
      >
        <u>Add Your Wishlist</u>
      </h1>
      <div class="container1">
        <div class="row">
          <div class="col-25">
            <label for="fname">Short Title</label>
          </div>
          <div class="col-75">
            <input
              className="ttext"
              type="text"
              name="shorttitle"
              pattern="^[A-Za-z0-9_.]+$"
              placeholder="Less than 20 characters"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Near-By Cost</label>
          </div>
          <div class="col-75">
            <input
              className="ttext"
              type="text"
              id="lname"
              name="lastname"
              pattern="^[A-Za-z0-9_.]+$"
              placeholder="Less than 20 character"
              onChange={(e) => {
                setheading(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="prio">Priority</label>
          </div>
          <div class="col-75">
            <input
              className="nnumber"
              type="number"
              id="prio"
              name="lastname"
              placeholder="Lesser the number, Higher the priority"
              onChange={(e) => {
                setpriority(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Upload Pic</label>
          </div>
          <div className="col-75">
            <input
              className="nnnumber"
              type="file"
              placeholder="Upload Wish Pic"
              onChange={(e) => {
                setimage(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Wish Categories</label>
          </div>
          <div class="col-75">
            <select
              id="country"
              name="country"
              onChange={(e) => {
                setcategories(e.target.value);
              }}
            >
              <option value="e">Electronics</option>
              <option value="t">TV and Appliances</option>
              <option value="m">Man Wearing</option>
              <option value="w">Women Wearing</option>
              <option value="b">Baby & Kids</option>
              <option value="h">Home and Furnitures</option>
              <option value="s">Sports</option>
              <option value="o">Others</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Subject To Wish</label>
          </div>
          <div class="col-75">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "100px" }}
              onChange={(e) => {
                setsomething(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div class="row">
          {butt && (
            <button className="ssubmit" onClick={PostData}>
              Submit
            </button>
          )}
          {!butt && (
            <img
              alt=""
              src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
              style={{ height: "60px", textAlign: "center" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
