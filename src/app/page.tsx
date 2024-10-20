import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex sticky top-0 w-full bg-blue-900 h-20 px-4">
        <div className="w-auto p-8">
          <Image
          src="/img/logo.png"
          alt="logo"
          width={100}
          height={200} 
          />
        </div>

        <div className="flex justify-evenly items-end py-6 px-8 w-3/5">
          <h1 className="text-2xl text-blue-200 font-serif font-bold ">
          Tuition Free Education Program on Latest Technologies
          </h1>
        </div> 

        <div className="flex justify-center gap-7 items-end py-6 px-4 w-2/5">
          <div className="text-white text-2xl font-normal font-sans w-16 h-8">Home</div>
          <div className="text-white text-2xl font-normal font-sans w-16 h-8">Apply</div>
          <div className="text-white text-2xl font-normal font-sans w-16 h-8">Jobs</div>
          <div className="text-white text-2xl font-normal font-sans w-16 h-8">Result</div>
          <div className="text-white text-2xl font-normal font-sans w-16 h-8">Courses</div> 
        </div>
      </nav>
      <div className="flex justify-around mt-6">
        <div>
          <h1 className="font-sans font-extrabold py-4  text-blue-900 text-7xl mt-16 items-start px-4">Governor Sindh</h1>
          <h1 className="text-5xl text-blue-900 font-serif font-medium px-4">Kamran Khan Tessori</h1>
          <h1 className="text-5xl text-cyan-400 font-sans font-extrabold px-4 py-5 ">Certified Cloud <br/>
          Applied Generative AI <br/>
          Engineer (GenEng)</h1>
          <h3 className="font-sans font-extrabold text-blue-900 text-4xl px-4 py-4 ">Earn up to $5,000 / month</h3>
          <h3 className="font-sans font-extrabold text-blue-900 text-4xl px-4 py-4 ">Now admissions are open in <br/> Hyderabad</h3>
           <br />
          <button className="font-sans font-bold bg-blue-900 text-white text-2xl px-6 py-4 rounded-lg cursor-pointer ">Apply Now</button> 
        </div>
        <div className="w-96 h-auto justify-end bg-[url('/img/KamranTessori.png')] bg-cover bg-center mt-12 "></div>
      </div>

      <div className=" flex justify-center mt-12">
        <h1 className="font-sans font-extrabold py-12 text-blue-900 text-3xl text-justify ">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur<br/> Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      </div>

      <div className=" flex justify-center py-2 mr-24 ml-24">
        <p className="font-serif font-normal text-black text-xl text-justify ">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing <br/>
         infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs <br/>
         trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by <br/>
         eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur <br/>
         businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the <br/>
        ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
      </div>
       
       {/*3 Cards */}

      <div className="flex w-full h-96 justify-evenly px-4 py-6 gap-2 cursor-pointer">
        <div className="w-1/4 h-96  bg-[url('/img/card1.jpg')] bg-cover rounded-lg "></div>
        <div className="w-1/4 h-96  bg-[url('/img/card2.jpg')] bg-cover rounded-lg"></div>
        <div className="w-1/4 h-96 bg-[url('/img/card3.jpg')] bg-cover rounded-lg"></div>
      </div>
       
       {/*2 Cards */}

       <div className="flex w-full justify-evenly px-2 py-6 mt-8 gap-8 cursor-pointer">
        <div className="w-2/5 h-96 bg-[url('/img/card4.jpg')] bg-cover rounded-lg"></div>
        <div className="w-2/5 h-96 bg-[url('/img/card5.jpg')] bg-cover rounded-lg"></div>
      </div>
      

      
      <footer className="flex justify-evenly bg-blue-50 text-justify-md text-2xl font-serif px-10 py-4 mb-2 w-full h-96 gap-x-10 ">
        <div>
          <ul className="font-sans text-black text-xl font-semibold  ">
            <li className="font-bold text-2xl ">Core Courses</li><br/>
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>

        <div >
          <ul className="font-sans text-black text-xl font-semibold ">
             <li className="font-bold text-2xl ">Advanced Courses</li> <br/>
             <li>Web 3 and Metaverse</li>
             <li>Cloud-Native Computing</li>
             <li>Artificial Intelligence (AI) and Deep Learning</li>
             <li>Ambient Computing and IoT</li>
             <li>Genomics and Bioinformatics</li>
             <li>Network Programmability and Automation</li>
          </ul>
        </div>
        <div>
        <ul className="font-sans text-black text-xl font-semibold ">
         <li className="font-bold text-2xl ">Social Links</li> <br/>
         <li>Facebook</li>
         <li>LinkedIn</li>
         <li>Twitter</li>
         <li>Instagram</li>
         <li>Youtube</li>
          </ul>
        </div>
       </footer>
      <div className=" text-blue-900 font-semibold text-center text-2xl mb-4">
      <h3> © 2024 Made by Rahat Bano. All rights reserved</h3>
      <h3>Homework Done! <b>Given by: Sir Ali Jawwad</b> Slot: Tuesday 7 to 10</h3>
       </div>
    </div>  
  
  );
}
