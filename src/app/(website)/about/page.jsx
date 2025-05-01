import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import ReviewSlide from './ReviewSection/ReviewSlide';


export default function About() {
  return (
    <section>
      <h3 className="text-center text-[35px] font-bold text-[#333] mt-3 pt-3">About Us</h3>
      <div className="border-b border-[#ccc] max-w-[1320px] m-auto pb-6">
        <div className="justify-center flex items-center mb-6">
          <a href="/" className="hover:text-[#C09578] cursor-pointer text-[12px] text-[#555]">
            Home
          </a>
          <span className="flex items-center text-[12px] text-[#555]">
            <IoIosArrowForward className="mx-1 text-[#C09578]" />
            About Us
          </span>
        </div>
      </div>
      <div className='max-w-[1320px] m-auto'>
        <img
          src="/images/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg"
          alt=""
          className='py-7'
        />
      </div>
      <div className="max-w-[1320px] mx-auto px-4 py-16 text-center">
        {/* Welcome Text */}
        <h2 className="text-2xl font-bold mb-4">Welcome To Monsta!</h2>
        <p className="text-gray-600 mb-4">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
        </p>
        <p className="italic text-sm text-[#C09578] mb-12 ">
          “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”
        </p>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold mb-8">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <div className="flex justify-center">
              <img
                src="/images/c65c4789-c1eb-4cfc-9961-3ab025317e08-1670161041.jpg"
                alt=""
              />
            </div>
            <h4 className="font-bold mb-2">Creative Design</h4>
            <p className="text-gray-600 text-sm">
              Erat metus sodales eget dolor consectetur, porta ut purus at et alias, nulla ornare velit amet enim
            </p>
          </div>
          <div>
          <div className="flex justify-center">
              <img
                src="/images/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg"
                alt=""
              />
            </div>
            <h4 className="font-bold mb-2">100% Money Back Guarantee</h4>
            <p className="text-gray-600 text-sm">
              Erat metus sodales eget dolor consectetur, porta ut purus at et alias, nulla ornare velit amet enim
            </p>
          </div>
          <div>
          <div className="flex justify-center">
              <img
                src="/images/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg"
                alt=""
              />
            </div>
            <h4 className="font-bold mb-2">Online Support 24/7</h4>
            <p className="text-gray-600 text-sm">
              Erat metus sodales eget dolor consectetur, porta ut purus at et alias, nulla ornare velit amet enim
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-3 gap-8 lg:grid-cols-3">
          <div>
            <img src="/images/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" alt="What Do We Do?" className="w-full h-64 object-cover  mb-4" />
            <h5 className="font-semibold mb-2">What Do We Do?</h5>
            <p className="text-gray-600 text-sm">
            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
            </p>
          </div>
          <div>
            <img src="/images/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" alt="Our Mission" className="w-full h-64 object-cover  mb-4" />
            <h5 className="font-semibold mb-2">Our Mission</h5>
            <p className="text-gray-600 text-sm">
            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
            </p>
          </div>
          <div>
            <img src="/images/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" alt="History Of Us" className="w-full h-64 object-cover  mb-4" />
            <h5 className="font-semibold mb-2">History Of Us</h5>
            <p className="text-gray-600 text-sm">
            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
            </p>
          </div>
        </div>
        <ReviewSlide/>
      </div>
    </section>
  )
}
