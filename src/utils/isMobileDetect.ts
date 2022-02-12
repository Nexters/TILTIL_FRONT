import { IncomingMessage } from 'node:http';

const isMobileDetect = (req?: IncomingMessage) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const isMobile = Boolean(userAgent?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
  return isMobile;
};

export default isMobileDetect;
