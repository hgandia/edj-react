import { Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

const AnimatedFlyerCard = ({ item }) => {
    const { image, title, description } = item;
    const [toggle, setToggle] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config:{ duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);
 
    return (
        <>
            <animated.div style={animatedStyle}>
                <Card style={{ width: '75%' }} className='mx-auto img-thumbnail'>
                    <CardTitle className='mx-auto'>{title}</CardTitle>
                    <CardImg src={image} alt={title} onClick={ () => setModalOpen(true) } />
                    <CardBody>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </animated.div>
            <Modal isOpen={modalOpen} size='xl' className='mx-auto'>
                <ModalHeader className='mx-auto' toggle={ () => setModalOpen(false) } >
                    {title}
                </ModalHeader >
                <ModalBody>
                    <CardImg src={image}  alt={title} />
                </ModalBody>
                <Button centered color='secondary' onClick={ () => setModalOpen(false) }>
                    Close
                </Button>
            </Modal>
        </>
    );
}

export default AnimatedFlyerCard;