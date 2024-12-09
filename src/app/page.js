import Image from "next/image";
import React from "react";

const page = () => {
  const LimitedAccess = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4 text-center">Limited Access</h3>
        <p className="text-3xl font-bold mb-8 text-center">₹0</p>
        <p className="mb-6">Sign up and start sampling course materials now.</p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
          Explore Courses
        </button>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            Joining for free and you'll get:
          </h4>
          <ul className="list-disc pl-6 space-y-2 font-medium">
            <li>Limited access to 1400+ short courses</li>
            <li>
              Restricted access to course content - You'll get lessons delivered
              weekly rather than all upfront
            </li>
          </ul>
          <h4 className="text-lg font-semibold mb-4 mt-6">
            With limited access you will not:
          </h4>
          <ul className="list-disc pl-6 space-y-2 font-medium">
            <li>Receive certificates</li>
            <li>
              Be able to access the course material after you have completed the
              course
            </li>
            <li>Be able to access test steps within the course</li>
            <li>
              Have access to the FutureLearn app so you can learn on the go
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const UnlimitedMonthly = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Unlimited Monthly</h3>
        <p className="text-3xl font-bold mb-8">₹1119.99</p>
        <p className="mb-6">
          Earn CV-ready certificates and build next-level career skills.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
          Subscribe to Unlimited
        </button>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            Subscribe to Unlimited Monthly and you'll get:
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Full access to 1400+ short courses to learn whenever and wherever
            </li>
            <li>
              Instant access to all course content that you can keep forever*
            </li>
            <li>Digital certificates for all eligible courses</li>
            <li>Access to the FutureLearn app so you can learn on the go</li>
          </ul>
        </div>
      </div>
    );
  };

  const UnlimitedAnnual = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Unlimited Annual</h3>
        <p className="text-3xl font-bold mb-8">₹541.67/month</p>
        <p className="mb-6">
          Supercharge your learning and save on your long-term learning goals.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
          Subscribe to Unlimited
        </button>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            Subscribe to Unlimited Annual and you'll get:
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Full access to 1400+ short courses to learn whenever and wherever
            </li>
            <li>
              Instant access to all course content that you can keep forever*
            </li>
            <li>Digital certificates for all eligible courses</li>
            <li>Access to the FutureLearn app so you can learn on the go</li>
            <li>Extra savings when you pay for the full year</li>
            <li>
              Full flexibility throughout the year to learn at your own pace
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="flex-col flex justify-center w-[100%] bg-gradient-to-r from-slate-50 to-slate-300 py-20">
        <section className="flex-row flex justify-center w-[100%] bg-gradient-to-r from-slate-50 to-slate-300 py-20">
          <div className="lg:w-[80%] flex-row flex justify-between items-center">
            <div className="w-[50%] flex justify-start items-start flex-col gap-4">
              <h2 className="text-5xl font-semibold">
                Get 20% off a month of Unlimited
              </h2>
              <hr className="border-[5px] border-[#f0bd6c] w-[20%]"></hr>
              <div className="flex flex-col gap-5 text-xl">
                <p className="text-2xl font-semibold">
                  Careers aren’t one-size-fits-all, so why should learning be?
                  Unlock unlimited access to 1400+ courses from top universities
                  for an entire month.
                </p>
                <span>
                  Only{" "}
                  <span
                    className="font-bold text-decoration-line: line-through
              "
                  >
                    ₹1399.99
                  </span>
                  <span className="font-bold text-[#f0bd6c]"> ₹1119.99</span>
                </span>
                <p>
                  for the first month. New subscribers only. Automatically
                  renews.
                  <br></br>
                  Cancel anytime.
                  <span className="font-bold text-[#f0bd6c]"> View T&Cs </span>
                  here
                </p>
                <button className="bg-[#57574d] w-[50%] rounded-md text-[white] p-2">
                  Subscribe to Unlimited
                </button>
              </div>
            </div>
            <div className="">
              <Image src={"/img1.webp"} height={400} width={400} alt="img1" />
            </div>
          </div>
        </section>
        <section className="flex justify-center py-20 font-semibold">
          <div>
            <h2 className="text-4xl text-center">Experience the benefits of Unlimited</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-10 w-[100%] justify-center">
            <LimitedAccess />
            <UnlimitedMonthly />
            <UnlimitedAnnual />
          </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default page;
