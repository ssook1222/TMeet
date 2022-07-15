import NavBar from "../../components/navigationBar/NavBar";

//로그인 성공 시 리다이렉트 되는 페이지
//추후 여기에 백엔드로 인가코드 request 보내고 response로
//카카오 이메일, 닉네임 받아오게 한 후 추가적으로 집 근처 지하철역 정보 물어봐서 저장할 수 있게끔 구현해야 함.

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <h1>test 성공</h1>
        </div>
    );
}

export default App;
