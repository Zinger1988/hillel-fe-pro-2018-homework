var data, data2,
    template = document.querySelector('#template'),
    input = document.querySelector('#value'),
    taskContainer = document.querySelector('.task-body');


doAjax('text1.txt', 'data');
doAjax('text1.txt', 'data2');


function check() {
    if (!data || !data2) {
        return;
    }

    doOperation(data, data2);
}

function doOperation(str1, str2) {

    var res = str1 + str2;

    var container = document.createElement('div');
    container.innerHTML = res;
    container.classList.add('target-string');
    taskContainer.appendChild(container);

    input.addEventListener('blur', function () {
        var arr = container.innerHTML.split('_');
        arr = arr.map(function (item) {
            if (item == template.value) {
                item = input.value;
            }
            return item;
        })
        template.value = input.value;
        container.innerHTML = arr.join('_');
    })
}


function doAjax(url, target) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            return;
        }

        window[target] = xhr.responseText;
        check();
    }
}