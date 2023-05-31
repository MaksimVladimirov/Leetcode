function fetchUrl(url) {
  console.log(`fetching ${url}...`, this.firstName);
}

const user = {
  firstName: 'Bob',
};

function debounce(callback, delay) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fetching = debounce(fetchUrl.bind(user), 400);
fetching(1);
