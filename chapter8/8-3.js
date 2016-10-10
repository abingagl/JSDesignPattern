// DOM事件， 就是一种发布-订阅模式

document.body.addEventListener('click', function() {
  console.log('click');
}, false);

// 注意：手动触发事件最好的做法是IE下使用fireEvent，标准浏览器下使用dispatchEvent实现