    // 视频------视频截图 ~~ 视频播放状态 ~~
    const setMedia = function(video, scale = 0.8) {
        // 设置poster属性：（非本地视频资源会有跨域截图问题）
        video.addEventListener('loadeddata', function(e) {
            // 拿到图片
            let canvas = document.createElement('canvas');
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            let src = canvas.toDataURL('image/png');
            // 显示在dom，测试用
            (function(flag = true) {
                if (!flag) { return; }
                let img = document.createElement('img');
                img.src = src;
                document.body.appendChild(img);
            })(0);
            // 设置属性
            video.setAttribute('poster', src);
        });
        // -------------------------------------------------------------------------------------
        //检测视频播放状态：
        //播放按钮
        let playBtn = video.parentNode.childNodes[2].nextSibling;
        //设置状态
        function vidplaySate(e) {
            if (video.paused) {
                video.play();
                playBtn.classList.add('pause');
            } else {
                video.pause();
                playBtn.classList.remove('pause');
            }
        }
        //点击监听
        video.addEventListener('click', vidplaySate, false);
        playBtn.addEventListener('click', vidplaySate, false);
        //结束监听
        video.addEventListener('ended', function() {
            playBtn.classList.remove('pause');
        });
    };
    //视频：
    let videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        setMedia(video);
    });