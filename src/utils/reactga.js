
import ReactGA from 'react-ga';

const checkProduction = () => process.env.NODE_ENV === 'production';

export const initializeGA = (props) => {
  if (!checkProduction()) {
    return;
  }
  // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
  ReactGA.initialize('UA-122661816-1');
  ReactGA.pageview(props.location.pathname);
};

export const event = (options) => {
  if (!checkProduction()) {
    return;
  }
  ReactGA.event(options);
};
