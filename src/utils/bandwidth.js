const getBandwidth = () => {
  return new Promise((resolve) => {
    if (navigator.connection && navigator.connection.effectiveType) {
      resolve(navigator.connection.effectiveType);
    } else {
      const startTime = new Date().getTime();
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const endTime = new Date().getTime();
          const duration = (endTime - startTime) / 1000;
          const bitsLoaded = xhr.response.length * 8;
          const speedBps = bitsLoaded / duration;
          const speedKbps = speedBps / 1024;
          if (speedKbps < 150) {
            resolve('2g');
          } else if (speedKbps < 700) {
            resolve('3g');
          } else {
            resolve('4g');
          }
        }
      };
      xhr.open('GET', 'https://www.google.com/images/phd/px.gif?d=' + new Date().getTime());
      xhr.send();
    }
  });
};

export default getBandwidth;
