import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col>
            <i className="fa-thin fa-star-christmas fa-spin" style="color: #1a0566;"></i>
            <p style={{ fontFamily: 'papyrus' }}>Loading</p>
        </Col>
    );
};
export default Loading;