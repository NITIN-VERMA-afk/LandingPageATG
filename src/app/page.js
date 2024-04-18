"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/signUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlusCircle } from "react-icons/fa";
import ListingCard from "./Components/ListingCard";

import { HiUserGroup } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "people",
    article:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    btnText: "connect",
    icon: <HiUserGroup />,
  },
  {
    id: 2,
    title: "place",
    article:
      "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    btnText: "Meet up",
    icon: <FaLocationDot />,
  },
  {
    id: 3,
    title: "product",
    article:
      "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    btnText: "Get it",
    icon: <FaCartShopping />,
  },
  {
    id: 4,
    title: "program",
    article:
      "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
    btnText: "Attend",
    icon: <FaCalendarCheck />,
  },
];

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <main className="container">
      <div
        style={{ backgroundColor: "#F7F5F9", marginTop: "30px" }}
        className="row"
      >
        <section className="col-md-6">
          <div>
            <h1 style={{ fontStyle: "italic", font: "bold" }}>
              Explore your <span className="text-primary">hobby</span> or
              <span className="text-purple"> passion</span>
            </h1>
          </div>
          <article style={{ marginTop: "10%" }}>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </article>
          <article style={{ marginTop: "5%" }}>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </article>
          <figure>
            <Image
              src="/images/grounp.png"
              alt="logo"
              height={250}
              width={697}
              layout="responsive"
            />
          </figure>
        </section>
        <section className="col-md-6">
          <div className="d-flex flex-column gap-2">
            <div
              className="d-flex justify-content-start gap-2"
              style={{ marginLeft: "90px" }}
            >
              <p
                onClick={() => setIsSignIn(true)}
                style={{
                  cursor: "pointer",
                  fontWeight: isSignIn ? "bold" : "normal",
                  color: isSignIn ? "purple" : "gray",
                  borderBottom: isSignIn ? "2px solid purple" : "none",
                  padding: "0.5rem",
                }}
              >
                Sign In
              </p>
              <p
                onClick={() => setIsSignIn(false)}
                style={{
                  cursor: "pointer",
                  fontWeight: !isSignIn ? "bold" : "normal",
                  color: !isSignIn ? "purple" : "gray",
                  borderBottom: !isSignIn ? "2px solid purple" : "none",
                  padding: "0.5rem",
                }}
              >
                Sign Up
              </p>
            </div>

            <aside>{isSignIn ? <SignIn /> : <SignUp />}</aside>
          </div>
        </section>
      </div>
      {/* listing section start from here */}
      <section style={{ marginTop: "100px" }}>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-md-12 ">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                {cardData.map((item) => (
                  <div key={item.id} className="col">
                    <ListingCard
                      title={item.title}
                      article={item.article}
                      btnText={item.btnText}
                      icon={item.icon}
                      isHomePage={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* add new list section start here */}
      <section>
        <div style={{ marginTop: "10%" }} className="container">
          <div className="row">
            <div style={{ padding: "3%" }} className="border border-primary">
              <p>
                {" "}
                <FaPlus /> add your own
              </p>
              <p>
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page{" "}
              </p>
              <button className="btn border-primary">
                {" "}
                <Link href="/listing"> Add new </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* testmonials section start here */}
      <section>
        <div
          style={{ backgroundColor: "#F7F5F9", marginTop: "10%" }}
          className="container mt-12"
        >
          <div className="row">
            <div className="col-12" style={{ padding: "3%" }}>
              <h3>
                {" "}
                <span>"</span> testmonials
              </h3>
              <p>
                In a fast growing and ever changing city like Bangalore, it
                sometimes becomes very difficult to find or connect with like
                minded people. Websites like hobbycue.com is a great service
                which helps me get in touch with, communicate, connect, and
                exchange ideas with other dancers. It also provides the extra
                benefit of finding products and services that I can avail, which
                I can be assured is going to be of great quality as it comes
                recommended by people of the hobbycue community. To have
                discussions, to get visibility, and to be able to safely explore
                various hobbies and activities in my city, all under one roof,
                is an excellent idea and I highly recommend it.
              </p>
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
                <div className="d-flex justify-content-center">
                  <Image
                    src="/images/Audio Track.png"
                    width={800}
                    height={100}
                    alt="subha nagarajan"
                    layout="responsive"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="d-flex flex-column flex-sm-row align-items-center"
                  style={{ marginRight: "5%" }}
                >
                  <Image
                    src="/images/subhaNaga.png"
                    width={85}
                    height={85}
                    alt="subha nagarajan"
                    layout="responsive"
                    className="mb-2 mb-sm-0 mr-sm-3"
                  />
                  <div>
                    <p className="mb-0">SubhaNagarajan</p>
                    <p className="mb-0">ClassicalDancer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* get starting section start here */}

      <section style={{ marginTop: "10px" }}>
        <div>
          <Image
            src="/images/End.png"
            width={1440}
            height={662}
            alt="subha nagarajan"
            layout="responsive"
          />
        </div>
      </section>
    </main>
  );
}
