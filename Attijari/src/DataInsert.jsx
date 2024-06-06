import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Header from './Header';
import { Sidebar } from '@coreui/coreui';
import Sidenav from './Sidenav';

function App() {
  return <div>
    <Header/>
    
    <MDBContainer fluid className='h-custom backgroundBg d-flex  '>
    <Sidenav/>
      <MDBRow className='d-flex justify-content-center w-100 align-items-center h-100'>
        <MDBCol col='12' className='m-5 '>

          <MDBCard className=' card-registration card-registration-2' style={{borderRadius: '15px'}}>

            <MDBCardBody className='p-0'>

              <MDBRow>

                <MDBCol md='6' className='p-5 setbgcard1'>

                  <h3 className="fw-normal mb-5 text-danger-emphasis">Information sur le client</h3>
                    <div>
                      <p className='fw-bold '>Famille produit:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>

                    </option>
                  </select>
                  </div>

                  <div>
                      <p className='fw-bold '>produit pilotage:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>

                    </option>
                  </select>
                  </div>

                  <div>
                      <p className='fw-bold '>produit SSFamille:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>
                    </option>
                  </select>
                  </div>
                 
                  <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Sexe: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">Masculin</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Feminin</label>
                  </div>


                </div>
                <div>
                      <p className='fw-bold '>Marché:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>
                    </option>
                  </select>
                  </div>
            

                </MDBCol>


                <MDBCol md='6' className='bg-indigo p-5'>

                  <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Autre Information</h3>
                  <div>
                      <p className='fw-bold text-light '>Pays du Client:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>
                    </option>
                  </select>
                  </div>

                  <div>
                      <p className='fw-bold text-light '>Age:</p>
                 <MDBInput className='mb-3 form-control' placeholder='Entrer un  nombre'></MDBInput>
                  </div>

                  <div>
                      <p className='fw-bold text-light '>Salaire:</p>
                 <MDBInput className='mb-3 form-control' placeholder='Entrer un  nombre'></MDBInput>
                  </div>

                  <div>
                      <p className='fw-bold text-light '>CSP agregé:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>
                    </option>
                  </select>
                  </div>
            
                  <div>
                      <p className='fw-bold text-light '>Niveau de service:</p>
                  <select className=' form-select mb-3 bg-transparent'>
                    <option>
                    </option>
                  </select>
                  </div>
            

              

                  
                  <MDBBtn color='light' size='lg'>Demarrer</MDBBtn>

                </MDBCol>
              </MDBRow>

            </MDBCardBody>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
}

export default App;