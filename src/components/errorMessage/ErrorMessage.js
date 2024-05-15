import img from './Error.gif';

const ErrorMessage = ({ text = 'Something went wrong' }) => {
  return (
    <div style={{ margin: '0', display: 'block', textAlign: 'center' }}>
      <img src={img} alt="Error" />
      <p style={{ fontWeight: 'bold', fontSize: 24 }}>{text}</p>
    </div>
  );
};

export default ErrorMessage;
