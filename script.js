// 初始化变量
let orcoins = 100;
let round = 1;
let fishingRods = 0;// 鱼竿数量
let coins = 100;// 总金币数
let lasttoal = 0; // 上轮得分
let lastwin = 0; // 上轮赢取金币数
let lastlose = 0; // 上轮损失金币数
let bigfish = 46;
let smallfish = 50;
let bigFishcatch = 0; // 捕获的大鱼数量
let smallFishcatch = 0; // 捕获的小鱼数量
let fishEscape = 0; // 逃脱的鱼数量
let bigFishRatioValue = returnFloat((bigfish / (bigfish + smallfish)) * 100); // 大鱼比率
let smallFishRatioValue = returnFloat((smallfish / (bigfish + smallfish)) * 100); // 小鱼比率
let roundcoins = 0; // 本轮金币数

// 获取元素的引用
const Round = document.getElementById('Round');// 轮数
const lastWin = document.getElementById('last-win');// 上轮金币获得情况
const lastLose = document.getElementById('last-lose');// 上轮金币损失情况
const lastTotal = document.getElementById('last-total');// 上轮情况
const Coins = document.getElementById('total-coins');// 总金币数
const OrCoins = document.getElementById('or-coins');// 初始金币数
const startButton = document.getElementById('start-button');// 开始按钮
const stopButton = document.getElementById('stop-button');// 停止按钮
const result1 = document.getElementById('result1');// 结果1
const result2 = document.getElementById('result2');// 结果2
const bigFishCount = document.getElementById('num-big-fish');// 大鱼数量
const bigFishRatio = document.getElementById('big-fish-ratio');// 大鱼比率
const smallFishCount = document.getElementById('num-small-fish');// 小鱼数量
const smallFishRatio = document.getElementById('small-fish-ratio');// 小鱼比率
const Container = document.getElementById('container');// 容器
const Group = document.getElementById('fishgroup');// 鱼群
const FishingRods = document.getElementById('fishing-rods');// 游戏区域
const bigFishCatch1 = document.getElementById('big-fish-catch1');// 大鱼捕获1
const smallFishCatch1 = document.getElementById('small-fish-catch1');// 小鱼捕获1
const roundCoins1 = document.getElementById('round-coins1');// 本轮金币数1
const bigFishCatch2 = document.getElementById('big-fish-catch2');// 大鱼捕获2
const smallFishCatch2 = document.getElementById('small-fish-catch2');// 小鱼捕获2
const roundCoins2 = document.getElementById('round-coins2');// 本轮金币数2
const fishEscapeCount = document.getElementById('fish-escape');// 鱼逃脱数量
const EscapeFish = document.getElementById('escape-fish');// 本轮鱼逃脱
const bubbles = [document.getElementById('bubble1'), document.getElementById('bubble2'), document.getElementById('bubble3'), document.getElementById('bubble4'), document.getElementById('bubble5')];// 添加鱼竿气泡
const subs = [document.getElementById('sub1'), document.getElementById('sub2'), document.getElementById('sub3'), document.getElementById('sub4'), document.getElementById('sub5')];// 取消添加鱼竿气泡
const img = [document.getElementById('rod1'), document.getElementById('rod2'), document.getElementById('rod3'), document.getElementById('rod4'), document.getElementById('rod5')];// 鱼竿图片

