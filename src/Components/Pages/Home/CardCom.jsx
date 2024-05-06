import React from "react";
import { Card } from "flowbite-react";
import { FaCircle, FaRegHeart } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";
import "./Home.css";

export default function CardCom() {
  axios({
    method: "get",
    url: " http://localhost:8000/post/getAll",
  })
    .then((res) => {
      console.log("Product Res=>", res.data);
    })
    .catch((err) => {
      console.log("Product Error=>", err);
    });

  return (
    <div className="card-container">
      <Card className="instagram-card">
        <div className="instagram-header">
          <img src="/post.jpg" alt="User" className="user-avatar" />
          <h5 className="username">Username</h5>
          <IoIosMore className="more-icon" />
        </div>
        <img src="/post.jpg" alt="Post" className="post-image" />
        <div className="instagram-footer">
          <div className="icons">
            <button className="icon-button">
              <FaRegHeart className="icon" />
            </button>
            <button className="icon-button">
              <FiMessageCircle className="icon" />
            </button>
            <button className="icon-button">
              <FiSend className="icon" />
            </button>
          </div>
          <button className="icon-button">
            <BsBookmark className="icon" />
          </button>
        </div>
        <p className="likes">9 Likes</p>
        <p className="description">
          Here are the biggest enterprise technology acquisitions of 2021...
          more
        </p>
        <p className="add-comment">Add Comment...</p>
      </Card>
    </div>
  );
}

// import React from "react";
// import { Card } from "flowbite-react";
// import { FaCircle, FaRegHeart } from "react-icons/fa6";
// import { IoIosMore } from "react-icons/io";
// import { FiMessageCircle, FiSend } from "react-icons/fi";
// import { BsCollectionFill } from "react-icons/bs";
// import axios from "axios";
// import "./Home.css";

// export default function CardCom() {
//   axios({
//     method: "get",
//     url: " http://localhost:8000/post/getAll",
//   })
//     .then((res) => {
//       console.log("Product Res=>", res.data);
//     })
//     .catch((err) => {
//       console.log("Product Error=>", err);
//     });

//   return (
//     <div className="card-container">
//       <Card>
//         <div>
//           <span >
//             <img
//               src="/post.jpg"
//             />
//             <span >
//               <h5 >Noteworthy technology</h5>
//               <h6 >
//                 <FaCircle className="" style={{ fontSize: "4px" }} /> 1d
//               </h6>
//             </span>
//           </span>

//           <span>
//             <IoIosMore />
//           </span>
//         </div>
//         <img src="/post.jpg" />
//         <div >
//           <span >
//             <FaRegHeart />
//             <FiMessageCircle />
//             <FiSend />
//           </span>
//           <span >
//             <BsCollectionFill />
//           </span>
//         </div>
//         <p>9 Likes</p>
//         <p>
//           Here are the biggest enterprise technology acquisitions of 2021...
//           more
//         </p>
//         <p>Add Comment...</p>
//       </Card>
//     </div>
//   );
// }
