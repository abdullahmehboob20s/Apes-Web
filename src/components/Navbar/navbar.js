import React, { useEffect, useState } from "react";
import { getDefaultProvider } from "@ethersproject/providers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import "./Navbar.css";
import brandLogo from "assets/images/brand-logo.svg";
import Twitter from "assets/images/Desktop/Twitter.svg";
import Button from "components/Button/Button";
import hamburger from "assets/images/Mobiule/hamburger.svg";
import { GrFormClose } from "react-icons/gr";
import crossIcon from "assets/images/Mobiule/cross.png";

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return;
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);

        // Resolve the ENS name for the first account.
        const name = await provider.lookupAddress(accounts[0]);

        // Render either the ENS name or the shortened account address.
        if (name) {
          setRendered(name);
        } else {
          setRendered(account.substring(0, 6) + "..." + account.substring(36));
        }
      } catch (err) {
        setAccount("");
        setRendered("");
        console.error(err);
      }
    }
    fetchAccount();
  }, [account, provider, setAccount, setRendered]);

  return (
    <button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  );
}

// function Navbar() {
//   const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/" className="navitem">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/mint" className="navitem">
//             Mint
//           </Link>
//         </li>
//         <li>
//           <Link to="/myApes" className="navitem">
//             My Apes
//           </Link>
//         </li>
//         <li>Twitter</li>
//         <li>
//           <WalletButton
//             provider={provider}
//             loadWeb3Modal={loadWeb3Modal}
//             logoutOfWeb3Modal={logoutOfWeb3Modal}
//           />
//         </li>
//       </ul>
//     </div>
//   );
// }

const Navbar = (props) => {
  const [open, setopen] = useState(false);
  return (
    <nav>
      <div className="container-wrapper">
        <div className="navbar">
          <Link to="/">
            <img src={brandLogo} alt="" />
          </Link>
          <div className={`navbar-links ${open ? "open" : ""} `}>
            <div className="cross-icon" onClick={() => setopen(false)}>
              <img src={crossIcon} alt="" />
            </div>
            <Link className="fs-18px gray" to="/">
              Home
            </Link>
            <Link className="fs-18px gray" to="/why-us">
              Why Us
            </Link>
            <Link className="fs-18px gray" to="/our-process">
              Our Process
            </Link>
            <Link className="fs-18px gray" to="/faq">
              FAQ
            </Link>
            <Link className="fs-18px gray" to="/contatc-us">
              Contact Us
            </Link>
          </div>
          <div className="nav-btns">
            <img src={Twitter} alt="" />

            <div className="hamburger" onClick={() => setopen(!open)}>
              <img src={hamburger} alt="" />
            </div>
            <div className="login-btn">
              <Button title="Log in" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
