"use client";

import { useEffect, useState } from "react";

export default function PostCard({
  post_id,
  subject,
  timestamp,
  message,
  comments,
}: {
  post_id: number;
  subject: string;
  timestamp: string;
  message: string;
  comments: any[];
}) {
  const colors = [
    "#F7D097",
    "#8FAADC",
    "#A9D18E",
    "#D8949A",
    "#FFD966",
    "#AB6B4F",
    "#89E0FF",
    "#EBD1C3",
    "#5A6E8C",
    "#C089C1",
    "#CEA356",
    "#3363AB",
  ];

  const [bgColor, setBgColor] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div
      className="w-[32%] h-full flex flex-col justify-between rounded-lg bg-opacity-5"
      style={{ backgroundColor: randomColor }}
    >
      <div className="flex flex-col p-5 pb-2.5">
        <h5 className="font-montserrat font-semibold text-sm text-black">
          Anonymous User
        </h5>
        <h6 className="font-montserrat font-medium text-xs text-black/60 mb-3">
          {timestamp}
        </h6>
        <h4 className="font-montserrat font-semibold text-base text-black">
          {subject}
        </h4>
        <p className="h-[80px] font-montserrat font-medium text-sm text-black">
          {message}
        </p>
      </div>
      <hr className="h-px border-white/60"></hr>
      <div className="flex flex-col p-5 pt-2.5">
        {comments && comments.length > 0 && (
          <>
            {seeMore ? (
              comments.map((comment: any, index) => (
                <div key={index} className="mb-2">
                  <h5 className="font-montserrat font-semibold text-sm text-black">
                    Anonymous User
                  </h5>
                  <h6 className="font-montserrat font-medium text-xs text-black/60 mb-2">
                    {comment.comment_timestamp}
                  </h6>
                  <p className="font-montserrat font-medium text-sm text-black">
                    {comment.comment_message}
                  </p>
                </div>
              ))
            ) : (
              <div>
                <h5 className="font-montserrat font-semibold text-sm text-black">
                  Anonymous User
                </h5>
                <h6 className="font-montserrat font-medium text-xs text-black/60 mb-2">
                  {comments[comments.length - 1].comment_timestamp}
                </h6>
                <p className="font-montserrat font-medium text-sm text-black">
                  {comments[comments.length - 1].comment_message}
                </p>
              </div>
            )}
            <a
              className="font-montserrat font-semibold text-xs text-black mt-2 flex self-end cursor-pointer hover:underline"
              onClick={toggleSeeMore}
            >
              {seeMore ? "See less" : "View other comments"}
            </a>
          </>
        )}
        <form className="flex flex-row gap-1 mt-4">
          <input
            aria-label="comment"
            type="text"
            className="w-full bg-transparent outline-none border placeholder:text-white px-4 border-white/60 font-montserrat font-medium text-sm text-white rounded-full"
            placeholder="Write a comment"
            maxLength={150}
          />
          <button
            type="button"
            className="w-fit bg-white px-4 py-2 rounded-full font-semibold text-sm font-montserrat"
            style={{ color: bgColor }}
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}
