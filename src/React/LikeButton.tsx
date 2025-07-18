import React, { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [animateLikes, setAnimateLikes] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }

    // Listen for realtime updates from Firestore
    const likeDocRef = doc(db, "likes", "counter");
    const unsubscribe = onSnapshot(likeDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const currentLikes = docSnap.data().likes;
        setLikes(Math.max(0, currentLikes));
        setAnimateLikes(true);
        setTimeout(() => setAnimateLikes(false), 300);
      } else {
        console.log("Document does not exist.");
      }
    });

    return () => unsubscribe();
  }, []);

  const triggerLikeAnimation = () => {
    setTriggerAnimation(true);
    setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);
  };

  const handleLike = async () => {
    if (isProcessing) return;

    if (isLiked) {
      triggerLikeAnimation();
      return;
    }

    try {
      setIsProcessing(true);
      const likeDocRef = doc(db, "likes", "counter");
      await updateDoc(likeDocRef, {
        likes: increment(1),
      });
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
      triggerLikeAnimation();
    } catch (error) {
      console.error("Error updating likes:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isClient) return null;

  const borderColorClass = isLiked
    ? "border-[var(--sec)]"
    : "border-[var(--white-icon)]";

  const svgClasses = `
    w-6 h-6 transition-all duration-300 ease-in-out 
    ${isLiked ? "text-[var(--sec)] scale-110" : "text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
    ${triggerAnimation ? " animate-scale" : ""}
  `;

  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        disabled={isProcessing}
        className={`hover:scale-105
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-all duration-300 ease-in-out transform border-2 ${borderColorClass}
          ${!isLiked ? "md:hover:border-[var(--white)]" : ""}
          ${triggerAnimation ? " animate-scale" : ""}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={svgClasses}
        >
          <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
        </svg>
        <span
          className={`
          text-sm pl-3 transition-all duration-300 ease-in-out ${animateLikes ? "animate-scale" : ""}
          text-[var(--white)]
        `}
        >
          {likes} Likes
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
