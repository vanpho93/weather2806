const URL = 'https://vanpho93.github.io/data.json';

const getList = () => (
    fetch(URL) // eslint-disable-line
    .then(res => res.json())
);

export default getList;
