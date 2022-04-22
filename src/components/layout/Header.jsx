import React, { useContext } from "react";
import UserCtx from "../../context/user-context";
import UserAvatar from "../user/UserAvatar";
import "./Header.css";

const Header = () => {
  const userCtx = useContext(UserCtx);
  return (
    <div className='header'>
      <div className='header-title'>
        <h2>Frontend Mentor Challenge</h2>
        <a
          href='https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9'
          className='header-subtitle'
          target='_blank'
          rel='noopener noreferrer'
        >
          - Interactive Comments
        </a>
      </div>
      <div className='users'>
        <span className='user-select-label'>Simulate active user &rarr;</span>
        {userCtx.users.map((user) => (
          <UserAvatar user={user} key={user.username} />
        ))}
      </div>
    </div>
  );
};

export default Header;
