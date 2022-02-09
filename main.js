for(let i = 0; i <= 26; i++){ 
let buttonfind = document.querySelectorAll('.my-button')[i];
buttonfind.addEventListener('click', function(){
    let letter = this.innerText;
    audioplay(letter);
    // addaudio(letter);
});
}
document.addEventListener('keypress' , function(event){
    let text = event.key;
    audioplay(text);
})
/*
function addaudio(letter){
    switch(letter){
        case 'A':
            let audios = new Audio('audio/a.mp3');
            audios.play();
        break;
        case 'B':
            let audios = new Audio('audio/b.mp3');
            audios.play();
        break;
        case 'C':
            let audios = new Audio('audio/c.mp3');
            audios.play();
        break;
        case 'D':
            let audios = new Audio('audio/d.mp3');
            audios.play();
        break;
        case 'E':
            let audios = new Audio('audio/e.mp3');
            audios.play();
        break;
        case 'F':
            let audios = new Audio('audio/f.mp3');
            audios.play();
        break;
        case 'G':
            let audios = new Audio('audio/g.mp3');
            audios.play();
        break;
        case 'H':
            let audios = new Audio('audio/h.mp3');
            audios.play();
        break;
        case 'I':
            let audios = new Audio('audio/i.mp3');
            audios.play();
        break;
        case 'J':
            let audios = new Audio('audio/j.mp3');
            audios.play();
        break;
        case 'K':
            let audios = new Audio('audio/k.mp3');
            audios.play();
        break;
        case 'L':
            let audios = new Audio('audio/l.mp3');
            audios.play();
        break;
        case 'M':
            let audios = new Audio('audio/m.mp3');
            audios.play();
        break;
        case 'N':
            let audios = new Audio('audio/n.mp3');
            audios.play();
        break;
        case 'O':
            let audios = new Audio('audio/o.mp3');
            audios.play();
        break;
        case 'P':
            let audios = new Audio('audio/p.mp3');
            audios.play();
        break;
        case 'Q':
            let audios = new Audio('audio/q.mp3');
            audios.play();
        break;
        case 'R':
            let audios = new Audio('audio/r.mp3');
            audios.play();
        break;
        case 'S':
            let audios = new Audio('audio/s.mp3');
            audios.play();
        break;
        case 'T':
            let audios = new Audio('audio/t.mp3');
            audios.play();
        break;
        case 'U':
            let audios = new Audio('audio/u.mp3');
            audios.play();
        break;
        case 'V':
            let audios = new Audio('audio/v.mp3');
            audios.play();
        break;
        case 'W':
            let audios = new Audio('audio/w.mp3');
            audios.play();
        break;
        case 'X':
            let audios = new Audio('audio/x.mp3');
            audios.play();
        break;
        case 'Y':
            let audios = new Audio('audio/y.mp3');
            audios.play();
        break;
        case 'Z':
            let audios = new Audio('audio/z.mp3');
            audios.play();
        break;
        default :'';
    }
}
*/

function audioplay(letter){
    if(letter == 'A' || letter == 'a'){
        let audio = new Audio('audio/a.mp3');
        audio.play();
    }else if(letter == 'B' || letter == 'b'){
        let audio = new Audio('audio/b.mp3');
        audio.play();
    }
    else if(letter == 'C' || letter == 'c'){
        let audio = new Audio('audio/c.mp3');
        audio.play();
    }
    else if(letter == 'D' || letter == 'd'){
        let audio = new Audio('audio/d.mp3');
        audio.play();
    }
    else if(letter == 'E' || letter == 'e'){
        let audio = new Audio('audio/e.mp3');
        audio.play();
    }
    else if(letter == 'F' || letter == 'f'){
        let audio = new Audio('audio/f.mp3');
        audio.play();
    }
    else if(letter == 'G' || letter == 'g'){
        let audio = new Audio('audio/g.mp3');
        audio.play();
    }
    else if(letter == 'H' || letter == 'h'){
        let audio = new Audio('audio/h.mp3');
        audio.play();
    }
    else if(letter == 'I' || letter == 'i'){
        let audio = new Audio('audio/i.mp3');
        audio.play();
    }
    else if(letter == 'J' || letter == 'j'){
        let audio = new Audio('audio/j.mp3');
        audio.play();
    }
    else if(letter == 'K' || letter == 'k'){
        let audio = new Audio('audio/k.mp3');
        audio.play();
    }
    else if(letter == 'L' || letter == 'l'){
        let audio = new Audio('audio/l.mp3');
        audio.play();
    }
    else if(letter == 'M' || letter == 'm'){
        let audio = new Audio('audio/m.mp3');
        audio.play();
    }
    else if(letter == 'N' || letter == 'n'){
        let audio = new Audio('audio/n.mp3');
        audio.play();
    }
    else if(letter == 'O' || letter == 'o'){
        let audio = new Audio('audio/o.mp3');
        audio.play();
    }
    else if(letter == 'P' || letter == 'p'){
        let audio = new Audio('audio/p.mp3');
        audio.play();
    }
    else if(letter == 'Q' || letter == 'q'){
        let audio = new Audio('audio/q.mp3');
        audio.play();
    }
    else if(letter == 'R' || letter == 'r'){
        let audio = new Audio('audio/r.mp3');
        audio.play();
    }
    else if(letter == 'S' || letter == 's'){
        let audio = new Audio('audio/s.mp3');
        audio.play();
    }
    else if(letter == 'T' || letter == 't'){
        let audio = new Audio('audio/t.mp3');
        audio.play();
    }
    else if(letter == 'U' || letter == 'u'){
        let audio = new Audio('audio/u.mp3');
        audio.play();
    }
    else if(letter == 'V' || letter == 'v'){
        let audio = new Audio('audio/v.mp3');
        audio.play();
    }
    else if(letter == 'W' || letter == 'w'){
        let audio = new Audio('audio/w.mp3');
        audio.play();
    }
    else if(letter == 'X' || letter == 'x'){
        let audio = new Audio('audio/x.mp3');
        audio.play();
    }
    else if(letter == 'Y' || letter == 'y'){
        let audio = new Audio('audio/y.mp3');
        audio.play();
    }
    else if(letter == 'Z' || letter == 'z'){
        let audio = new Audio('audio/z.mp3');
        audio.play();
    }
    else if(letter == 'Ruhit Baidya' || letter == '1'){
        let audio = new Audio('audio/ruhit.mp3');
        audio.play();
    }
}
