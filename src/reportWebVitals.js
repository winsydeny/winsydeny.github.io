
import  {getCLS,getFID,getFCP,getLCP,getTTFB} from 'web-vitals'
const reportWebVitals = onPerfEntry => {

  // if (onPerfEntry && onPerfEntry instanceof Function) {
  //   web.then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
  //   });
  // }
};

export default reportWebVitals;
