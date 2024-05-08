import img from './Error.gif';

const ErrorMessage = () => {
  return (
    <div style={{ margin: '0', display: 'block', textAlign: 'center' }}>
      <img src={img} alt="Error" />
      <p style={{ fontWeight: 'bold', fontSize: 24 }}>Something went Wrong</p>
    </div>
  );
};

export default ErrorMessage;
