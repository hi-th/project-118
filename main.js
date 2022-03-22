array_1 = ['pen','paper','book','bottle'];
random_no = Math.floor((Math.random()*array_1.length)+1);
element_of_array = array_1[random_no];

timer_counter = 0;
timer_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;

function draw() {
    check_sketch();
    if(draw_sketch == sketch) {
        answer_holder = set;
        score = score + 1;
        document.getElementById("score").innerHTML = "Score:" + score;
    }
}

function check_sketch() {
    timer_counter = timer_counter + 1;
    document.getElementById("timer").innerHTML = "Timer:" + timer_counter;
    console.log(timer_counter);
    if (timer_counter > 400) {
        timer_counter = 0;
        timer_check = "completed";
    }
    if (timer_check = "completed") {
        timer_check = "";
        answer_holder = ""
        updateCanvas();
    }
}

function updateCanvas() {
    background("#ffffff");
    random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
    sketch = quick_draw_data_set[random_number]; 
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
}


function setup() {
    canvas = createCanvas(280 , 280);
    canvas.center();
    background("#ffffff");
}