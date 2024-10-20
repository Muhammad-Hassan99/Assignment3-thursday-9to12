import Image from "next/image";
import Link from "next/link";
import Cards from "./components/review";
import Contact from "./components/Contact";

export default function Home() {
  return  <div>
                   <ul className="flex bg-white text-pink-400 text-2xl font-semibold">
    <Image src={"/images/Logo 2.png"} width={70} height={50} alt=""/>
    <div className="flex space-x-20 justify-center w-full items-center">
      <li className="hover:text-white hover:scale-110 hover:bg-lime-400">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-white hover:scale-110 hover:bg-lime-400">
        <Link href="">Ceramic dental implants</Link>
      </li>
      <li className="hover:text-white hover:scale-110 hover:bg-lime-400">
        <Link href="#Dentist">Find a dentist</Link>
      </li>
      <li className="hover:text-white hover:scale-110 hover:bg-lime-400">
        <Link href="#events">Event</Link>
      </li>
      <li className="hover:text-white hover:scale-110 hover:bg-lime-400">
        <Link href="#contact">Contact</Link>
      </li>
      <button className="bg-pink-700 text-white rounded-lg px-2">Click To action</button>
    </div>
  </ul>



  <div className="py-20 bg-pink-500  ">
   <div className="mx-auto text-white font-sans flex items-center justify-between">
     <div className="border-2  w-2/4 items-center font-bold text-3xl flex  ml-28" >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit laudantium labore voluptate nam molestiae, odio nostrum atque nulla voluptatum officiis vitae veniam a rem pariatur perspiciatis ea dicta culpa?</p>
        </div>
     <Image src="/images/image3.png" alt="DOCTOR IMAGE" width={"450"} height={"200"} className="rounded-lg  mx-5"/>
 
  </div>

  </div>


  <div className=" flex items-center justify-center mt-20 px-2 bg-pink-700 ">
    <h1 className="text-4xl text-white font-bold  ">PRODUCT REVIEWS SECTION</h1>
    </div>
<div className=" p-8  bg-white flex space-x-20 justify-center flex-wrap ">
 
  
    <div className=" flex flex-col border-2 w-60 border-gray-300  ">
      <Cards
      imageSrc="/images/image4.webp"
      altText="Nextjs"
     text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quae dolore nemo amet officia porro ducimus, quisquam nulla tenetur adipisci eaque assumenda molestiae minima expedita eos ipsam impedit. Recusandae"
       />
    
    </div>
 



  
    <div className="flex flex-col  border-2 border-gray-300 w-60">
      <Cards
      imageSrc="/images/image5.jpg"
      altText="LOREM"
         text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quae dolore nemo amet officia porro ducimus, quisquam nulla tenetur adipisci eaque assumenda molestiae minima expedita eos ipsam impedit. Recusandae"
     />
      
    </div>



    <div className="flex flex-col border-2 border-gray-300  w-60">
    
        <Cards
      imageSrc="/images/image6.jpg"
      altText="LOREM"
            text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quae dolore nemo amet officia porro ducimus, quisquam nulla tenetur adipisci eaque assumenda molestiae minima expedita eos ipsam impedit. Recusandae"
     />
   
    </div>
    </div>


    
    <div className="py-20 bg-gray-500 justify-center flex  ">
 
   <div className=" font-sans  w-4/6 items-center font-semibold text-2xl ml-28 text-black py-8 ">
   <h1 className="text-4xl font-bold text-center " id="Dentist">Find a dentist</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit laudantium labore voluptate nam molestiae, odio nostrum atque nulla voluptatum officiis vitae veniam a rem pariatur perspiciatis ea dicta culpa?</p>
             <div className="flex justify-center">
             <input type="text" className=" mx-2 rounded-lg my-2" placeholder="ENETR ZIP CODE"/>
       
             </div>
              </div>
  </div>

  <div className=" flex items-center justify-center mt-20 px-2 bg-pink-700 ">
    <h1 className="text-4xl text-white font-bold   " id="events">EVENTS</h1>
    </div>
  <div className=" p-8  bg-white flex space-x-20 justify-center flex-wrap ">
 
  
 <div className=" flex flex-col border-2 w-60 border-gray-300  ">
   <Cards
   imageSrc="/images/image7.jpg"
   altText="Nextjs"
  text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quae dolore nemo amet officia porro ducimus, quisquam nulla tenetur adipisci eaque assumenda molestiae minima expedita eos ipsam impedit. Recusandae"
    />
 
 </div>





 <div className="flex flex-col  border-2 border-gray-300 w-60">
   <Cards
   imageSrc="/images/image8.webp"
   altText="LOREM"
      text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quae dolore nemo amet officia porro ducimus, quisquam nulla tenetur adipisci eaque assumenda molestiae minima expedita eos ipsam impedit. Recusandae"
  />
   
 </div>



 <div className="flex flex-col border-2 border-gray-300  w-60">
 
     <Cards
   imageSrc="/images/image9.jfif"
   altText="LOREM"
         text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime quae dolore nemo amet officia porro ducimus, quisquam nulla tenetur adipisci eaque assumenda molestiae minima expedita eos ipsam impedit. Recusandae"
  />

 </div>
 </div>
  {/* <div className="flex space-x-11 justify-center mt-6">
        <Testimonial
          imageSrc="/nomial4.jpg"
          altText="TYPESCRIPT"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed ad neque. Iusto optio dolorum quibusdam, iure laboriosam numquam similique asperiores sed modi quod ipsa harum non nesciunt reiciendis cupiditate!"
        />
        <Testimonial
          imageSrc="/nomial3.jpg"
          altText="TYPESCRIPT"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed ad neque. Iusto optio dolorum quibusdam, iure laboriosam numquam similique asperiores sed modi quod ipsa harum non nesciunt reiciendis cupiditate!"
        />
          <Testimonial
          imageSrc="/nomial3.jpg"
          altText="TYPESCRIPT"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed ad neque. Iusto optio dolorum quibusdam, iure laboriosam numquam similique asperiores sed modi quod ipsa harum non nesciunt reiciendis cupiditate!"
        />
      </div> */}

      {/* Second Row of Testimonials */}


   <Contact />   


      <footer>
  <div className="bg-black py-9">
  <ul className="  text-white  text-2xl font-semibold flex p-8  items-center" >
  <Image src={"/images/Logo 2.png"} width={70} height={50} alt=""/>
    <div className=" flex items-center  flex-col mx-20 ">
    <h1>About</h1> 
       <li className=" hover:text-white hover:scale-110 hover:bg-lime-400">Features</li>
        <li className=" hover:text-white hover:scale-110 hover:bg-lime-400">Templates </li>
        <li className=" hover:text-white hover:scale-110 hover:bg-lime-400">Integration</li>
        </div>
        <div className=" flex items-center  flex-col mx-32 "> 
          <h1>Resources</h1>      
       <li className=" hover:text-white hover:scale-110 hover:bg-lime-400">Ebooks</li>
        <li className=" hover:text-white hover:scale-110 hover:bg-lime-400"> Videos </li>
        <li className=" hover:text-white hover:scale-110 hover:bg-lime-400">Tools</li>
        <li className=" hover:text-white hover:scale-110 hover:bg-lime-400">Infographics</li>
        </div>
        <div className="flexl items-center justify-center">
        <div className="flex items-center">
          <label htmlFor="name">Name:
            <input type="text" className="bg-orange-500 mx-2 rounded-lg"/>
          </label>
          <button className="bg-orange-800">SUBSCRIBE</button>
        </div>
        
      </div>
      </ul> 
  </div>
</footer>


  </div>
 
}
