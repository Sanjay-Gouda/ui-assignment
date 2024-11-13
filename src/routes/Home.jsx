import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeRoute() {

  return <>
    <Header />
    <div className="page-content">
      <div className="image-content-wrapper">
        <div className="content">
          <span>Shop the new <br /> Signature collection </span>
          <p>Lorem ipsum dolor sit amet. Et veritatis asperiores qui minus facilis est placeat accusantium non itaque enim? Id assumenda omnis non rerum quas est aliquid fuga et rerum quibusdam.</p>
          <a href="/shop"><button id="shopNowBtn">Shop Now</button></a>
        </div>
        <div className="image">
          <img src="/carousalImgCropped.png" alt="Image Description" />
        </div>
      </div>
      <div className="image-content-wrapper-small">
        <div className="image">
          <img src="/carousalImg.png" alt="Image Description" />
        </div>
        <div className="content">
          <span>Shop the new <br /> Signature collection </span>
          <p>Lorem ipsum dolor sit amet. Et veritatis asperiores qui minus facilis est placeat</p>
          <a href="/shop">
            <button>Shop Now</button>
          </a>
        </div>

      </div>
      <div className="product-outer">
        <div id="product-section" className="product-section">
          <div className="productHome">
            <img src="/shopWomen.png" />
            <div className="product-info">
              <h3>Shop Women</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="productHome">
            <img src="/shopMen.png" />
            <div className="product-info">
              <h3>Shop Men</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="productHome">
            <img src="/shopJewellery.png" />
            <div className="product-info">
              <h3>Jewellery</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="productHome">
            <img src="/shopElectronics.png" />
            <div className="product-info">
              <h3>Electronics</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-content-wrapper2">
        <div className="content2">
          <span>Take off in the new<br />Signature Legging </span>
          <h4>Lorem ipsum dolor Tempor</h4>
          <p>Lorem ipsum dolor sit amet. Et veritatis asperiores qui minus facilis est placeat </p>
          <div className="btn-container">
            <button>Shop Collection</button>
            <a href="/shop">
              <button>Shop Now</button>
            </a>
          </div>
        </div>
        <div className="image-boy">
          <img src="/boyPosterPic.png" alt="Image Description" />
        </div>
      </div>
      <div className="adventure">
        <img src="/adventurePic.png" />
        <div className="rightContent">
          <div>
            <span>Conquer your <br /> next adventure</span>
            <p>Lorem ipsum dolor Tempur</p>
            <button>Shop devices</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
}
