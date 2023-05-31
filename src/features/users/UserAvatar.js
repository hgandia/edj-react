import userIcon from '../../app/assets/img/userIcon.jpg';

const userAvatar = () => {
    return(
        <div style={{ width: '2rem', height: '2rem' }}>
            <img
                src={userIcon}
                alt={'user'}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default userAvatar;