//初始界面
function init() {
    coins = 100;// 总金币数
    orcoins = 100;
    lasttoal = 0; // 上轮得分
    lastwin = 0; // 上轮赢取金币数
    lastlose = 0; // 上轮损失金币数
    round = 1;
    bigfish = 46;
    smallfish = 50;
    bigFishcatch = 0; // 捕获的大鱼数量
    smallFishcatch = 0; // 捕获的小鱼数量
    fishEscape = 0; // 捕获的鱼数量
    bigFishRatioValue = returnFloat((bigfish / (bigfish + smallfish)) * 100); // 大鱼比率
    smallFishRatioValue = returnFloat((smallfish / (bigfish + smallfish)) * 100); // 小鱼比率
    roundcoins = 0; // 本轮金币数
    Coins.textContent = coins; // 初始化总金币数
    OrCoins.textContent = orcoins; // 初始化初始金币数
    Round.innerText = round;// 初始化轮数
    lastWin.innerText = lastwin;// 初始化上轮赢取金币数
    lastLose.innerText = lastlose;// 初始化上轮损失金币数
    lastTotal.innerText = lasttoal;// 初始化上轮情况
    bigFishCount.innerText = bigfish;// 初始化大鱼数量
    bigFishRatio.innerText = bigFishRatioValue;// 初始化大鱼比率
    smallFishCount.innerText = smallfish;// 初始化小鱼数量
    smallFishRatio.innerText = smallFishRatioValue;// 初始化小鱼比率
    EscapeFish.innerText = fishEscape;// 初始化本轮鱼逃脱数量
}
//点击“添加鱼竿”气泡
bubbles.forEach((bubbles, index) => {
    bubbles.addEventListener('click', () => addRod(index)); // 添加鱼竿
})

//点击“取消添加鱼竿”气泡
subs.forEach((subs, index) => {
    subs.addEventListener('click', () => removeRod(index)); // 取消添加鱼竿
})
//添加鱼竿
function addRod(index) {
    // 显示对应的取消气泡和图片
    subs[index].style.display = "block";
    img[index].style.display = "block";

    // 隐藏原来的“添加鱼竿”气泡
    bubbles[index].style.display = "none";
    fishingRods++; // 增加鱼竿数量
}

//取消添加鱼竿
function removeRod(index) {
    // 移除对应的取消气泡和图片
    subs[index].style.display = "none";
    img[index].style.display = "none";

    // 显示原来的“添加鱼竿”气泡
    bubbles[index].style.display = "block";
    fishingRods--; // 减少鱼竿数量
}

function returnFloat(value){
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split( "." );
    if (xsd.length==1){
    value=value.toString()+ ".00" ;
    return value;
    }
    if (xsd.length>1){
    if (xsd[1].length<2){
    value=value.toString()+ "0" ;
    }
    return value;
    }
}

// 点击开始捕鱼事件
startButton.addEventListener('click', startFishing);

// 开始钓鱼
function startFishing() {
    if (catchFish()==0) {
        return;
    } else {
    // 显示鱼群
    Group.style.display = 'block'; 

    // 2秒后隐藏
    setTimeout(() => {
        Group.style.display = 'none'; // 隐藏鱼
        // 显示结果栏
        if(fishEscape==0){  
            result1.style.display = 'block'; // 显示结果栏
            // 5秒后隐藏结果栏
            setTimeout(() => {
                result1.style.display = 'none'; // 隐藏结果栏
                // 更新左侧栏数据
                updateLeftPanel(); // 调用更新函数
            }, 5000);// 隐藏结果栏的延迟
        }else{
            result2.style.display = 'block'; // 显示结果栏
            // 5秒后隐藏结果栏
            setTimeout(() => {
                result2.style.display = 'none'; // 隐藏结果栏
                // 更新左侧栏数据
                updateLeftPanel(); // 调用更新函数
            }, 5000);// 隐藏结果栏的延迟
        }
    }, 2000); // 隐藏鱼的延迟 
    }
}
function catchFish() {
    if (fishingRods == 0) {
        alert("请先购买鱼竿！");
        return 0;
    }
    bigFishcatch = 0;
    smallFishcatch = 0;
    fishEscape = 0;
    let lasttoal = 0; // 上轮得分
    let lastwin = 0; // 上轮赢取金币数
    let lastlose = 0; // 上轮损失金币数

    for (let i = 0; i < fishingRods; i++) {
        const rand = Math.random() * 100;
        if (rand < bigFishRatioValue) {
            const Rand = Math.random() * 100;
            if(Rand<20){
            fishEscape++;
            }else{
            bigFishcatch++;
            }
        } else {
            const Rand = Math.random() * 100;
            if(Rand<10){
            fishEscape++;
            }else{
            smallFishcatch++;
            }
        }
    }
    orcoins -= fishingRods * 2;
    // 更新金币数
    coins += bigFishcatch * 10 - smallFishcatch * 5-fishingRods * 2;

    bigfish -= bigFishcatch;
    lastwin =bigFishcatch * 10;
    lastlose = smallFishcatch * 5;
    lasttoal = lastwin - lastlose;
    bigFishRatioValue = returnFloat((bigfish / (bigfish + smallfish)) * 100); 
    smallFishRatioValue = returnFloat((smallfish / (bigfish + smallfish)) * 100);
    // 更新界面 

    bigFishCatch1.innerText = bigFishcatch;// 更新大鱼捕获数量1
    smallFishCatch1.innerText = smallFishcatch;// 更新小鱼捕获数量1
    roundCoins1.innerText = lasttoal;// 更新本轮金币数1

    bigFishCatch2.innerText = bigFishcatch;// 更新大鱼捕获数量2
    smallFishCatch2.innerText = smallFishcatch;// 更新小鱼捕获数量2
    roundCoins2.innerText = lasttoal;// 更新本轮金币数2
    fishEscapeCount.innerText = fishEscape;// 更新鱼逃脱数量
}

