import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [valueDelay, setValueDelay] = useState(value);

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setValueDelay(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value]);

    return valueDelay;
}

useDebounce.propTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.number,
};

export default useDebounce;
