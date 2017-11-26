/**
 * Created by Dias on 2017/11/12.
 */
var probability = [1,3,40,4,12,40];
var total = [0,0,0,0,0,0];
var targetData;
var servant_SSR = [] , servant_SR = [],servant_R = [];
var servant_N = [], servant_HN = [];
var pick_up = {
    'N':[],
    'HN':[],
    'R':[],
    'SR':[],
    'SSR':[]
};
var catcha;
var player_got = {'N':[],'HN':[],'R':[],'SR':[],'SSR':[]};

$.getJSON('./FGO/Servants/all.json', function(data){
    targetData = data;
    data.forEach(function(ele){
        switch( ele.rare ){
            case 5:
                servant_SSR.push(ele);
                break;
            case 4:
                servant_SR.push(ele);
                break;
            case 3:
                servant_R.push(ele);
                break;
            case 2:
                servant_HN.push(ele);
                break;
            case 1:
                servant_N.push(ele);
                break;
            default:
                break;
        }
    });
});

$.getJSON('./FGO/Servants/always.json', function(data){
    data.forEach(function(ele){
        switch( ele.rare ){
            case 5:
                pick_up[SSR].push(ele);
                break;
            case 4:
                pick_up[SR].push(ele);
                break;
            case 3:
                pick_up[R].push(ele);
                break;
            case 2:
                pick_up[HN].push(ele);
                break;
            case 1:
                pick_up[N].push(ele);
                break;
            default:
                break;
        }
    });
});

function pick_up(){
    //load pick up list
}

function set_catcha(){

}
function create_rand_number(){
    var maxNum = 100;
    var minNum = 0;
    var n = Math.floor(Math.random() * ( maxNum - minNum  ) ) + minNum;// range :min~MAX-1
    return n ;
}
function create_rand_number2( num){
    var maxNum = num;
    var minNum = 0;
    var n = Math.floor(Math.random() * ( maxNum - minNum  ) ) + minNum;// range :min~MAX-1
    return n ;
}

function catcha_result( result_number ){
    console.log(result_number);
    var imgsrc,number,html;
    switch( true ){
        case ( result_number > -1 && result_number < 1 )://0
            number = create_rand_number2( servant_SSR.length);
            imgsrc = "src='imgs/"+servant_SSR[number].id+".png'"
            html = "<img "+imgsrc+" >";
            $("#result").append(html);
            //console.log("五星英靈");
            break;

        case ( result_number >= 1 && result_number <= 4 )://1~4
            //console.log("五星禮裝");
            break;

        case ( result_number >= 5 && result_number <= 7 )://5~7
            number = create_rand_number2( servant_SR.length);
            imgsrc = "src='imgs/"+servant_SR[number].id+".png'"
            html = "<img "+imgsrc+" >";
            //$("#result").append(html);
            //console.log("四星英靈");
            break;

        case ( result_number >= 8 && result_number <= 19 )://8~19
            console.log("四星禮裝");
            break;

        case ( result_number >= 20 && result_number <= 59 )://20~59
            number = create_rand_number2( servant_R.length);
            imgsrc = "src='imgs/"+servant_R[number].id+".png'"
            html = "<img "+imgsrc+" >";
            //$("#result").append(html);
            //console.log("三星英靈");
            break;

        case ( result_number >= 60 && result_number <= 99 )://60~99
            //console.log("三星禮裝");
            break;

        default:
            //console.log("error");
            break;
    }
}

function catcha_result2( result_number ){
    console.log(result_number);
    var imgsrc,number,html;
    switch( true ){
        case ( result_number > -1 && result_number < 1 )://0
            number = create_rand_number2( servant_SSR.length);
            imgsrc = "src='imgs/"+servant_SSR[number].id+".png'"
            html = "<img "+imgsrc+" >";
            $("#result").append(html);
            //console.log("五星英靈");
            break;

        case ( result_number >= 1 && result_number <= 4 )://1~4
            //console.log("五星禮裝");
            break;

        case ( result_number >= 5 && result_number <= 7 )://5~7
            number = create_rand_number2( servant_SR.length);
            imgsrc = "src='imgs/"+servant_SR[number].id+".png'"
            html = "<img "+imgsrc+" >";
            //$("#result").append(html);
            //console.log("四星英靈");
            break;

        case ( result_number >= 8 && result_number <= 19 )://8~19
            console.log("四星禮裝");
            break;

        case ( result_number >= 20 && result_number <= 59 )://20~59
            number = create_rand_number2( servant_R.length);
            imgsrc = "src='imgs/"+servant_R[number].id+".png'"
            html = "<img "+imgsrc+" >";
            //$("#result").append(html);
            //console.log("三星英靈");
            break;

        case ( result_number >= 60 && result_number <= 99 )://60~99
            //console.log("三星禮裝");
            break;

        default:
            //console.log("error");
            break;
    }
}

function getServants( rare ){

}

function update_column( columnNumber ){

}

function pick_10_bonus(){//10連保底
    //4 星 禮裝
    //3星 servant
}
function pick_1() {
    catcha_result( create_rand_number() );
    app.message ++;
}
function pick_10() {
    console.log("保底");
    for(i=0;i<9;i++){
        catcha_result( create_rand_number() );
    }
    app.message +=10;
}
