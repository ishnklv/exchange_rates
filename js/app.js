const CURRENCY_CODE = {
    USD: 'USD',
    EUR: 'EUR',
    RUB: 'RUB',
    RUB: 'RUB',
}

const getToday = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const renderContent = (response) => {
    const { data } = response;
    let content = document.getElementById("data").innerHTML;


    Object
        .keys(data.rates)
        .map((currencyCode) => {
            content += `
                <tr>
                    <td>${ data.base }</td>
                    <td>${ data.rates[currencyCode].toFixed(2) }</td>
                </tr>
            `;
        });
    document.getElementById("data").innerHTML = content;
};

Promise
    .all([
        axios.get(`https://api.ratesapi.io/api/${getToday()}?base=${CURRENCY_CODE.USD}&symbols=${CURRENCY_CODE.RUB}`),
        axios.get(`https://api.ratesapi.io/api/${getToday()}?base=${CURRENCY_CODE.EUR}&symbols=${CURRENCY_CODE.RUB}`),
        
    ])
    .then((values) => values.forEach(renderContent));

// axios.get(`https://api.ratesapi.io/api/${getToday()}?base=${CURRENCY_CODE.USD}&symbols=${CURRENCY_CODE.RUB}`)
//     .then(renderContent);