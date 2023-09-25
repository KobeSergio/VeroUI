"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PostCard from "../../components/PostCard";
import ReactPaginate from "react-paginate";
import { SubmitPostModal } from "../../components/SubmitPostModal";
import Firebase from "../../lib/firebase";
import { Spinner } from "../../components/Spinner";

const firebase = new Firebase();

export default function DiscussionForum() {
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (posts.length == 0) {
      firebase
        .getPosts()
        .then((posts) => {
          setPosts(posts);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (posts.length > 0) {
      const itemsPerPage = 3; // Change this value as needed
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Sort posts by timestamp in descending order
      const sortedPosts = [...posts].sort((a, b) =>
        b.timestamp.localeCompare(a.timestamp)
      );

      setPaginatedPosts(sortedPosts.slice(startIndex, endIndex));
      setPageCount(Math.ceil(posts.length / itemsPerPage));
      setIsLoading(false);
    }
  }, [currentPage, posts]);

  // Handle page change
  const handlePageChange = (selectedPage) => {
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
    <Parallax pages={1.5}>
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
          setPosts={setPosts}
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

          {isLoading ? (
            <div className="h-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className="w-full flex flex-wrap justify-start gap-2 xl:gap-6">
              {paginatedPosts?.map((post, index) => (
                <PostCard
                  key={index}
                  index={index}
                  setPosts={setPosts}
                  post_id={post.post_id}
                  subject={post.subject}
                  timestamp={post.timestamp}
                  message={post.message}
                  comments={post.comments}
                />
              ))}
            </div>
          )}
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
