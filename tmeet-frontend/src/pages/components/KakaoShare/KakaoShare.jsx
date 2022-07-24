import React, { useEffect } from 'react'

const KakaoShareButton = () => {
    useEffect(() => {
        createKakaoButton()
    }, [])

    const createKakaoButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao

            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init('81be7e029e3d4dc79aa070da6bc0b761')
            }

            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '모임 날짜 및 시간',
                    description: 'YYYY-MM-DD AM/PM 00:00 ~ YYYY-MM-DD AM/PM 00:00',
                    imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                    {
                        title: '앱으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            })
        }
    }

    return (
        <div className="kakao-share-button">
            {/* Kakao share button */}
            <button id="kakao-link-btn"
                    style={{border : "none"}}>
                <img src="img/kakao-talk.png" alt="kakao-share-icon"
                    style={{width : "8vh"}}/>
            </button>
        </div>
    )
}

export default KakaoShareButton