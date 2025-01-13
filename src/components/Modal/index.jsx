

import { MdClose } from "react-icons/md"
import { Container, Background } from "./styles"
import PropTypes from 'prop-types'




function Modal({setShowModal, video}) {
   



    return (
        <Background>
            <MdClose 
            onClick={() => setShowModal(false)}
            className="icon"
            style={{
                position: 'absolute',
                top: '40px',
                right: '200px',
              }}
              size="50px"
              color="white" />
                <Container>
                { video && (
                    <video 
                    controls 
                    src={video} 
                    alt="video-mario" 
                    style={{
                        width: '100%',
                        height: '500px',
                    }}
                />
                )}
                </Container>
            
        </Background>
    )
}

export default Modal

Modal.propTypes = {
    setShowModal: PropTypes.func.isRequired, 
    video: PropTypes.string.isRequired,      
};