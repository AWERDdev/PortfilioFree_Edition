import { useState } from "react";

export const useValidateUserData = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  
  return {
    setUserName,
    setUserEmail,
    setUserMessage,
    userName,
    userEmail,
    userMessage
  };
};

  
// interface PropErrorHandler {
//     result: {
//         status: number;
//         message?: string;
//     };
//     errors: string[];
// }

// export const errorHandler = ({ result, errors }: PropErrorHandler) => {
//     if (result.status === 500) {
//         const errorMsg = result.message || 'Please do not leave any of the inputs empty';
//         console.log(errorMsg);
//         errors.push(errorMsg); // Add the error to the array
//     }
// };
