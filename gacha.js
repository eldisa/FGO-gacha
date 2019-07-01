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
var suffix =".jpg'";//png 無框 jpg有框
function setImgBorder( wantSetBorder ){
    if(wantSetBorder){
        suffix =".jpg'";
    }else{
        suffix =".png'";
    }
}

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
    //console.log(result_number);
    var imgsrc,number,html;
    switch( true ){
        case ( result_number > -1 && result_number < 1 )://0
            //console.log("五星英靈");
            vueSSRS.message++;
            number = create_rand_number2( servant_SSR.length);
            imgsrc = "src='imgs/"+servant_SSR[number].id+suffix;
            html = "<img class='col-md-1 col-xs-3' "+imgsrc+" >";
            $("#all").append(html);
            $("#SSR-Servants").append(html);
            break;

        case ( result_number >= 1 && result_number <= 4 )://1~4
            //console.log("五星禮裝");
            vueSSRC.message++;
            break;

        case ( result_number >= 5 && result_number <= 7 )://5~7
            //console.log("四星英靈");
            vueSRS.message++;
            number = create_rand_number2( servant_SR.length);
            imgsrc = "src='imgs/"+servant_SR[number].id+suffix;
            html = "<img class='col-md-1 col-xs-3' "+imgsrc+" >";
            $("#all").append(html);
            $("#SR-Servants").append(html);
            break;

        case ( result_number >= 8 && result_number <= 19 )://8~19
            //console.log("四星禮裝");
            vueSRC.message++;
            break;

        case ( result_number >= 20 && result_number <= 59 )://20~59
            //console.log("三星英靈");
            vueRS.message++;
            number = create_rand_number2( servant_R.length);
            imgsrc = "src='imgs/"+servant_R[number].id+suffix;
            html = "<img class='col-md-1 col-xs-3' "+imgsrc+" >";
            $("#all").append(html);
            $("#R-Servants").append(html);
            break;

        case ( result_number >= 60 && result_number <= 99 )://60~99
            //console.log("三星禮裝");
            vueRC.message++;
            break;

        default:
            //console.log("error");
            break;
    }
}

function pick_1() {
    catcha_result( create_rand_number() );
    vueTimes.message ++;
}
function pick_10() {
    console.log("保底");
    for(i=0;i<10;i++){
        catcha_result( create_rand_number() );
    }
    vueTimes.message +=10;
}

function pick_10_with_bonus() {
    console.log("保底");
    //四星禮裝
    catcha_result( 8 );
    //三星英靈
    catcha_result( 20 );
    //10-2=8
    for(i=0;i<8;i++){
        catcha_result( create_rand_number() );
    }
    vueTimes.message +=10;
}

function reset_cacha(){
    $("#all").empty();
    $("[id$=R-Servants]").empty();
    vueTimes.message = 0;
    vueSSRS.message = 0;
    vueSRS.message = 0;
    vueRS.message = 0;
    vueSSRC.message = 0;
    vueSRC.message = 0;
    vueRC.message = 0;
}