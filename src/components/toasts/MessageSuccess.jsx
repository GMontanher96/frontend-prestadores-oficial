import Toast from 'react-bootstrap/Toast';

function MessageError() {
  return (
    <>
      {[
        'Success',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">ALERTA</strong>
          </Toast.Header>
          <Toast.Body className={variant === 'White' && 'text-white'}>
          Adicionado com sucesso
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default MessageError;