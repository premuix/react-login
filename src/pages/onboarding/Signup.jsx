
import '../../styles/onboarding.css'
import Video1 from '../../assets/videos/vid1.mp4';
import Video2 from '../../assets/videos/vid2.mp4';
import Video3 from '../../assets/videos/vid3.mp4';
import Logosty1 from '../../components/logosty1';
import Logosty2 from '../../components/logosty2';
import { Carousel, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';




const Signup = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    const onPrevClick = () => {
      if (index > 0) {
        setIndex(index - 1);
      } else if (index === 0) setIndex(2);
    };
    const onNextClick = () => {
      if (index === 2) {
        setIndex(0);
      } else if (index === 0 || index > 0) setIndex(index + 1);
    };
  

    const responseFacebook = (response) => {
        console.log(response);
    }
    const componentClicked = (data) => {
        console.warn(data)
    }
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        
        <>

            <section className='onboarding'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-lg-7 g-0'>
                            <header className='position-relative'>
                                <Carousel fade activeIndex={index} onSelect={handleSelect} indicators={false}   controls={false}>
                                    <Carousel.Item  >
                                        <video className='position-absolute top-50 start-50' playsInline="ine" autoPlay="autoplay" muted="muted" loop="loop">
                                            <source src={Video1} type="video/mp4" />
                                        </video>
                                        <div className="container position-relative">
                                            <div className='logosty1 px-5 position-absolute'><Logosty1 /></div>
                                            <div className="d-flex min-vh-100 align-items-end">
                                                <div className="w-100 text-white px-5 mb-5">
                                                    <h4 className="txt-18-36 fw-normal f-play-fair">Welcome to <br /> the Vydl Platform</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item >
                                        <video className='position-absolute top-50 start-50' playsInline="ine" autoPlay="autoplay" muted="muted" loop="loop">
                                            <source src={Video2} type="video/mp4" />
                                        </video>
                                        <div className="container position-relative">
                                            <div className='logosty1 px-5 position-absolute'><Logosty1 /></div>
                                            <div className="d-flex min-vh-100  align-items-end">
                                                <div className="w-100 text-white px-5 mb-5">
                                                    <h4 className="txt-18-36 fw-normal f-play-fair">Delight your patients <br /> with easy to access virtual care</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </Carousel.Item>

                                    <Carousel.Item >
                                        <video className='position-absolute top-50 start-50' playsInline="ine" autoPlay="autoplay" muted="muted" loop="loop">
                                            <source src={Video3} type="video/mp4" />
                                        </video>
                                        <div className="container position-relative">
                                            <div className='logosty1 px-5 position-absolute'><Logosty1 /></div>
                                            <div className="d-flex min-vh-100  align-items-end">
                                                <div className="w-100 text-white px-5 mb-5">
                                                    <h4 className="txt-18-36 fw-normal f-play-fair">Help your patient’s lifelong<br /> intimate health journey.</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </Carousel.Item>
                                    
                                </Carousel>
                            
                                <div className='slide-control gap-2 d-md-block' >

                            <Button variant="btn btn-lg rounded-circle btn-outline-light me-3" onClick={onPrevClick}> <i class="fa fa-chevron-left"></i> </Button>
                            <Button variant="btn btn-lg rounded-circle btn-outline-light" onClick={onNextClick}> <i class="fa fa-chevron-right"></i></Button>
                                    
                                    </div>
                            </header>
                        </div>

                        <div className='col-lg-5 py-5 py-lg-0 d-flex flex-column align-items-center justify-content-center'>
                            <div className='mb-5'><Logosty2 /></div>
                            <form className='form-sign-up '>
                                <div><input className="imputTxt" placeholder="FIRST NAME " /></div>
                                <div><input className="imputTxt" placeholder="LAST NAME " /></div>
                                <div><input className="imputTxt" placeholder="EMAIL ADDRESS " /></div>
                                <div><input className="imputTxt" placeholder="PASSWORD" /></div>
                                
                                <Button variant='' className="shadow-orange fw-bold btn rounded-pill btn-orange p-3 mt-5 w-100">Signup</Button>
                                
                                <div className='pt-3 mb-5 text-center'>Have an Account? <NavLink end to="/login">Login</NavLink></div>
                            </form>
                            <div className='hr-center '><span >or create with</span></div>
                            <div className='d-flex  my-5' >
                            <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Google"
    className="shadow g-btn-icon-sm rounded-pill me-3"
    onSuccess={responseGoogle}
    onFailure={responseGoogle} 
    cookiePolicy={'single_host_origin'}
  />
                                <FacebookLogin
                                    appId="1088597931155576"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    cssClass="shadow btn-icon-sm rounded-pill me-3"
                                    icon="fb-icon-sm"
                                    textButton="Facebook"
                                    onClick={componentClicked}
                                    callback={responseFacebook} />
                            </div>
                            <div>Privacy matters to us. Learn how.</div>
                            <div className='text-center'> By signing up you agree to receive promotional text messages <br /> and to our terms and conditions.</div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    );
};

export default Signup;