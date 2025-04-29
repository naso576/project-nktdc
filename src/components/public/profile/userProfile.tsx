import React from 'react';

interface UserProfileProps {
    name: string;
    email: string;
    avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatarUrl }) => {
    return (
        <div style={styles.container}>
            {avatarUrl && <img src={avatarUrl} alt={`${name}'s avatar`} style={styles.avatar} />}
            <div style={styles.info}>
                <h2 style={styles.name}>{name}</h2>
                <p style={styles.email}>{email}</p>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
    },
    avatar: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        marginRight: '16px',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        margin: '0',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    email: {
        margin: '4px 0 0',
        fontSize: '14px',
        color: '#555',
    },
};

export default UserProfile;