import '../index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div id="notification" className="action , hide">
      {message}
    </div>
  );
};

export default Notification;
