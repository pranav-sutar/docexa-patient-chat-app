import { motion } from "framer-motion";
import { Send, Lock } from "lucide-react";
import chatBg from "../assets/wp-img.png";
export default function Mainpage() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col bg-[#efeae2]"
    >
      {/* Header */}
      <div className="bg-[#005B74] text-white px-4 py-4 flex items-center shadow-md">
       
      </div>
      <div className="bg-[#2877AF] text-white px-4 py-3 flex items-center shadow-md">
        <div className="w-10 h-10 rounded-full bg-white text-[#075E54] flex items-center justify-center font-bold">
          D
        </div>

        <div className="ml-3">
          <h1 className="font-semibold text-lg">Docexa Clinic</h1>
          <p className="text-xs text-green-100">Online</p>
        </div>
      </div>

{/* Chat Area */}
<div
  className="flex-1 overflow-y-auto px-4 py-4 relative"
  style={{
    backgroundColor: '#91C7F3',
    backgroundImage: `url(${chatBg})`,
    backgroundRepeat: "repeat",
    backgroundSize: "280px",
  }}
>
  {/* Optional overlay to make doodles lighter */}
  <div className="absolute inset-0 bg-gray/50"></div>

  <div className="relative z-10">
    {/* Encryption Message */}
    <div className="flex justify-center mb-4">
      <div className="bg-[#fff3c2] text-gray-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2 max-w-xs text-center shadow">
        <Lock size={14} />
        Messages and calls are end-to-end encrypted.
      </div>
    </div>

    {/* Date */}
    <div className="flex justify-center mb-4">
      <div className="bg-white text-gray-500 text-xs px-3 py-1 rounded-md shadow">
        Today
      </div>
    </div>

    <div className="flex justify-center mb-4">
      <div className="bg-[#00709b] text-white text-gray-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2 max-w-xs text-center shadow">
        
        Send "Hi.." Message To Initialize Communication.
      </div>
    </div>

    {/* Received Message */}
    <div className="flex justify-start mb-3">
      <div className="bg-white px-4 py-2 rounded-lg shadow max-w-[80%]">
        <p>Hello 👋 Welcome to Docexa Clinic.</p>
        <p className="text-[10px] text-gray-500 text-right mt-1">
          10:30 AM
        </p>
      </div>
    </div>

    {/* Sent Message */}
    <div className="flex justify-end mb-3">
      <div className="bg-[#DCF8C6] px-4 py-2 rounded-lg shadow max-w-[80%]">
        <p>Hi Doctor</p>
        <p className="text-[10px] text-gray-500 text-right mt-1">
          10:31 AM ✓✓
        </p>
      </div>
    </div>
    <div className="flex justify-end mb-3">
      <div className="bg-[#DCF8C6] px-4 py-2 rounded-lg shadow max-w-[80%]">
        <p>Hi Doctor</p>
        <p className="text-[10px] text-gray-500 text-right mt-1">
          10:31 AM ✓✓
        </p>
      </div>
    </div>
    <div className="flex justify-end mb-3">
      <div className="bg-[#DCF8C6] px-4 py-2 rounded-lg shadow max-w-[80%]">
        <p>Hi Doctor</p>
        <p className="text-[10px] text-gray-500 text-right mt-1">
          10:31 AM ✓✓
        </p>
      </div>
    </div>
    <div className="flex justify-start mb-3">
      <div className="bg-white px-4 py-2 rounded-lg shadow max-w-[80%]">
        <p>How Can I Help You?</p>
        <p className="text-[10px] text-gray-500 text-right mt-1">
          10:30 AM
        </p>
      </div>
    </div>

    {/* Sent Message */}
    <div className="flex justify-end mb-3">
      <div className="bg-[#DCF8C6] px-4 py-2 rounded-lg shadow max-w-[80%]">
        <p>I need Help</p>
        <p className="text-[10px] text-gray-500 text-right mt-1">
          10:31 AM ✓✓
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Input Area */}
      <div className="bg-[#f0f2f5] p-3 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-white rounded-full px-4 py-3 outline-none"
          />

          <button className="bg-[#25D366] p-3 rounded-full text-white">
            <Send size={20} />
          </button>
        </div>
      </div>
      {/* Input Area */}
      <div className="bg-[#005B74] p-5 border-t">
        <div className="flex items-center gap-2">

        </div>
      </div>
    </motion.div>
  );
}