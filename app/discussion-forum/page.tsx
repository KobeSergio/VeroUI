"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PostCard from "../../components/PostCard";
import ReactPaginate from "react-paginate";
import { SubmitPostModal } from "../../components/SubmitPostModal";
export default function DiscussionForum() {
  const parallax = useRef();
  const router = useRouter();
  const posts = [
    {
      post_id: 1,
      subject: "Lorem Ipsum Subject",
      timestamp: "09/23/2023, 2:23 AM",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamer.",
      comments: [
        {
          comment_id: 1,
          comment_message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cosequat.",
          comment_timestamp: "09/23/2023, 2:23 AM",
        },
        {
          comment_id: 2,
          comment_message: "last comment",
          comment_timestamp: "09/23/2023, 2:23 AM",
        },
        {
          comment_id: 1,
          comment_message: "first comment",
          comment_timestamp: "09/23/2023, 2:23 AM",
        },
      ],
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
    {
      post_id: 1,
      subject: "Sample",
      timestamp: "09/23/2023, 2:23 AM",
      message: "Lorem ipsum",
    },
  ];
  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Change this value as needed

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the posts array to display only the current page's items
  const paginatedPosts = posts.slice(startIndex, endIndex);

  // Total number of pages
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  const [showPostModal, setShowPostModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitPost = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPostModal(false);
    }, 2000);
  };

  return (
    <Parallax ref={parallax} pages={1.5}>
      <ParallaxLayer offset={0} speed={0} factor={1.5}>
        <div className="w-full h-full bg-gradient-to-b from-white via-yellow-50 to-yellow-50"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[45%]" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] -rotate-45" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[5%]" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[86%] -rotate-45" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[30%] rotate-180" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[40%] " />
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[57%] -rotate-90" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[100%]" />
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[10%] rotate-45" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[5%] " />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[90%] " />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 ml-[30%] rotate-6" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.6}>
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[85%] rotate-90" />
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[80%] rotate-180" />
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={-0.6}>
        <div className="w-[5%] h-[10%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[14%] -rotate-90" />
        <div className="w-[10%] h-[20%] bg-[url('/assets/male-symbol.png')] bg-contain bg-no-repeat opacity-5 block ml-[78%]" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} factor={1 / 2}>
        <div className="flex flex-row gap-4 px-24 py-16">
          <BsArrowLeft
            size={24}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-montserrat font-bold text-4xl">
              Discussion Forum
            </h1>
            <h6 className="font-montserrat font-medium text-lg text-black text-center">
              Engage with our community &ndash; whether you&apos;re posting a
              new topic or diving into existing conversations, your voice
              matters here.
            </h6>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={-0.25}>
        <SubmitPostModal
          isOpen={showPostModal}
          setter={() => setShowPostModal(false)}
          onSubmit={handleSubmitPost}
          isLoading={isLoading}
        />
        <div className="flex flex-col gap-4 px-24 py-6">
          <div className="flex flex-row justify-between items-center">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
            <button
              type="button"
              className="w-fit flex bg-[#7163DE] text-white py-4 px-8 justify-center rounded-full font-montserrat text-base font-semibold cursor-pointer mb-4"
              onClick={() => setShowPostModal(true)}
            >
              Submit a Post
            </button>
          </div>
          <div className="w-full flex flex-wrap justify-start gap-6">
            {paginatedPosts.map((post: any, index) => (
              <PostCard
                key={index}
                post_id={post.post_id}
                subject={post.subject}
                timestamp={post.timestamp}
                message={post.message}
                comments={post.comments}
              />
            ))}
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
