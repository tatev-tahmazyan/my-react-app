import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import React,{forwardRef,memo} from 'react';
const TestUseRefSubmitBtn = forwardRef(({
    setResult,
    testProps
}, ref) => {
    const handleChangeName = () => {
        const { value } = ref.current;
        // if (value.length >= 3)
        setResult(value);
    }
    return(
        <>
        <div className="usestate-container">
                <h2 className="usetate-heading">
                    Ref Example
                </h2>
                <Button
                    onClick={handleChangeName}
                >
                    Change Name
                </Button>
            </div>
        </>
    );
});
TestUseRefSubmitBtn.propTypes = {
    setResult : PropTypes.func,
    testProps : PropTypes.bool
}
export default memo(TestUseRefSubmitBtn);