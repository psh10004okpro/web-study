document.addEventListener("DOMContentLoaded", function() {
    //const appLinkButton = document.getElementById('appLink');
    //const urlParams = new URLSearchParams(window.location.search);
    //const page = urlParams.get('room');


    //const appScheme = 'unitydl://mindvr?2'; // 앱 스킴 (앱에서 정의한 스킴을 사용)
    const appStoreURL = 'https://play.google.com/store/apps/details?id=com.Mindvridge'; // 앱 스토어 URL (Google Play 예시)
    const appStoreURLiOS = 'https://apps.apple.com/app/id6449755259'; // 앱 스토어 URL (App Store 예시)
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    //const appScheme = `unitydl://mindvr?${encodeURIComponent(page)}`;
    const appScheme = `unitydl://mindvr?2`;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // iOS
        openApp(appScheme, appStoreURLiOS);
    } else if (/android/i.test(userAgent)) {
        // Android
        openApp(appScheme, appStoreURL);
    } else {

        openApp(appScheme, appStoreURL);
        // Other platforms or fallback
        //window.location.href = appStoreURL;
    }
    
    //document.getElementById('appLink').click();
    // function startApp()
    // {
    //     const appScheme = 'unitydl://mindvr?2';
    //
    //     setTimeout(function() {
    //         if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //             // iOS
    //             openApp(appScheme, appStoreURLiOS);
    //         } else if (/android/i.test(userAgent)) {
    //             // Android
    //             openApp(appScheme, appStoreURL);
    //         } else {
    //             // Other platforms or fallback
    //             window.location.href = appStoreURL;
    //         }
    //     }, timeout);
    //
    //
    // }


    // appLinkButton.addEventListener('click', function(e) {
    //     e.preventDefault();
    //
    //     const appScheme = `unitydl://mindvr?${encodeURIComponent(page)}`;
    //     //const appScheme = `unitydl://mindvr?2`;
    //
    //     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //         // iOS
    //         openApp(appScheme, appStoreURLiOS);
    //     } else if (/android/i.test(userAgent)) {
    //         // Android
    //         openApp(appScheme, appStoreURL);
    //     } else {
    //         // Other platforms or fallback
    //         window.location.href = appStoreURL;
    //     }
    // });

    function openApp(appScheme, appStoreURL) {
        const startTime = new Date().getTime();
        const timeout = 1500;
        const iframe = document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.onload = function() {
            document.body.removeChild(iframe);
        };
        iframe.src = appScheme;
        document.body.appendChild(iframe);
        console.log("appScheme : " + appScheme)
        
   // setTimeout(function() {
        //     const endTime = new Date().getTime();
        //     if (endTime - startTime < timeout + 100) {
        //         window.location.href = appStoreURL;
        //     }
        //
        //     window.close();
        //
        // }, timeout);
    }

    //startApp();
});
