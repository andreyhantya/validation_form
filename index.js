let inputs = document.querySelectorAll('input[data-rule]');
const regulars = {
    number: /^\+\d{12}$/,
    email: /^\w{1,30}\@[a-zA]{1,10}\.(com|ua|ru|[a-zA]{1,7})$/,
    name: /^\w\D{1,60}$/
}

for (let input of inputs) {
    input.addEventListener('blur', function () {
        console.log(this.dataset.rule);
        let rule = this.dataset.rule;
        let value = this.value;
        let check;
        switch (rule) {
            case 'number':
                check = regulars.number.test(value);
                console.log(check);
                break;
            case 'email':
                check = regulars.email.test(value);
                break;
            case 'name':
                check = regulars.name.test(value);
                break;
        }

        this.classList.remove('valid');
        this.classList.remove('invalid');

        if (check) {
            this.classList.add('valid')
        } else {
            this.classList.add('invalid')
        }
    })
}


let test;
const showModal = () => {
    let check = [];
    let inputs = document.querySelectorAll('input[data-rule]');

    for (let input of inputs) {
        input.classList == 'form__input valid' ? check.push(true) : check.push(false);
    }
    if (check.every(item => item === true)) {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal').style.opacity = 1;

    }
}

const closeModal = () => {
    document.querySelector('.modal').style.opacity = '0';
    document.querySelector('.modal').style.display = 'none';
}