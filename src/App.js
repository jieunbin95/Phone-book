import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContactForm from './Component/ContactForm'
import ContactList from './Component/ContactList'


//1. 왼쪽에는 연락처를 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다
//2. 유저가 이름과 전화번호를 입력하고 추가버튼을 누르면, 리스트에 추가된다
//3. 리스트에 아이템이 몇개가 있는지 알 수 있다
//4. 유저가 이름으로 검색할 수 있다


function App() {
  return (
    <Container>
      <div className="title">
        <h1>Phone Book</h1>
      </div>


      <Row>
        <Col><ContactForm/></Col>
        <Col><ContactList/></Col>
      </Row>
    </Container>
  );
}

export default App;
