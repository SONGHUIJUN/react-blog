function setSize(){
  let deviceWidth = document.documentElement.clientWidth;
  if(deviceWidth > 750){
    deviceWidth = 750;
  }
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
}
setSize();
window.onresize = function () {
  setSize();
};