// import Image from "next/image";



// export default function Contact (){
   
//   return <div id="contact" className="min-h-screen  bg-zinc-400 justify-center flex items-center ">
 
//   <div className="border-4 h-80 w-1/2 ">
// <h1 className="text-black font-bold text-4xl text-center">CONTACT US</h1>
// <div className="flex  items-center py-3  space-x-4  ">

//   <label htmlFor="">Name: 
//       <input type="text" name="Enter your name" id=""  />
//       </label>
//       <label htmlFor=""> Email:
//       <input type="text" name="Enter your name" id=""  />
//       </label>
//       <label htmlFor="">ContactNO: 
//       <input type="text" name="Enter your name" id=""  />
//       </label>
//   </div>
//   <div className="flex  items-center py-9  space-x-4">

//   <label htmlFor="">FName: 
//       <input type="text" name="Enter your name" id=""  />
//       </label>
//       <label htmlFor=""> Course:
//       <input type="text" name="Enter your name" id=""  />
//       </label>
//       <label htmlFor="">Last Institute: 
//       <input type="text" name="Enter your name" id="" />
//       </label>
      
//   </div>
//   <div className="justify-center flex">
//   <button className="bg-orange-500 rounded-md  text-white mt-4 p-1 ">SEND MESSAGE</button>
//   </div>
//   </div>
//   </div>

// }
export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-zinc-400 flex justify-center items-center">
      <div className="border-4 w-full max-w-2xl p-4">
        <h1 className="text-black font-bold text-4xl text-center mb-6">CONTACT US</h1>
        
        {/* First row of input fields with responsive flex-wrap */}
        <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <label className="w-full sm:w-auto flex-1" htmlFor="">
            Name:
            <input type="text" name="name" className="border p-2 w-full" />
          </label>
          <label className="w-full sm:w-auto flex-1" htmlFor="">
            Email:
            <input type="email" name="email" className="border p-2 w-full" />
          </label>
          <label className="w-full sm:w-auto flex-1" htmlFor="">
            ContactNO:
            <input type="text" name="contact" className="border p-2 w-full" />
          </label>
        </div>
        
        {/* Second row of input fields with responsive flex-wrap */}
        <div className="flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <label className="w-full sm:w-auto flex-1" htmlFor="">
            FName:
            <input type="text" name="fname" className="border p-2 w-full" />
          </label>
          <label className="w-full sm:w-auto flex-1" htmlFor="">
            Course:
            <input type="text" name="course" className="border p-2 w-full" />
          </label>
          <label className="w-full sm:w-auto flex-1" htmlFor="">
            Last Institute:
            <input type="text" name="institute" className="border p-2 w-full" />
          </label>
        </div>
        
        {/* Submit button */}
        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 rounded-md text-white p-2">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}
