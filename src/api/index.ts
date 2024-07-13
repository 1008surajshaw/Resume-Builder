import { onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";


// export const getUserDetails = () =>{
//   return new Promise((resolve,rejects) =>{
//     const unsubscribe = auth.onAuthStateChanged((userCred) =>{
//       if(userCred){
//         const userData = userCred.providerData[0];
//         //  const unsubscribe = onSnapshot(doc(db,""))
//         console.log(userData);
//         return userData;
//       }else {
//         rejects(new Error("user is not authenticated"))
//       }
//        // make sure to unscribe the listener to prevent the memory leaks
//        unsubscribe();

//     })
//   })
// }

import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

  //@ts-ignore
export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_upload_preset'); 

  const response = await fetch(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  return data.secure_url; 
};

// CLOUDINARY_URL=cloudinary://983576994281217:ek43EK7hbtNJ1KgjGdr5eGKHfMM@dm1ghdlep
