document.addEventListener('DOMContentLoaded', function() {
    // 비밀번호 표시/숨기기 기능
    const passwordField = document.querySelector('#form1 input[type="password"]');
    const toggleButton = document.querySelector('.toggle-password');
    
    toggleButton.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleButton.innerText = 'Hide';
        } else {
            passwordField.type = 'password';
            toggleButton.innerText = 'Show';
        }
    });

    // 탭 기능
    const tab = document.querySelectorAll('.tab_menu .list li');

    for (let i = 0; i < tab.length; i++) {
        tab[i].querySelector('.btn').addEventListener('click', function(e) {
            e.preventDefault();
            for (let j = 0; j < tab.length; j++) {
                tab[j].classList.remove('is_on');
            }
            this.parentNode.classList.add('is_on');
        });
    }

    // 유효성 검사 및 아이디 중복 체크
    document.getElementById('form1').addEventListener('submit', function(e) {
        var name = document.getElementsByClassName('form')[0].value;
        var email = document.getElementsByClassName('form')[1].value;
        var id = document.getElementsByClassName('form')[2].value;
        var pw = document.getElementsByClassName('form')[3].value;

        // 이미 사용된 아이디 목록 (임시 데이터)
        var usedIds = ['user123', 'testid', 'example1'];

        // 공통 - 공백 검사
        if (name == '') {
            alert('이름을 입력하세요.');
            e.preventDefault();
        } else if (/[a-zA-Zㄱ-ㅎ0-9]/.test(name)) {
            alert('이름은 한글 입력만 가능합니다.');
            e.preventDefault();
        }

        // 이름 길이 2 ~ 5자 제한
        if (name.length < 2 || name.length > 5) {
            alert('이름 제한 길이를 넘었습니다.');
            e.preventDefault();
        }

        // 이메일 (이메일 형식)
        if (email == '') {
            alert('이메일을 입력하세요.');
            e.preventDefault();
        } else if (/[A-Z가-힣ㄱ-ㅎ]/.test(email)) {
            alert('이메일은 영소문자와 숫자만 가능합니다.');
            e.preventDefault();
        } else if (/\S+@\S+\.\S+/.test(email) == false) {
            alert('이메일 형식이 아닙니다.');
            e.preventDefault();
        }

        // 아이디 (4 ~ 8자, 영소문자, 숫자)
        if (id == '') {
            alert('아이디를 입력하세요.');
            e.preventDefault();
        } else if (/[A-Z가-힣ㄱ-ㅎ]/.test(id)) {
            alert('아이디는 영소문자와 숫자만 가능합니다.');
            e.preventDefault();
        }

        // 아이디 길이 4 ~ 15자 제한
        if (id.length < 4 || id.length > 15) {
            alert('아이디 제한 길이를 넘었습니다.');
            e.preventDefault();
        }

        // 아이디 중복 체크
        if (usedIds.includes(id)) {
            alert('이미 사용 중인 아이디입니다. 다른 아이디를 입력하세요.');
            e.preventDefault();
        }

        // 비밀번호 (6 ~ 12자, 영소문자, 숫자, 특수문자 포함)
        if (pw == '') {
            alert('비밀번호를 입력하세요.');
            e.preventDefault();
        } else if (/[A-Z가-힣ㄱ-ㅎ]/.test(pw)) {
            alert('비밀번호는 영소문자와 숫자만 가능합니다.');
            e.preventDefault();
        }

        // 비밀번호 길이 6 ~ 12자 제한
        if (pw.length < 6 || pw.length > 12) {
            alert('비밀번호 제한 길이를 넘었습니다.');
            e.preventDefault();
        }

        // 비밀번호 생성 기준: 숫자, 영문 소문자, 특수문자 포함 여부 확인
        var hasNumber = /\d/.test(pw); // 숫자 포함 여부
        var hasLowerCase = /[a-z]/.test(pw); // 소문자 포함 여부
        var hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/.test(pw); // 특수문자 포함 여부

        if (!hasNumber || !hasLowerCase || !hasSpecialChar) {
            alert('비밀번호는 숫자, 영소문자, 특수문자를 포함해야 합니다.');
            e.preventDefault();
        }
    });
});
