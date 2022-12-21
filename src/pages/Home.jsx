// json형식 배열을 js파일에 보관하고 꺼내와 사용
import products from "../data.js"
import { useState } from 'react';

const Home = () => {
    const [food] = useState(products);

    return ( 
        <div>
            <div className='main-bg'>
        {/* src폴더에 이미지 있다면 상단에 임포트할 수 있다 (방법2) 
         style={{backgroundImage:'url('+bgimg+')'}} */}
            </div>
            <h1>Home 페이지</h1>
            <p>현재 내용은 나중에 product page에서 보여주고,<br/> 이 형식으로 인기상품만 홈에서 보여주기</p>
            <br /><br />
                {
                    food.map((food)=>(
                    <div key={food.id}>
                        <PrintProduct food={food} />
                    </div>
                    ))
                }
                {/* 원래 2,3째 이미지들 */}
                {/* <img src="https://lh3.googleusercontent.com/kvxkZdqlWtRQ-9bs_e7IfM4SWgD20sYAWa48CwUi0Bu2pDAY_yXIXXh7Yq-594YtSDSKH1TE9j0MJcOCjAIS7pwLCtYrrzDdqLpvmj_UHgFzMy46f1MeglE00DVcZ_UR8mT565p6iqL0316NcDzBA2876NFebCf-z69LGacBuZfP1gKR1sLw6aNaUoe3LIdyyFNYWU01nY1J5FYwPYwQ5J6FxmNDa99XBrjh4So8wtbdQX5eRNBczc4fCS109876vBWR3ZEe77papq2zYlM-EwNO89j60UaGWeED0U5KVwEIGC5unvOzwWk7_-Hh0LpXjvA8enzUV8JWcrKIQVrE73P38s1SKQqUAClda85vMH2UwUhJH9oZLjtv-YDuHEFpnbYHh54GA0Q8fy6jRnelJ1YhiYwfNEGcwsxWlrWt6ASD3Fg3YJZBQs7_-JJ8Yq4q59vqm22uG7AfhWh_rsAfGADtKnY464UbmeqBw0o3G-TJ2Sg-5ukPMpoBGZ4UHXbpgOzugzNQQxqhwyRTOfa__EthXdAGOP0EZq1SU0W2GbevB8xg4vmL95M-K0bd-AI7CymbZ_SbGcVul30cfHiwaAB3AmlsG_mFD3G0OhL-AocTGeKkGeI0YX-bZnFap-AglDVz4mMz7en5bE6AtrXcXNdRQHI6HeC2SQd95BXNR-uamPzcuIqLsOksCVntS61D3R6mpIjL-KfliT87MFZBmSmXuXpeQHKTxyuxusi5U2ZKAbeXl61ThZTd2A8Ie0K8u2syiUXm6SPJg5UxkAym6gTh2OLEUtF-LeVQKpEYZTAIgbMzaVY9rBBUPQabuqFG42FPaQFkXE8g74Qblvvw1gDgt_aeW-NdCIayfOKZrpwMXfX9JIlaVg9zOsVbpVC-qHohDTqaeT3e1dOd3TES4Ul4wzv-g4_c2K3HNQNntrwV=w1211-h807-no?authuser=0" 
                    width="30%" alt=''/> */}
                {/* <img src="https://lh3.googleusercontent.com/3b4GDV5siTlZk8OTyiTPhPpD-_Cdktt43lOV9lMXzU_qHqFa7w4GQkClqfUBhlnuhFCGmOukHZ1WpX4jOpc_IXD8qdDiEP8ttvK7m45-P6t0TH7IpiHdEC6czqyybqBx3miawMqTWUTa39F8mZOO06aQjdsz7ka2xuRlS6EKCVcil44GItBePk-zjwWT0QArl6207G4OnRhh_9JfLe6hzgttSagefN8tEH_P7Gj5LZXTua524oTvvuy2T-3M8plCTm2lkiJyamR_Q9SMPBp4QDRrlVfzJgkay4dR_RfMk_KTXlW4igYDh4ombze3d2XW8wHltJn0e7wEcrNl43N7blxmzJAYn-uawbHlPlZHqeZeetReV1wiKSFCFGfFHgZLBqOB72OcpIYXk4nbffUwfw6ikp0qkTaJQkn4c6uUtTVNRwNvW6qZsLaqm6eL5mG0NXnuqqEdnZFjKAupTNuISfCRg6rEHTiktsvmawH62EsU_2kGpjOt2ohoK2yufGdd3MYvFAxzhlXCv-KTO4bR2FQKKJvSUPvef0cm0yD_lkWnJ2X63AqEeT35L5IXCuPmhVSL67dCeE-oBcjjuLp0z_mh-RLpmpvC9r-n3nE3MruwDYkSXyC5NChaFQX10E2EebQj1CX7MsM1WW-GgvOCSUnFLa-yRlQgmmluz0Eq4tlZ105GSpCyPeCFztqgYAhU9bexmCdjKGVedHxAxGd6z8xkg5ooUmIX8aFnYfes6dijWma7n0C8MLF_h9iqRS9znutQ2l8JX3fuPmqapmt3cgsrYfbjF_RQRnHNQm4fDDmLHi58BOif6YAtfkF6LeiHahVnKi42eFrYLCsJgjLqDO0fX87nGcdWgK-CBa0k4xm_Hj_iIyYDK1PZ79W_JIX9zKyYoSeEU1IEVmhKawlnPFgl2MHFHbcqEsIv7_4Kp9xZ=w1211-h807-no?authuser=0" 
                    width="30%" alt=''/> */}
        </div>
    );
}

