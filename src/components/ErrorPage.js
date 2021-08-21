import { Result } from 'antd';
import PropTypes from 'prop-types';

const ErrorPage = (props) => {
    return (
        <div>
            <Result
                status={props.status}
                title={props.title}
                subTitle={props.subTitle}
            />
        </div>
    )
}

ErrorPage.propTypes = {
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default ErrorPage;