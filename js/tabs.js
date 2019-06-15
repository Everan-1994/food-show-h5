var searchImg = document.getElementById("search-icon");
var maskWrap = document.getElementById("mask-wrap");

var tabs = document.getElementsByClassName('tab-menu')[0].getElementsByTagName('li'),
    contents = document.getElementById('content').getElementsByClassName('tab');

// 高亮tab的选项卡
(function changeTab(tab) {
    for (var i = 0, len = tabs.length; i < len; i++) {
        tabs[i].onmouseover = showTab;
    }
})();

function showTab() {
    for (var i = 0, len = tabs.length; i < len; i++) {
        if (tabs[i] === this) {
            tabs[i].className = 'tab-active';
            contents[i].style.display = 'block';
			swiper = new Swiper('.cultural-wraps .swiper-container', {
			    autoplay: true, // 可选选项，自动滑动
			    pagination: {
			        el: '.swiper-pagination', // 滚动小图标
			    },
			});
        } else {
            tabs[i].className = '';
            contents[i].style.display = 'none';
        }
    }
}

// 获取输入框的值，隐藏搜索按钮

function getSearchName() {
    searchImg.style.display = "none";
}

// 点击删除按钮，触发删除按钮的模态框

function delHistory() {
    maskWrap.style.display = "block";
}

// 点击确认按钮，删除历史记录
function hiddenMask() {
    maskWrap.style.display = "none";
}

// 点击搜索按钮回车事件
function getSearch() {
    var searchValue = document.getElementById("searchValue").value; // 搜索框输入的值
    var emptyWrap = document.getElementsByClassName("empty-wrap"); // 搜索空的结果的展示
    var contentWrap = document.getElementById("content"); // 搜索有结果的节点
    if (searchValue) {
        emptyWrap[0].style.display = "block";
        contentWrap.style.display = "none";
    }

}