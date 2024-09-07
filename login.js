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
    tab.forEach((tabItem) => {
        tabItem.querySelector('.btn').addEventListener('click', function(e) {
            e.preventDefault();
            tab.forEach((tab) => tab.classList.remove('is_on'));
            tabItem.classList.add('is_on');
        });
    });

    // 유효성 검사 함수
    function validateField(value, emptyMessage, regex = null, formatMessage = '') {
        if (value === '') {
            alert(emptyMessage);
            return false;
        }
        if (regex && !regex.test(value)) {
            alert(formatMessage);
            return false;
        }
        return true;
    }

    // 유효성 검사 및 아이디 중복 체크
    document.getElementById('form1').addEventListener('submit', function(e) {
        var name = document.getElementsByClassName('form')[0].value;
        var email = document.getElementsByClassName('form')[1].value;
        var id = document.getElementsByClassName('form')[2].value;
        var pw = document.getElementsByClassName('form')[3].value;

        // 이미 사용된 아이디 목록 (임시 데이터로 중복체크)
        var usedIds = ['user123', 'testid', 'example1'];

        // 이름 유효성 검사 (공백 및 한글만 허용, 길이 2~5자)
        if (!validateField(name, '이름을 입력하세요.', /^[ㄱ-ㅎ가-힣]+$/, '이름은 한글만 가능합니다.') || name.length < 2 || name.length > 5) {
            alert('이름은 2자에서 5자 사이여야 합니다.');
            e.preventDefault();
            return;
        }

        // 이메일 유효성 검사 (공백, 형식 체크)
        if (!validateField(email, '이메일을 입력하세요.', /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, '올바른 이메일 형식이 아닙니다.')) {
            e.preventDefault();
            return;
        }

        // 아이디 유효성 검사 (공백, 영소문자 및 숫자만 허용, 길이 4~15자, 중복 체크)
        if (!validateField(id, '아이디를 입력하세요.', /^[a-z0-9]+$/, '아이디는 영소문자와 숫자만 가능합니다.') || id.length < 4 || id.length > 15 || usedIds.includes(id)) {
            alert(usedIds.includes(id) ? '이미 사용 중인 아이디입니다.' : '아이디는 4자에서 15자 사이여야 합니다.');
            e.preventDefault();
            return;
        }

        // 비밀번호 유효성 검사 (공백, 영소문자, 숫자, 특수문자 포함, 길이 6~12자)
        var hasNumber = /\d/.test(pw);
        var hasLowerCase = /[a-z]/.test(pw);
        var hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/.test(pw);
        if (!validateField(pw, '비밀번호를 입력하세요.') || pw.length < 6 || pw.length > 12 || !hasNumber || !hasLowerCase || !hasSpecialChar) {
            alert('비밀번호는 6자에서 12자 사이여야 하며, 영소문자, 숫자, 특수문자를 포함해야 합니다.');
            e.preventDefault();
            return;
        }
    });
});
