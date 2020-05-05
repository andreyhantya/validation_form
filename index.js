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