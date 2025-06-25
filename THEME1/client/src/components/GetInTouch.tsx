import { useValidateUserData } from '@/Tools/EmailSending';
import React, { useState } from 'react';

export default function Get_In_Touch() {
  const {
    setUserName,
    setUserEmail,
    setUserMessage,
    userName,
    userEmail,
    userMessage,
  } = useValidateUserData();
  const [message,setmessage] = useState('')
  const [error, setError] = useState('');
  
  const submitData = async (e: React.FormEvent) => {
    e.preventDefault(); // stop form from reloading page
    console.log('submiting data')
    // simple validation
    if (!userName || !userEmail || !userMessage) {
      setError("Please don't leave any input empty");
      setmessage('')
      return;
    }
    console.log('Clearing inputs and sending succes message ')
    // Clear form after successful submission
    setUserName('');
    setUserEmail('');
    setUserMessage('');
    setError('');
    console.log('inputs cleared  sending succes message ')
    setmessage('Message submited succesfuly')
    console.log(' succes message sent ')
    console.log('validated data')
    // uncomment this code to use the API
    
    try {
      // console.log('sending data');
      // const response = await fetch("http://localhost:3500/api/SendEmailBYgmail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ 
      //     userName, 
      //     userEmail, 
      //     userMessage 
      //   }),
      // });
      
      console.log(`data sent and response received`); 
    } catch (err) {
      console.error(`Failed to send data: ${err}`);
      setError(`Failed to send the message. ${err}`);
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto bg-[#1f2937] rounded-lg p-8 sm:p-12 flex flex-col md:flex-row justify-between gap-8 text-white">
        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <ul className="space-y-4 text-purple-300">
          <li className="flex items-center gap-2">
                📧 <a href="#" className="hover:"><span>alex.morgan@example.com</span></a>
              </li>
              <li className="flex items-center gap-2">
                🐙<a href="#"className="hover:"><span>github.com/alexmorgan</span></a> 
              </li>
              <li className="flex items-center gap-2">
                💼 <a href="#"className="hover:"><span>linkedin.com/in/alexmorgan</span></a>
              </li>
              <li className="flex items-center gap-2">
                🐦 <a href="#"className="hover:"><span>@alexmorgan_dev</span></a>
              </li>
          </ul>
        </div>

        {/* Message Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="flex flex-col space-y-4" onSubmit={submitData}>
            {error && <label className="text-red-500">{error}</label>}
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#374151] text-white px-4 py-2 rounded-md outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#374151] text-white px-4 py-2 rounded-md outline-none"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              className="bg-[#374151] text-white px-4 py-2 rounded-md resize-none h-28 outline-none"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition cursor-pointer"
            >
              Send Message
            </button>
            <label className='text-green-500'>{message}</label>
          </form>
        </div>
      </div>
    </section>
  );
}
