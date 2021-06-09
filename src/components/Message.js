import { useEffect } from 'react';

function Message({ size }) {

    useEffect(() => {
        console.log('Message', size);
    }, [size])

    return (
        <div className="message medium">
            (Oh my! Your bird is naked!)
        </div>
    );
};

export default Message;
