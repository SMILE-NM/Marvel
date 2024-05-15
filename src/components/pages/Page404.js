import img from './Error.gif';

const Page404 = () => {
  return (
    <div style={{ marginTop: '20%', display: 'block', textAlign: 'center' }}>
      <img src={img} alt="Error" style={{ width: '200px' }} />
      <p style={{ fontWeight: 'bold', fontSize: 36 }}>Page Not Found 404</p>
    </div>
  );
};

export default Page404;
