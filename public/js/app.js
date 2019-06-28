
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) =>
{
    //prevent browser refresh
    e.preventDefault()
    //extract input
    const location = search.value

    messageOne.textContent = 'Loading weather data'
    messageTwo.textContent = ''
    //Input is added to the dynamic url to fetch data for the corresponding location
    //Kicks off asynchronous io operation
    fetch('/weather?address='+ location).then((response) => {

        //runs once json data has arrived
        response.json().then((data) =>
        {
            if(data.error)
            {
                messageOne.textContent = data.error
            }
            else
            {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})