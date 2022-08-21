
import '../../styles/onboarding.css'
import Video1 from '../../assets/videos/vid1.mp4';
import Video2 from '../../assets/videos/vid2.mp4';
import Video3 from '../../assets/videos/vid3.mp4';
import Logosty1 from '../../components/logosty1';
import Logosty2 from '../../components/logosty2';

import { Carousel, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLoginButton from '../../components/GooleLoginButton';

import axios from 'axios';

const Login = () => {
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
        axios.post('http://localhost:8000/api/users/auth/facebook',{token:response.accessToken})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        console.log(response);
    }
    const componentClicked = (data) => {
        console.warn(data)
    }

    return (
        <>
            <section className='onboarding'>
                <div className='container-fluid'>


                    <div className='row '>
                        <div className='col-lg-7 g-0'>
                            <header className='position-relative'>
                                <Carousel fade activeIndex={index} onSelect={handleSelect} indicators={false} controls={false}>
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
                                            <div className="d-flex min-vh-100 align-items-end">
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
                                            <div className="d-flex min-vh-100 align-items-end">
                                                <div className="w-100 text-white px-5 mb-5">
                                                    <h4 className="txt-18-36 fw-normal f-play-fair">Help your patient’s lifelong<br /> intimate health journey.</h4>
                                                </div>
                                            </div>
                                        </div>

                                    </Carousel.Item>

                                </Carousel>

                                <div className='slide-control  gap-2 d-md-block' >

                                    <Button variant="btn btn-lg rounded-circle btn-outline-light me-3" onClick={onPrevClick}> <i class="fa fa-chevron-left"></i> </Button>
                                    <Button variant="btn btn-lg rounded-circle btn-outline-light" onClick={onNextClick}> <i class="fa fa-chevron-right"></i></Button>

                                </div>
                            </header>
                        </div>

                        <div className='col-lg-5 py-5 py-lg-0 d-flex flex-column align-items-center justify-content-center'>
                            <div className='mb-5'><Logosty2 /></div>
                            <form className='form-sign-up '>
                                <div><input className="imputTxt" placeholder="EMAIL ADDRESS " /></div>
                                <div><input className="imputTxt" placeholder="PASSWORD" /></div>
                                <div className='text-end'><NavLink to='/forgotpassword' >Forgot Password?</NavLink></div>
                                <Link to='/practitioner'>
                                    <Button variant='' className="btn-orange shadow-orange fw-bold btn rounded-pill p-3 mt-5 w-100" >Login</Button>
                                </Link>
                                <div className='pt-3 mb-5 text-center'>Have an Account? <NavLink end to="/signup">Sign</NavLink></div>
                            </form>
                            <div className='hr-center '><span >or create with</span></div>
                            <div className='d-flex  my-5' >
                                <GoogleLoginButton/>
                                <FacebookLogin
                                    appId="441998523977767"
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

export default Login;