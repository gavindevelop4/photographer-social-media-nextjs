'use client';

import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface LikeButtonProps {
  isLiked: boolean
  onChange: (a: boolean) => void;
  className: string
}

export default function LikeButton({ isLiked, onChange, className }: LikeButtonProps) {
  const [like, setLike] = useState<boolean>(isLiked);
  
  const handleClick = () => {
    setLike(!like);
    onChange(like);
  }

  return (
    <div onClick={ handleClick } className={className}>
      {
        like ? 
          <AiFillHeart
            size={30}
            color='red'
          /> :
          <AiOutlineHeart
            size={30}
          />
      }
    </div>
  )
}