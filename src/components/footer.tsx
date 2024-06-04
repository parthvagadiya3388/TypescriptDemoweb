import { Col, Container } from 'react-bootstrap'

const Footer: React.FC = () => {
  return (
        <>
               <Container fluid className='d-flex flex-wrap p-2 Footer_Conteiner bg-dark'>
                    <Col sm={12} md={5} className='Footer_col'>
                         <p className='m-0 text-sm-center text-md-start text-xl-start footer_copy'>© 2024 YourCompany</p>  
                    </Col>
                    <Col sm={12}  md={7} className='d-flex justify-content-evenly Footer_col2'>
                         <a className='m-0 footer_things' href='#'>Privacy Policy</a>  
                         <a className='m-0 footer_things' href='#'>Terms of Service</a>  
                         <a className='m-0 footer_things' href='#' >Cokies Service</a> 
                    </Col>
               </Container> 

        </>
  )
}

export default Footer;