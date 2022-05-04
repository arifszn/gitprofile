import PropTypes from 'prop-types';

const ErrorPage = (props) => {
  return (
    <div className="min-w-screen min-h-screen bg-base-200 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1 min-h-full min-w-full rounded-3xl bg-base-100 shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full">
          <div className="mb-10 md:mb-20 mt-10 md:mt-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-primary mb-10">
              {props.status}
            </h1>
            <p className="text-lg pb-2 text-base-content">{props.title}</p>
            <div className="text-base-content text-opacity-60">
              {props.subTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 md:w-96 h-96 md:h-full bg-accent bg-opacity-10 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className="w-96 h-full bg-secondary bg-opacity-10 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div>
  );
};

ErrorPage.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.node.isRequired,
};

export default ErrorPage;
