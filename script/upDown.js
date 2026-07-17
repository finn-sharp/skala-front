function startUpDownGame() {
    // 1부터 50 사이의 무작위 숫자 생성
    var computerNum = Math.floor(Math.random() * 50) + 1; //
    var count = 0;
    var userGuess = null;

    while (true) {
        var input = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");
        
        // 사용자가 취소를 누른 경우 게임 종료
        if (input === null) {
            alert("게임을 종료합니다.");
            break;
        }

        userGuess = parseInt(input);
        count++;

        if (isNaN(userGuess)) {
            alert("올바른 숫자를 입력해주세요.");
            continue;
        }

        if (userGuess > computerNum) {
            alert("Down!"); //
        } else if (userGuess < computerNum) {
            alert("Up!"); //[cite: 1]
        } else {
            alert("축하합니다! " + count + "번 만에 맞추셨습니다."); //[cite: 1]
            break;
        }
    }
}