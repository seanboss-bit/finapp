import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import IosShareIcon from "@mui/icons-material/IosShare";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LatestNewsInfo = () => {
  const [share, setShare] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="/images/loading-icon.png" alt="#" />
        </div>
      ) : (
        <div className="mb-s2 blog">
          <div className="page navbar">
            <div className="container">
              <Link to="/" className="back-to">
                <ArrowBackIosIcon />
              </Link>
              <div className="other-page-title">blog post</div>
              <div className="other-needed-things">
                <ShareIcon onClick={() => setShare(true)} />
              </div>
            </div>
          </div>
          <div className="page-list container">
            <div className="blog-heading">
              <h1>rules you need to know in business</h1>
            </div>
            <div className="blog-author">
              <div className="blog-auth-left">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt="#"
                />
                <p>
                  by <span>jack doe</span>
                </p>
              </div>
              <div className="blog-auth-right">
                <p>24, september 2021</p>
              </div>
            </div>
            <div className="blog-body">
              <div className="first-line">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  omnis in voluptatum laboriosam dolorum totam laborum
                  consequatur.
                </p>
              </div>
              <div className="second-line">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  autem possimus, animi dolorum molestias ut nam suscipit
                  facilis ullam modi fugiat repudiandae quam nulla blanditiis
                  accusamus ea? Molestiae alias suscipit quisquam facere,
                  excepturi porro quasi magni? Quos consequuntur dolore
                  inventore impedit.
                </p>
              </div>
              <img
                src="https://addicted2success.com/wp-content/uploads/2012/03/10-Steps-To-Becoming-An-Amazing-Motivational-Speaker.png"
                alt="#"
              />
              <p className="under-pic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                amet vitae dolore. Architecto inventore soluta, illo similique
                explicabo quia nemo odio dicta provident eos!
              </p>
              <div className="sub-title">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <p className="under-pic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, voluptates tempore! Debitis expedita consequatur eum
                deserunt esse error, at quis cupiditate dolor!
              </p>
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F39426944%2F0x0.jpg%3Ffit%3Dscale"
                alt="#"
              />
              <div className="sub-title">
                <p>Lorem, ipsum dolor.</p>
              </div>
              <p className="under-pic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                omnis magni praesentium amet nostrum, sit architecto ipsum sint?
              </p>
              <p className="under-pic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                eius quasi voluptatem nihil est qui cupiditate, dolores,
                reiciendis tempore, magnam tempora alias eum? Similique,
                voluptatum necessitatibus a earum quo optio.
              </p>
              <button className="btn-purple" onClick={() => setShare(true)}>
                <IosShareIcon /> share this post
              </button>
              <div className="sub-title">
                <p>related posts</p>
              </div>
              <div className="homeincexp">
                <Link to="/latest-news/detail" className="latest-box">
                  <img
                    src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F908633080%2F960x0.jpg%3Ffit%3Dscale"
                    alt="#"
                  />
                  <div className="latest-bottom">
                    <div className="container">
                      <p>what will be the value of bitcoin in the next ...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/latest-news/detail" className="latest-box">
                  <img
                    src="https://addicted2success.com/wp-content/uploads/2012/03/10-Steps-To-Becoming-An-Amazing-Motivational-Speaker.png"
                    alt="#"
                  />
                  <div className="latest-bottom">
                    <div className="container">
                      <p>rules you need to know in business</p>
                    </div>
                  </div>
                </Link>
                <Link to="/latest-news/detail" className="latest-box">
                  <img
                    src="https://m.economictimes.com/thumb/msid-83799965,width-1000,height-659,resizemode-4,imgsize-552110/cryptocurrency.jpg"
                    alt="#"
                  />
                  <div className="latest-bottom">
                    <div className="container">
                      <p>does it make sense to invest in crypto</p>
                    </div>
                  </div>
                </Link>
                <Link to="/latest-news/detail" className="latest-box">
                  <img
                    src="https://media.istockphoto.com/photos/close-up-business-people-meeting-to-discuss-the-situation-on-the-picture-id1089222846?k=20&m=1089222846&s=612x612&w=0&h=pxRm90xIK-0ozE0GpjPThDBbx0KXgdW3BnCsZDRLFh4="
                    alt="#"
                  />
                  <div className="latest-bottom">
                    <div className="container">
                      <p>follow the financial agenda with</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {share ? (
        <div className="index-modal blog" onDoubleClick={() => setShare(false)}>
          <div className="container">
            <div className="share-body">
              <div className="index-body-title">
                <p>share with</p>
              </div>
              <div className="social-media">
                <i className="fab fa-facebook"></i>
                <span>facebook</span>
              </div>
              <div className="social-media">
                <TwitterIcon />
                <span>twitter</span>
              </div>
              <div className="social-media">
                <InstagramIcon />
                <span>instagram</span>
              </div>
              <div className="social-media">
                <LinkedInIcon />
                <span>linkedin</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LatestNewsInfo;
