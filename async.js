// function getDatafromARandomServer(data){
//     return "it's taking a looooong time to get some data back"
// }

// console.log(1)
// console.log(2)
// console.log(3)
// getDatafromARandomServer()
// console.log(4)

// console.log("Starting callback example")

// function getUserData(userId, callback){
//     console.log(`Fetching data for user ${userId}`)

//     setTimeout(()=>{
//         const userData = {
//             id: userId,
//             name: "Joe Doe",
//             email: NaN,
//         };
//         callback(userData)
//     }, 1500)


//     }

//     getUserData(123, function(data){
//         console.log("User data received")
//         console.log(data)
//     })

//     console.log("this runs immediately while getUserData is still processing")

//     function getData(userData1){
//         let userData1 = {
//             name: Beaver
//             lastname: McKraft
//         }}
    
//         getData(userData1){
//         console.log(getData)
//         }

//         userId

// console.log("staritng promises example")

// function getUserDataPromise(userId){
//     return new Promise((resolve, reject)=>{
//         console.log(`fetching data for user ${userId})
//         })
// }

// // IMPORTANT THIS IS WHAT YOURE LOOKING FOR BEV
// console.log("Starting fetch examples...")

// function fetchUserList(){
//     console.log('fetching users from servers')

//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((response)=>{
//         console.log("got a response from the server")
//         return response.json()
//     })
//     .then((data)=>{
//         console.log('got the data')
//     })
//     .catch((error)=>{
//     console.log('error', error)
// })
// }

// fetchUserList()


//THIS IS ASYNC-AWAIT AND IS BETTER I THINK
async function getUserWithAsyncAwait(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const users = await response.json();
        console.log('users', users)
    } catch (error) {
        console.log(error)
    }
}

// getUserWithAsyncAwait()
const body = document.getElementsByTagName('body')[0]; //returns an array of body tags


async function fetchandDisplayUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();

        const body = document.getElementsByTagName('body')[0]; //returns an array of body tags

        console.log("users received", users)

        const container = document.createElement('div');

        const title = document.createElement('h2');
        title.textContent = "users from API";
        container.appendChild(title);

        // AS IT WERE:
        // <div>
        //     <h2>Users from API</h2>
        // </div>

        console.log("USERS DATA", users)

        for (let i = 0; i < users.length; i++){
            const user = users[i]
            const userDiv = document.createElement('div')
            userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <hr>
            `

            container.appendChild(userDiv)

            console.log(user)

            console.log(container)
        }

        console.log(container)
        body.appendChild(container)


    } catch (error) {
        console.log("error!", error)
    }
}

fetchandDisplayUsers()
console.log('hello')

const navigationHeader = document.createElement('div')
navigationHeader.innerHTML =
`
    <a href="index.html">Home</a>
`
body.appendChild(navigationHeader)