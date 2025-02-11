import React from 'react'

export const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/kim-sungmin/" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/sungminkim627" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
        </a>

        <a href="sungminkim627@gmail.com" className="home__social-link" target="_blank" rel="noreferrer">
        <i class="fa-solid fa-envelope"></i>
        </a>
    </div>
  )
}

export default HeaderSocials