// 更新左侧栏数据的函数
function updateLeftPanel() {
    // 在这里更新左侧栏的数据
    round++; // 增加轮数

    //之前显示的“取消鱼竿”气泡和图片消失，并重新出现“添加鱼竿”气泡
    for (let i = 0; i < 5; i++) {
        subs[i].style.display = "none";
        img[i].style.display = "none";
        bubbles[i].style.display = "block";
    }
    fishingRods = 0; // 重置鱼竿数量

    lastwin =bigFishcatch * 10;
    lastlose = smallFishcatch * 5;
    lasttoal = lastwin - lastlose;
    orcoins -= fishingRods * 2;
    // 更新界面
    Round.innerText = round;// 更新轮数
    Coins.innerText = coins;// 更新总金币数
    OrCoins.innerText = orcoins;// 更新鱼竿购买金币
    bigFishCount.innerText = bigfish;// 更新大鱼数量
    smallFishCount.innerText = smallfish;// 更新小鱼数量 
    bigFishRatio.innerText = bigFishRatioValue;// 更新大鱼比率
    smallFishRatio.innerText = smallFishRatioValue;// 更新小鱼比率
    EscapeFish.innerText = fishEscape;// 更新本轮鱼逃脱数量
    lastWin.innerText = lastwin;// 更新上轮赢取金币数
    lastLose.innerText = lastlose;// 更新上轮损失金币数
    lastTotal.innerText = lasttoal;// 更新上轮情况
    // 结束捕鱼的条件
    if (round > 10) {
        alert(`十轮游戏结束，恭喜您获得总金币：${coins}！`);
        resetGame();
    } else {
        //再次钓鱼
        startButton.addEventListener(); // 触发开始钓鱼按钮的点击事件
    }
}

// 停止捕鱼按钮的点击事件
stopButton.addEventListener('click', () => {
    alert(`恭喜您获得总金币${coins}！`);
    resetGame();
});
// 重置游戏
function resetGame() {
    coins = 100;// 总金币数
    lasttoal = 0; // 上轮得分
    lastwin = 0; // 上轮赢取金币数
    lastlose = 0; // 上轮损失金币数
    fishingRods = 0; // 重置鱼竿数量
    fishEscape = 0; // 重置鱼逃脱数量
    orcoins = 100;
    round = 1;
    bigfish = 46;
    smallfish = 50;
    bigFishcatch = 0; // 捕获的大鱼数量
    smallFishcatch = 0; // 捕获的小鱼数量
    bigFishRatioValue = returnFloat((bigfish / (bigfish + smallfish)) * 100); // 大鱼比率
    smallFishRatioValue = returnFloat((smallfish / (bigfish + smallfish)) * 100); // 小鱼比率
    roundcoins = 0; // 本轮金币数
    init();
}
init();