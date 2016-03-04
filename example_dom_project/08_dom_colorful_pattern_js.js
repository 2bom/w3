function show_pattern() {
  var top_position = 25; left_position = 25;
  var width = 500, height = 500;
  var color_list = ["red", "orange", "yellow", "pink", "skyblue", "gray", "blue"];
  var the_body = document.getElementById("theBody");

  while (width > 50) {
    //div element를 만든다.
    var this_div = document.createElement("div");
    //random_color를 뽑는다.
    var random_color = Math.random() * color_list.length;
    random_color = Math.floor(random_color);
    //만들어진 div element의 속성값을 설정해줄 수 있게 세팅한다.
    this_div.style.top = top_position + "px";
    this_div.style.left = left_position + "px";
    this_div.style.width = width + "px";
    this_div.style.height = height + "px";
    this_div.style.background = color_list[random_color];
    //body에 만들어진 div들을 추가한다.
    the_body.appendChild(this_div);
    //만들어진 div element에 속성값을 설정해주는 실행 명령을 넣는다.
    top_position += 10;
    left_position += 10;
    width -= 20;
    height -= 20;
  }
}
