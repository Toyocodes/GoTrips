import React from 'react';
import Img1 from '../assets/destination-1.jpg'
import Img2 from '../assets/destination-2.jpg'
import Img3 from '../assets/destination-3.jpg'
import Img4 from '../assets/destination-4.jpg'

const Blog = () => {
  return (
    <section className="container mx-auto">
         <h2 className='text-center mt-[-260px] sm:mt-[-330px] md:mt-[-330px] lg:mt-[6rem] 
            text-3xl sm:text-3xl lg:text-3xl 2xl:text-4xl mb-8' data-aos="flip-left">Our Blog</h2>
            
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-2">
            
            <div className="blog-post grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full overflow-none border rounded-md">
                <div className="max-w-2xl h-auto relative">
                    <img src={Img1} className="w-full h-full" alt="placeholder img" />
                    <div className="bg-white w-24 pt-1 cursor-pointer h-8 text-black font-semibold text-center absolute top-0">
                    Prague
                    </div>
                </div>
                <div className='content-text p-2'>
                    <div className="flex gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="text-sm text-gray-500">
                            <p>
                            By <span className="text-gray-700 cursor-pointer">Adam Smith</span>
                            </p>
                            <h4>Posted 15 minutes</h4>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                            <a href="single.html">All You Need To Know About Prague's Culture</a>
                        </h4>
                        <p className="text-md my-1 text-gray-500 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae hic architecto inventore dolores earum.
                        </p>
                        <a href="https://prague.org/all-you-need-to-know-about-czech-culture/" target="_blank"
                            className="text-orange-500 font-bold mb-1">Read More →</a>
                    </div>
                        
                </div>
            </div>

            <div className="blog-post grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full overflow-none border rounded-md">
                <div className="max-w-2xl h-auto relative">
                    <img src={Img2} className="w-full h-full" alt="placeholder img" />
                    <div className="bg-white w-24 pt-1 cursor-pointer h-8 text-black font-semibold text-center absolute top-0">
                    Singapore
                    </div>
                </div>
                <div className='content-text p-2'>
                    <div className="flex gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="text-sm text-gray-500">
                            <p>
                            By <span className="text-gray-700 cursor-pointer">Sarthak Kaushik</span>
                            </p>
                            <h4>Posted 3 hours ago</h4>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                        <a href="single.html">The Best Things To Do in Singapore</a>
                        </h4>
                        <p className="text-md my-1 text-gray-500 font-sans">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae hic architecto inventore dolores earum.
                        </p>
                        <a href="https://www.tripadvisor.com/Attractions-g294265-Activities-Singapore.html" target="_blank"
                        className="text-orange-500 font-bold mb-1">Read More →</a>
                    </div>
                </div>
            </div>

            <div className="blog-post grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full overflow-none border rounded-md">
                <div className="max-w-2xl h-auto relative">
                    <img src={Img3} className="w-full h-full" alt="placeholder img" />
                    <div className="bg-white w-24 pt-1 cursor-pointer h-8 text-black font-semibold text-center absolute top-0">
                    Dubai 
                    </div>
                </div>
                <div className='content-text p-2'>
                    <div className="flex gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="text-sm text-gray-500">
                            <p>
                            By <span className="text-gray-700 cursor-pointer">Amy Gagen</span>
                            </p>
                            <h4>Posted 2 weeks ago</h4>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                            <a href="single.html">Top 10 Hotels in Dubai</a>
                            </h4>
                            <p className="text-md my-1 text-gray-500 font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae hic architecto inventore dolores earum.
                            </p>
                            <a href="https://www.luxuryhotelsguides.com/?ufi=-782831&gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYQMCR_K_hk_LwvVHB0gKfehSp8JevwY40qE3a2laHdinV7PVqsbangaAmxgEALw_wcB" 
                            target="_blank" 
                            className="text-orange-500 font-bold mb-1">Read More →</a>
                    </div>
                </div>
            </div>

            <div className="blog-post grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full overflow-none border rounded-md">
                <div className="max-w-2xl h-auto relative">
                    <img src={Img4} className="w-full h-full" alt="placeholder img" />
                    <div className="bg-white w-24 pt-1 cursor-pointer h-8 text-black font-semibold text-center absolute top-0">
                    Maldives
                    </div>
                </div>
                <div className='content-text p-2'>
                    <div className="flex gap-2 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse"></div>
                        <div className="text-sm text-gray-500">
                            <p>
                            By <span className="text-gray-700 cursor-pointer">Juliet James</span>
                            </p>
                            <h4>Posted one month ago</h4>
                        </div>
                    </div>
                    <div className='h-full'>
                        <h4 className="text-3xl font-bold text-gray-700 cursor-pointer hover:text-gray-800">
                        <a href="single.html">Why You Should Visit Maldives</a>
                        </h4>
                        <p className="text-md my-1 text-gray-500 font-sans">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae hic architecto inventore dolores earum.
                        </p>
                        <a href="https://www.maldivessecrets.com/post/10-reasons-to-visit-maldives#:~:text=The%20Maldives%20is%20world%2Dfamous,multitude%20of%20other%20underwater%20species!" 
                        target="_blank"
                        className="text-orange-500 font-bold mb-1">Read More →</a>
                    </div>
                </div>
            </div>
                
        </div>

    </section>
   
  );
};

export default Blog;
