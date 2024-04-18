import React from "react";
import ListingCard from "../Components/ListingCard";
import { HiUserGroup } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
const cardData = [
  {
    id: 1,
    title: "people",
    article:
      "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",

    icon: <HiUserGroup />,
  },
  {
    id: 2,
    title: "place",
    article:
      "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",

    icon: <FaLocationDot />,
  },
  {
    id: 3,
    title: "product",
    article:
      "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",

    icon: <FaCartShopping />,
  },
  {
    id: 4,
    title: "program",
    article:
      "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",

    icon: <FaCalendarCheck />,
  },
];

const Page = () => {
  return (
    <div>
      <section>
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-md-12 text-center ">
              <p>
                 <span className=""><FaPlusCircle /> </span>  Add your listing
              </p>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                {cardData.map((item) => (
                  <div key={item.id} className="col">
                    <ListingCard
                      title={item.title}
                      article={item.article}
                      icon={item.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
