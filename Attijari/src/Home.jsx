import React, { useRef } from 'react'
import videobg from'./Assets/Image/video.mp4'
import './home.css'
import Logo from './Assets/Image/logo-no-background.png'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import Header from './Header'
import Connexion from './Connexion'
import {
  
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const Navigate=useNavigate()

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return <div>
    <Header/>
 
    
    <video autoPlay loop muted plays-inline className=' bgvideo'>     
<source src={videobg} type="video/mp4"/>
</video>
<div className='container2' ref={section1Ref} >
    <div className='sectionContent'>
    <div><img src={Logo} className='setHeightLogo' alt='logo'/></div>
    <p className='setP'> 
Attijari Client Analysis est un système qui classe les clients en risqués et non risqués. Cette classification se base sur des données soigneusement traitées et stockées dans une vaste base de données. Le système analyse ces informations pour déterminer le niveau de risque de chaque client, permettant ainsi une classification précise et fiable.</p>
<div className='d-flex justify-content-center'>
<div className='center1 '>
<button className="btn1 " onClick={() => scrollToSection(section2Ref)}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border1">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span className=' text-uppercase' > connecter  <MDBIcon fas icon="sign-in-alt" size='xl' className='ms-2' /></span>
      </button>
      </div>
      </div>
      </div>
  </div>


  <section  ref={section2Ref} className='sectionContent1 setBackgroundC'>
  <MDBContainer fluid className=''>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='setBg text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '600px'}}>
    
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Authentifier</h2>
        <p className="text-white-50 mb-5">Veuillez entrer votre email et mot de passe</p>

        <MDBInput className=' text-white prevent-select' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
        <MDBInput className=' text-white prevent-select' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Mot de passe oublié?</a></p>
        <MDBBtn onClick={()=>Navigate('/Data')} outline className='mx-2 px-5' color='white' size='lg'>
          Login
        </MDBBtn>

     
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
</section>
  </div>

}

export default Home