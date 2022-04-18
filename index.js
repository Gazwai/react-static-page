
import React from "react"
import ReactDOM from "react-dom"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul ckassName="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

function Footer() {
  return (
    <footer className="footer">
      <p>© 2022 Gary development. All rights reserved."</p>
    </footer>
  );
}

function content() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool
          kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  )

}

function Page() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"))
