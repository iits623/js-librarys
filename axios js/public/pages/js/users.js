let userWraperr = document.querySelector(".users-wrap")
let editeModal = document.querySelector("#exampleModal")
let usernameInput = document.querySelector("#username")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let idUser = null
window.addEventListener('DOMContentLoaded', () => {
    showUser()
})

function removeUser(id) {
    let deleted = confirm('are you sure delete it???')
    if (deleted) {
        console.log(id);
        axios({
            method: 'delete',
            url: `https://axios-library-6f6b8-default-rtdb.firebaseio.com/user/${id}.json`
        })
            .then(res => {
                console.log(res);
                showUser()
            })

    }
}
function showUser() {
    axios({
        method: 'get',
        url: 'https://axios-library-6f6b8-default-rtdb.firebaseio.com/user.json',
    })
        .then(res => {
            let dataUser = res.data
            let entrisObj = Object.entries(dataUser)
            userWraperr.innerHTML = ''
            entrisObj.forEach(user => {
                userWraperr.insertAdjacentHTML('beforeend', `
                    <div class="user__box">
                            <div class="user__box_left">
                                <div class="user-status online-status"></div>
                                <img src="../../content/img/profile/banana.png" class="user-profile-box" alt="">
                                <div class="user-detail">
                                    <h1 class="user-id">${user[1].name}</h1>
                                    <h1 class="user-email">${user[1].email}</h1>
                                </div>
                            </div>

                            <div class="user-btns-group">
                                <button class="user-info-btn" onclick="setUserID('${user[0]}')">
                                  Edite
                                </button>
                                <button class="user-follow-btn" onclick="removeUser('${user[0]}')">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g id="vuesax_linear_user-add" data-name="vuesax/linear/user-add" transform="translate(-172 -188)">
                                            <g id="user-add">
                                                <path id="Vector" d="M10,5A5,5,0,1,1,5,0,5,5,0,0,1,10,5Z" transform="translate(179 190)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                <path id="Vector-2" data-name="Vector" d="M0,7C0,3.13,3.85,0,8.59,0a10.391,10.391,0,0,1,2.76.37" transform="translate(175.41 203)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                <path id="Vector-3" data-name="Vector" d="M8,4a3.594,3.594,0,0,1-.12.93,3.734,3.734,0,0,1-.46,1.13A3.97,3.97,0,0,1,4,8,3.921,3.921,0,0,1,1.34,6.97a3.684,3.684,0,0,1-.76-.91A3.921,3.921,0,0,1,0,4,3.994,3.994,0,0,1,4,0,3.944,3.944,0,0,1,6.97,1.33,3.984,3.984,0,0,1,8,4Z" transform="translate(186 202)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                <g id="Group">
                                                    <path id="Vector-4" data-name="Vector" d="M2.98,0H0" transform="translate(188.51 205.98)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                    <path id="Vector-5" data-name="Vector" d="M0,0V2.99" transform="translate(190 204.52)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                </g>
                                                <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Remove
                                </button>
                            </div>
                        </div>
                    `)
            })
        });
}


function setUserID(id) {
    idUser = id
    showEditeModal()

}
function showEditeModal() {
    editeModal.classList.add('show')
    editeModal.style.display = 'block'
}
function closeEditModal() {
    editeModal.classList.remove('show')
    editeModal.style.display = 'none'
}
function editeUser() {
    showEditeModal()
    axios({
        method: 'put',
        url: `https://axios-library-6f6b8-default-rtdb.firebaseio.com/user/${idUser}.json`,
        data: {
            name: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }
    }).then(res => {
        console.log(res);
        closeEditModal()
        showUser()

    })
}
