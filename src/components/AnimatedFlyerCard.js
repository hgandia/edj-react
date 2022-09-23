import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

const AnimatedFlyerCard = ({ item }) => {
    const { image, title, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config:{ duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardTitle className='mx-auto'>{title}</CardTitle>
                <CardImg src={image} alt={title} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
}

export default AnimatedFlyerCard;