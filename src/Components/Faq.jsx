import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Faq = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='container mx-auto'>
        <div className="faq grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 h-screen mt-[6%] p-8">
            <div>
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8" data-aos="slide-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h2 className="text-2xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        React Interview Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600 bg-blue-200">
                            <summary className="px-4 py-6">
                                What is React? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                React is a front-end JavaScript library
                                developed by <br />Facebook in 2011. 
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600 bg-blue-200">
                            <summary className="px-4 py-6">
                            What is Props and how to use it give some example?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Props is the shorthand for Properties in React.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600 bg-blue-200">
                            <summary className="px-4 py-6">
                            How to install tailwind css in react js ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            What are synthetic events in React?
                            </p>
                        </details>
                    </div>
                </div>
            </div>

            <div>
                <div className="md:p-8" data-aos="slide-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h2 className="text-2xl font-bold">
                        Do you have any specific question for us?
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        Please fill the form below and our customer representative would get in-touch 
                        with you 😊
                    </p>
                    <div>
                        <input type="text" placeholder='Enter your email address' 
                            className='bg-blue-200 text-black p-3 mb-8 ring-purple-600 w-full rounded-[20px] ring-1 outline-none'/>
                    </div>
                    <div>
                        <textarea name="msg" placeholder='Enter your question here' cols="30" rows="10" 
                        className='bg-blue-200 h-[110px] text-black p-3 ring-purple-600 w-full outline-none rounded-[20px] ring-1'></textarea>
                    </div>
                    <button className='w-full bg-orange-500 text-white text-[14px] p-2 mt-6 rounded-[20px] hover:bg-transparent hover:ring-1 hover:text-orange-600 hover:ring-orange-600'>
                        Submit Enquiry
                    </button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Faq