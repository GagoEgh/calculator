

function myCalc() {
    let te = document.querySelector('.te');
    let text = document.querySelector('.text');
    let table = document.querySelector('.table');
    let tdEllements = document.querySelectorAll('td');
    let p = document.createElement('p');
    p.classList.add('p');
    te.prepend(p);
    let str = '';
    console.log('asasd')

    function start() {
        str = '';
        text.textContent = 0;
    }

    function myPop(e) {
        if (e === '<-') {
            let res = str.split('').slice(0, str.length - 2);
            res.pop();
            if (res.length === 0) {
                start();
            } else {
                str = res.join('');
                text.textContent = str;
            }

        }

    }

    function orAndOr(e) {
        switch (e) {
            case '+':
            case '-':
            case '/':
            case '*':
            case '%':

                let numbers1 = str;
                p.textContent = numbers1;
                te.prepend(p);
                str = str.slice(0, str.length - 1);
                for (let j = 0; j < text.textContent.length; j++) {
                    if (text.textContent[j] === '.') parseFloat(str);
                }

                text.textContent = str;
                str = '';
        }
    }

    function myMath(e, s) {
        switch (e) {
            case '+':
                if (s === '=') {
                    p.textContent += parseFloat(text.textContent);
                    let num = parseFloat(p.textContent);
                    num += parseFloat(text.textContent);
                    text.textContent = num.toFixed(1);
                }

                break;
            case '-':
                if (s === '=') {
                    p.textContent += parseFloat(text.textContent);
                    let num = parseFloat(p.textContent);
                    num -= parseFloat(text.textContent);
                    text.textContent = num.toFixed(1);
                }

                break;
            case '*':
                if (s === '=') {
                    p.textContent += parseFloat(text.textContent);
                    let num = parseFloat(p.textContent);
                    num *= parseFloat(text.textContent);
                    text.textContent = num.toFixed(1);
                }

                break;
            case '/':
                if (s === '=') {
                    p.textContent += parseFloat(text.textContent);
                    let num = parseFloat(p.textContent);
                    num /= parseFloat(text.textContent);
                    if (num === Infinity || num === -Infinity) text.textContent = 'Cannot divide by zero';
                    else text.textContent = num.toFixed(1);
                }


                break;

        }

    }

    function myRemove(e) {
        if (e === 'C') {
            start();
            p.textContent = '';

        }
    }


    for (let i = 0; i < tdEllements.length; i++) {
        tdEllements[i].addEventListener('click', function () {



            if (tdEllements[i].textContent === 'CE' || tdEllements[i].textContent === 'C') {
                start();
            } else {
                str += tdEllements[i].textContent
                text.textContent = str;

            }

            myPop(tdEllements[i].textContent)
            orAndOr(tdEllements[i].textContent)
            myMath(p.textContent[p.textContent.length - 1], tdEllements[i].textContent)
            myRemove(tdEllements[i].textContent)

            // tvjal pajmany ashxatum e woroshaki terutjunnerov
            if (isNaN(text.textContent) && tdEllements[i].textContent !== 'C'
                && tdEllements[i].textContent !== '<-' && tdEllements[i].textContent !== 'CE') {
                if (p.textContent=='number'){
                    text.textContent = parseFloat(p.textContent);
                    p.textContent = text.textContent;
                }else {
                    text.textContent = 'Result is undefined';

                }

            }

        })

    }

}


myCalc();