export default Home;



// 제품 출력하는, 반복되는 UI : 컴포넌트로 따로 만들기
// 사진은 현재 img src로 출력 중이지만, 변수처리해서 작업폴더에 다운받아 사용예정
const PrintProduct =(props) => {
    const {food} = props;

    return (
        <div>
            <img src="https://lh3.googleusercontent.com/MdWdL4B6bmkjqFUf34ygb041eIpNNIaaWYq2otNeefpRinhQO8tIi25oD4vyS0Xza3XxMac9DjD9ej0oBJZYMMQyawGCTrpbXflQa2Bo7mNJ9yvmJTzlAOTCppNXvUQr0U63e9z0OIpRNFtSgZUUYJzZbmm467RCPVAFx9nHMyhtQVnQYMDjOoGIN4KgD5hcGNJ7Od0GoWHoDClfZb8qlJn5d2_Q140Xcnf2zWy_b7McJI5tpZYwDI1USfV7hHy4_R6hMXuMHaXWNNMG8cniG9UmpyipTpYWi3QlJydguDTKMMu2OhVXdT2yUl931uFqwvgPDTwMoaNMMj9J8RtfXwop5c7FNPm_Wtjunef1zkIAuABfHgEmIymVyKhdHrsNSPGSzNJMbiFtBZvAYdK3DvCj0fsnJdrmWsYM5HG2sr_5qCsYRHgvEull3jtAkffXfTD79iHIVbehZgO9MaI0WKjCeUbtqPiLGEz02WfVMKCuZEq6GuENxEjFIxm2DvUeJUcxcsF-oh8SJ5ECMaa6cMswydM_y6vlHmVU_DwPkypSC6_EROomk-3OnXGeYIQ9IHaWR1f2HnpPw4tyjB2w5WHb_xLpLYfYsmMdQMNth2fL89ZrfTnYK3II-aNwp1f3BBNGDsDKnO9LprqIeBQm5AhPZdG3WIdHTNSWP70Xxlof3kVtsHDFBJQwms6p1Q0vDQRBYZxV3WHA8cE-2Ad1maI4YFqpy7T6uII9eCcTM3skr8m5ZReZtqHS3_RQCDpV07OBDgAa-OH967qsgHTgvzmvaVCTU5F5MbnQz-1ZlPfBPcFCevg2bJNHJkCWdGrUbMYR-g2Yf0RzHHDHhW2MGbZHyTJBY4kDGLHc3zfI9TMGziiV2RHpHDQ5b0s07QK3DvsdNUhSx3wKDbgzneRydr9KXQ8J-FocEDMDN0g9NYur=w1200-h807-no?authuser=0" 
                width="30%" alt=''/>
            <h3>상품: {food.name}</h3>
            <p>상품 설명: {food.info}</p>
            <p>가격: {food.price}</p>
        </div>
    );
}
