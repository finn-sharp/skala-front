function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"]; //[cite: 1]
    var total = 0; //[cite: 1]

    for (var i = 0; i < subjects.length; i++) {
        var score = prompt(subjects[i] + " 점수를 입력하세요."); //[cite: 1]
        
        // 취소를 누른 경우 중단
        if (score === null) return; 
        
        total += parseInt(score) || 0; //[cite: 1]
    }

    // 소수점 첫째 자리까지 평균 계산
    var average = (total / subjects.length).toFixed(1);
    var result = parseFloat(average) >= 60 ? "합격입니다!" : "불합격입니다."; //[cite: 1]
    
    // 평균 80점 이상일 경우 우수자 문구 보너스 추가
    if (parseFloat(average) >= 80) {
        result += " 우수자로 선정되었습니다.";
    }

    alert("====== 📊 성적 결과표 ======\n• 총점: " + total + "점\n• 평균: " + average + "점\n---------------------------\n• 결과: " + result); //[cite: 1]
}