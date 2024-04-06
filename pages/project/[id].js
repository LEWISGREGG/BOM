import { db } from "../../firebase";
import styled from "styled-components";
import Head from "next/head";
import 'firebase/firestore';
import ChatScreen from "../../components/ChatScreen";



function Chat({ chat, items, qtys, id }) {

    return (
      <Container>
        <Head>
          <title>Project {id}</title>
        </Head>
        <ChatContainer>

          <ChatScreen chat={chat} id={id}  items={items}  qtys={qtys}/>
        </ChatContainer>
    
      </Container>
    );
  }
  
  export default Chat;

  export async function getServerSideProps(context) {
    const ref = db.collection("bom").doc(context.query.id);
    
    const itemsRes = await ref
    .collection("items")
    .get();

    const qtysRes = await ref
    .collection("items")
    .get();


    const items = itemsRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((items) => ({
      ...items,
    }));

    const qtys = qtysRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((qtys) => ({
      ...qtys,
    }));


  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      items: JSON.stringify(items),
      qtys: JSON.stringify(qtys),
      chat: chat,
    },
  };
}




  const Container = styled.div`
  display: flex;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;

const ChatContainer = styled.div`
  flex: 1;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;