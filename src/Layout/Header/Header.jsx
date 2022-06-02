import React from "react";
import "./Header.css";
import menu from "../../Assets/Menu.svg";
import windowimg from "../../Assets/Windows.svg";
import web3 from "../../web3";
import flocked from "../../flocked";
function Header({ accounts, setAccounts }) {
  async function connectAccount() {
    if (window.ethereum) {
      //check if Metamask is installed
      console.log("Request Account");
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(account);
    } else {
      console.log("Please install metamask");
    }
  }
  async function mintNFT() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    await flocked.methods.mint(1).send({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether"),
    });
  }

  return (
    <div className="head-cont">
      <div className="header">
        <div className="top-header">
          <img src={menu} alt="" className="menu" />
          <div className="pattern"></div>
          <img src={windowimg} alt="" className="window" />
        </div>
        <div className="bottom-header">
          <div className="left-bottom-header">
            <a href="#mint-section" className="nav-links" onClick={mintNFT}>
              Mint
            </a>
            <a href={"#"} className="nav-links">
              Stake
            </a>
            <label className="nav-links" onClick={connectAccount}>
              Connect Wallet
            </label>
          </div>
          {/* <div>
          <button className="nav-links" onClick={connectAccount}>
              Connect Wallet
            </button>
          </div> */}
          <div className="right-bottom-header">
            <h1>$AVAX: 33.75</h1>
            <h1>$EGG: .439</h1>
            <h1>$FERT: .061</h1>
            <h1>GAS: 31</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
