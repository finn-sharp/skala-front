function showMyBag() {
    // 소지품 객체 배열 생성 (아이템 명과 수량)
    var myBag = [
        { name: "여권", count: 1 },
        { name: "스마트폰", count: 2 },
        { name: "지갑", count: 1 }
    ];

    var output = "🎒 [내 가방 속 물품 목록]\n---------------------------\n";
    
    // 반복문을 통한 소지품 출력
    for (var i = 0; i < myBag.length; i++) {
        output += "• " + myBag[i].name + " : " + myBag[i].count + "개\n";
    }
    
    output += "---------------------------\n총 물품 종류: " + myBag.length + "가지";

    alert(output);
}